import { faker } from "@faker-js/faker"
import axios from "axios"
import classNames, { type ArgumentArray } from "classnames"

import type { IFollowChannelsData, MainNavItem } from "@/types/common"
import type { BooleanishEnum } from "@/types/common/zod/generic"
import { defaultColor } from "@/config/data"

// =======================================				Native Override				=======================================

export function capitalize<const TInput extends string>(
  input?: TInput | null
): Capitalize<TInput> {
  return (
    input
      ? input.replace(
          /(^\w|\s\w)(\S*)/g,
          (_, firstLetter: string, rest: string) =>
            firstLetter.toUpperCase() + rest.toLowerCase()
        )
      : ""
  ) as Capitalize<TInput>
}

export function createArray<TFill>(fill: TFill, len = 0) {
  return Array(len).fill(fill) as Array<TFill>
}

export function sleep(milliseconds = 0) {
  return new Promise<void>((resolve) => setTimeout(resolve, milliseconds))
}

/**
 * Returns the index of the first occurrence of a value in an array and -1 otherwise.
 *
 * This mainly used for finding the index in arrays of primitive types (like string, number, or boolean)
 * https://stackoverflow.com/a/41443138
 */
export function indexOf<const TSearch extends Readonly<string | number>>(
  arr: Readonly<Array<TSearch>>,
  search: TSearch,
  fromIndex?: number,
  defaultIndex?: number
) {
  return arr.indexOf(search, fromIndex || -1) ?? (defaultIndex || -1)
}

/**
 * Returns the index of the first element in the array where predicate is true, and -1
 * otherwise.
 *
 * This mainly used for complex arrays with non-primitive types (e.g., objects)
 * https://stackoverflow.com/a/41443138
 */
export function findIndex<TSearch>(
  arr: Readonly<Array<TSearch>>,
  predicate: (
    value: TSearch,
    index: number,
    obj: readonly TSearch[]
  ) => unknown,
  defaultIndex?: number
) {
  return arr.findIndex(predicate) ?? (defaultIndex || -1)
}

// =======================================					Utilities					=======================================

export function booleanishToBoolean(
  input: BooleanishEnum | null = "false"
): input is "true" {
  return input === "true"
}

export function booleanToBooleanish(
  input: boolean | null = false
): BooleanishEnum {
  return input ? "true" : "false"
}

export function isClientSide() {
  return typeof window !== "undefined"
}

export function cn(...inputs: ArgumentArray) {
  return classNames(inputs)
}

// convert snake case text to normal words with space
export function convertCode<TInput extends string>(input?: TInput | null) {
  return input ? capitalize(input.toLowerCase().replaceAll("_", " ")) : ""
}

export const formatViewCount = (view: number) => {
  return (
    Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(view) ?? "Not available"
  )
}

export const orderFollowedChannel = (channels: IFollowChannelsData[]) => {
  const sortedChannels = channels.sort((a, b) => {
    // Compare isLive first
    if (a.isLive === b.isLive) {
      // If both are live, sort by view in descending order
      if (a.isLive) {
        return (b.view || 0) - (a.view || 0)
      }

      // If both are not live, keep original order (or apply different sorting if needed)
      return 0
    }

    // Otherwise, sort by isLive (true comes before false)
    return (b.isLive ? 1 : 0) - (a.isLive ? 1 : 0)
  })

  return sortedChannels
}

/**
 * Return the current route information in dashboard by recursive search
 *
 * @param pathname current pathname
 * @param sites dashboard route config
 * @return current route information in the dashboard route config
 * */
export const findMatchingSite = (
  pathname: string,
  sites: MainNavItem[]
): MainNavItem | null => {
  const findInItems = (items: MainNavItem[]): MainNavItem | null => {
    for (const item of items) {
      if (item.slug && pathname.includes(item.slug)) {
        return item
      }

      if (item.items && item.items.length > 0) {
        const found = findInItems(item.items)

        if (found) return found
      }
    }

    return null
  }

  return findInItems(sites)
}

export const getRandomRgb = (): string => {
  const randomNumber = faker.number.int({ max: 4, min: 0 })

  return defaultColor[randomNumber] as string
}

// use to fill in the chat dummy data
export const getRandomStuffRelatedToFood = () => {
  const randomNumber = faker.number.int({ max: 9, min: 1 })
  let randomMessage = ""

  switch (randomNumber) {
    case 1:
      randomMessage = faker.food.adjective()
      break
    case 2:
      randomMessage = faker.food.description()
      break
    case 3:
      randomMessage = faker.food.dish()
      break
    case 4:
      randomMessage = faker.food.ethnicCategory()
      break
    case 5:
      randomMessage = faker.food.fruit()
      break
    case 6:
      randomMessage = faker.food.ingredient()
      break
    case 7:
      randomMessage = faker.food.meat()
      break
    case 8:
      randomMessage = faker.food.spice()
      break
    default:
      randomMessage = faker.food.vegetable()
      break
  }

  return randomMessage
}

export const axiosHttpErrorHandler = (error: unknown) => {
  if (error === null) {
    return {
      code: "not_axios_error",
      description: "Error is not from http request!",
      error: true,
      errors: [],
      status: 500,
    }
  }

  if (axios.isAxiosError(error)) {
    const response = error?.response;
    const request = error?.request;

    let code = "unknown_error";
    let description = "An unknown error occurred.";
    let status = 500;
    const errors = [];
    let message = error.message; // Default to the general error message from Axios

    if (error.code === "ERR_NETWORK") {
      code = "network_error";
      description = "Connection problems.";
      message = description;
      status = 503;
    } else if (error.code === "ERR_CANCELED") {
      code = "request_canceled";
      description = "Connection canceled.";
      message = description;
      status = 499;
    }

    if (response) {
      status = response.status;
      code = response.status === 400 || response.status === 422 ? "invalid_data" : code;
      code = response.status === 401 ? "invalid_token" : code;
      code = response.status === 403 ? "permission_denied" : code;
      code = response.status === 500 ? "server_error" : code;
      description = response.statusText || description;
      message = response.data?.message || message; // Pull the message from response data if available
    } else if (request) {
      code = "no_response";
      description = "The request was made, but no response was received.";
      message = description;
      status = 408;
    }

    return {
      code,
      description,
      error: true,
      errors,
      status,
      message
    };
  }

  // General error case
  return {
    code: "general_error",
    description: error instanceof Error ? error.message : "Unknown error",
    error: true,
    errors: [],
    status: 500,
    message: error instanceof Error ? error.message : "Unknown error"
  };
};

export function parserPage(page: string) {
  let pageNumber: number

  try {
    pageNumber = parseInt(page) || 1
    if (pageNumber < 1) pageNumber = 1
  } catch (e) {
    pageNumber = 1
  }

  return pageNumber
}

export function parserRows(rows: string, defaultValue: number) {
  let _rows: number

  try {
    _rows = parseInt(rows) || defaultValue
    if (_rows < 1) _rows = defaultValue
  } catch (e) {
    _rows = defaultValue
  }

  return _rows
}

export function generatePagination(activePage: number, totalPages: number) {
  const paginationLength = 5

  let startPage = Math.max(1, activePage - Math.floor(paginationLength / 2))
  const endPage = Math.min(totalPages, startPage + paginationLength - 1)
  const pagination = []

  if (endPage - startPage + 1 < paginationLength) {
    startPage = Math.max(1, endPage - paginationLength + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pagination.push(i)
  }

  return pagination
}
