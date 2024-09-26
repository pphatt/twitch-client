import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { shareCss } from "@/components/layouts/site-header/style"

export const DropdownItemButton = styled(Button)`
  flex-direction: row-reverse;
  justify-content: flex-end;

  color: inherit;
  background: transparent;

  max-width: 100%;
  width: 100%;
  height: inherit;

  ${shareCss}
`
