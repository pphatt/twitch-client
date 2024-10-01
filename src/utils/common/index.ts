import { faker } from "@faker-js/faker"
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

export function isServerSide() {
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
