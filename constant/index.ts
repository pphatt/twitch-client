import type { MosaicNode } from "react-mosaic-component"

export const DEFAULT_LAYOUT: MosaicNode<string> = {
  direction: "row",
  first: {
    direction: "column",
    first: "Stream Preview",
    second: "Quick Action",
    splitPercentage: 70,
  },
  second: {
    direction: "row",
    first: "Activity Feed",
    second: "My Chat",
    splitPercentage: 50,
  },
}
