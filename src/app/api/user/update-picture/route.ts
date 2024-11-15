import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import {
  handleSelectLatestAccessToken,
  handleSelectLatestRefreshToken,
} from "@/utils/auth.utils"
import { sleep } from "@/utils/common"
import { UserRequest } from "@modules/core/presentation/endpoints/user/user.request"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"

export async function POST(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const refreshToken = handleSelectLatestRefreshToken(request)

  if (!refreshToken) {
    return Response.json(
      { message: "Refresh Token Not Found" },
      { status: 401 }
    )
  }

  const formData = await request.formData()
  const image = formData.get("picture")

  if (!image || !(image instanceof Blob)) {
    return new Response(JSON.stringify({ message: "Image file is required" }), {
      status: 400,
    })
  }

  try {
    const file = new File([image], "profile-picture.jpg", {
      type: image.type,
    })

    const formDataForApi = new FormData()
    formDataForApi.append("picture", file)

    await UserRequest.updateProfilePicture(formDataForApi, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    // NOTE: add delay here to make sure the image upload all the way
    //  and if refresh token too soon it return old image url
    await sleep(5000)

    const {
      refreshToken: newRefreshToken,
      accessToken: newAccessToken,
      profile,
    } = await UserRepository.refreshToken({
      refreshToken,
    })

    if (newAccessToken) {
      cookies().set("access-token", newAccessToken)
    }

    if (newRefreshToken) {
      cookies().set("refresh-token", newRefreshToken)
    }

    if (profile) {
      cookies().set("profile", JSON.stringify(profile))
    }

    return Response.json(
      {
        profile,
        message: "Update user profile picture successfully",
      },
      {
        status: 201,
      }
    )
  } catch (err) {
    console.log(err)
    return Response.json(
      {
        message: err,
      },
      {
        status: 400,
      }
    )
  }
}
