import classNames, { type ArgumentArray } from "classnames"

export function cn(...inputs: ArgumentArray) {
  return classNames(inputs)
}

export const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
