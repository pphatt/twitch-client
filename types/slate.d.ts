// // This example is for an Editor with `ReactEditor` and `HistoryEditor`
// import type { BaseEditor } from "slate"
// import type { HistoryEditor } from "slate-history"
// import type { ReactEditor } from "slate-react"
//
// type CustomElement = { type: "paragraph"; children: CustomText[] }
// type CustomText = { text: string; bold?: true }
//
// declare module "slate" {
//   interface CustomTypes {
//     // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
//     Editor: BaseEditor & ReactEditor & HistoryEditor
//     Element: CustomElement
//     Text: CustomText
//   }
// }
