import * as React from "react"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import { jwtDecode, type JwtPayload } from "jwt-decode"
import { toast } from "sonner"

export const useViewerToken = (hostIdentity: string) => {
  const [token, setToken] = React.useState("")
  const [name, setName] = React.useState("")
  const [identity, setIdentity] = React.useState("")
  const [color, setColor] = React.useState("")

  React.useEffect(() => {
    const createToken = async () => {
      try {
        const { viewerToken } = await UserRepository.setViewerToken({
          hostIdentity,
        })

        setToken(viewerToken)

        const decodedToken = jwtDecode<
          {
            name: string
            metadata: string
          } & JwtPayload
        >(viewerToken)

        const metadata = JSON.parse(decodedToken.metadata) as { color: string }

        const name = decodedToken.name
        const identity = decodedToken.jti
        const color = metadata.color

        if (identity) {
          setIdentity(identity)
        }

        if (name) {
          setName(name)
        }

        if (color) {
          setColor(color)
        }
      } catch {
        toast.error("Something went wrong")
      }
    }

    void createToken()
  }, [hostIdentity])

  return {
    token,
    name,
    identity,
    color,
  }
}
