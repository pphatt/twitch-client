import { type IUserStateData } from "@/types"
import { isClerkAPIResponseError } from "@clerk/nextjs"
import classNames, { type ArgumentArray } from "classnames"
import { toast } from "sonner"
import { z } from "zod"

import type { LatestChapterResponse } from "@/types/comic-k"

export function cn(...inputs: ArgumentArray) {
  return classNames(inputs)
}

export const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function catchClerkError(err: unknown) {
  const unknownErr = "Something went wrong, please try again later."

  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message
    })

    return toast(errors.join("\n"))
  } else if (isClerkAPIResponseError(err)) {
    return toast.error(err.errors[0]?.longMessage ?? unknownErr)
  } else {
    return toast.error(unknownErr)
  }
}

export const round = (num: number, decimalPlaces = 0) => {
  const p = Math.pow(10, decimalPlaces)
  const n = num * p * (1 + Number.EPSILON)
  return Math.round(n) / p
}

/*
 * Compress image by using lower resolution image for the same image
 * */
export const compressImage = (image: string, regex?: string): string => {
  if (image.includes("jpg") || image.includes("png")) {
    return `${image.split(".")[0]}-${regex ? regex : "s"}.jpg`
  }

  return image
}

/*
 * Compress webp image by using lower resolution image for the same image if it has optimized
 * */
export const webpImage = (image: string, optimized: number | null): string => {
  if (!optimized) {
    return image
  }

  if (image.includes("webp")) {
    return `${image.split(".")[0]}-m.jpg`
  }

  return compressImage(image, "m")
}

export const getAllManga = async (manga: string[]) => {
  return await Promise.all(
    manga.map(async (element) => {
      const response = await fetch(`/api/latest?page=${element}`)

      return (await response.json()) as LatestChapterResponse
    })
  )
}

export function langCode(code: string, language: string) {
  switch (code) {
    case "ja":
      return "Manga"
    case "ko":
      return "Manhwa"
    case "zh_Hans":
    case "zh":
      return "Manhua"
    default:
      return language
  }
}

export function status(status: number) {
  switch (status) {
    case 1:
      return "Ongoing"
    case 2:
      return "Complete"
    case 3:
      return "Cancelled"
    default:
      return "Hiatus"
  }
}

export function parserDate(date: Date, render?: "show"): string {
  const parser = new Date(date)
  const current_time = new Date()

  const diff = current_time.getTime() - parser.getTime()

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months =
    (current_time.getFullYear() - parser.getFullYear()) * 12 -
    parser.getMonth() +
    current_time.getMonth()
  const years = current_time.getFullYear() - parser.getFullYear()

  if (seconds < 60) {
    if (seconds === 1) {
      return "a second ago"
    }

    return `${seconds} seconds ago`
  } else if (minutes < 60) {
    if (minutes === 1) {
      return "a minute ago"
    }

    return `${minutes} minutes ago`
  } else if (hours < 24) {
    if (hours === 1) {
      return "an hour ago"
    }

    return `${hours} hours ago`
  } else if (days < 30) {
    if (days === 1) {
      return "a day ago"
    }

    return `${days} days ago`
  } else if (months < 13) {
    if (render === "show") {
      return new Date(date).toLocaleString("vn").toString()
    }

    if (months === 1) {
      return "a month ago"
    }

    return `${months} months ago`
  } else {
    if (render === "show") {
      return new Date(date).toLocaleString("vn").toString()
    }

    if (years === 1) {
      return "a year ago"
    }

    return `${years} years ago`
  }
}

export function isMacOs() {
  if (typeof window === "undefined") return false

  return window.navigator.userAgent.includes("Mac")
}

export function validateAndGetParam<T>(
  params: T | null,
  validValues: string[]
): T | null {
  if (params && Array.isArray(params)) {
    return params.filter((value: string) =>
      validValues.includes(value)
    ) as T | null
  }

  if (params && typeof params === "string" && validValues.includes(params)) {
    return params
  }

  return null
}

export function getQueryParams<
  T extends { [key: string]: string | string[] | null },
>(params: T) {
  return Object.entries(params)
    .filter(
      ([_, value]) =>
        value !== null && (Array.isArray(value) ? value.length > 0 : true)
    )
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((v) => `${key}=${v}`).join("&")
      } else {
        return `${key}=${value}`
      }
    })
    .join("&")
}

export function checkValidFiltered(userInfo: IUserStateData) {
  /*
   * get the user persist in localStorage
   * check if the filtered is correct according to this ["manga", "manhwa", "manhua"]
   *  */

  const validComicTypes = ["manga", "manhwa", "manhua"]
  const filteredComicTypes = Array.from(
    new Set(userInfo.info.filtered_comic_type)
  )

  const containsOnlyValidTypes = filteredComicTypes.some((value) =>
    validComicTypes.includes(value)
  )

  const containAllValidTypes = validComicTypes.every((value) =>
    filteredComicTypes.includes(value)
  )

  return { filteredComicTypes, containsOnlyValidTypes, containAllValidTypes }
}

/**
 * Sort comic info type
 *
 * @param types filtered comic type ["manga", "manhwa", "manhua"]
 * @return depends on the query, it may return typeSort (type=manga) or countrySort (country=jp)
 * */
export function sortComicType(types: string[]) {
  const selectedComicTypes = types.filter((value) =>
    ["manga", "manhwa", "manhua"].includes(value)
  )

  const typeSort = selectedComicTypes
    .map((value) => `&comic_types=${value}`)
    .join("")

  const countrySort = selectedComicTypes
    .map((value) => {
      if (value === "manga") {
        return `country=jp`
      }

      if (value === "manhwa") {
        return `country=kr`
      }

      if (value === "manhua") {
        return `country=cn`
      }
    })
    .join("&")

  return { typeSort, countrySort }
}
