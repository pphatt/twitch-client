import * as React from "react"
import { LayoutContext } from "@/context/update-layout-context"

export const useUpdateLayoutContext = () => {
  const { layout, setLayout } = React.useContext(LayoutContext)

  return { layout, setLayout }
}
