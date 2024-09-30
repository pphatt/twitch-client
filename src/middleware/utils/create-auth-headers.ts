type Props = {
  accessToken?: string
  refreshToken?: string
}

export const createAuthHeaders = (
  headers: Headers,
  { accessToken, refreshToken }: Props
) => {
  const cookies: string[] = []

  if (accessToken) {
    cookies.push(`access-token=${accessToken}`)
  }

  if (refreshToken) {
    cookies.push(`refresh-token=${refreshToken}`)
  }

  const newHeaders = {
    ...headers,
    Cookie: cookies.length ? cookies.join("; ") : headers.get("Cookie"),
  }

  return new Headers(newHeaders)
}
