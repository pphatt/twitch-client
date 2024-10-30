import * as React from "react"
import {AxiosError} from "axios";

export default function ServerError({
  children,
  error
}: {
  children: React.ReactNode
  error: unknown
}) {
  if (isUnauthorizedError(error)) {

  }

  return <>{children}</>
}

const isUnauthorizedError = (error: unknown): boolean => {
  return error instanceof AxiosError && error.response?.status === 401;
}
