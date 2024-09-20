"use client"

import * as React from "react"
import { ALL_AVAILABLE_PANEL } from "@/constant/panel"
import { useEditLayoutState } from "@/store/state/dashboard"
import {
  Corner,
  getLeaves,
  getNodeAtPath,
  getPathToCorner,
  updateTree,
  type MosaicNode,
} from "react-mosaic-component"

import { cn } from "@/lib/utils"
import { useMosaicUpdateLayout } from "@/hooks/useMosaicUpdateLayout"
import { Hint } from "@/components/common/hint"
import { Icons } from "@/components/icons"
import {
  AddButtonLayoutWrapper,
  ContentButton,
  ContentButtonWrapper,
  ContentContainer,
  ContentText,
  ContentTextContainer,
  ContentTextWrapper,
  ContentWrapper,
  MenuContentContainer,
  MenuContentHeader,
  MenuContentWrapper,
  MenuDescriptionText,
  MenuDescriptionWrapper,
  MenuHeaderWrapper,
  MenuLayout,
  MenuLayoutWrapper,
  MenuWrapper,
  SimpleBarWrapper as SimpleBar,
} from "@/components/stream-manager/add-panel/style"

export default function AddPanel() {
  const [isHoverOn, setIsHoverOn] = React.useState(false)

  const { editLayout, setEditLayout } = useEditLayoutState()

  const { layout, setLayout } = useMosaicUpdateLayout()

  const leaves = React.useMemo(() => getLeaves(editLayout), [editLayout])

  const addWindowPanel = React.useCallback(
    (id: string) => {
      const path = getPathToCorner(editLayout, Corner.TOP_RIGHT)

      const destination = getNodeAtPath(editLayout, path) as MosaicNode<string>

      const tree = updateTree(editLayout!, [
        {
          path,
          spec: {
            $set: {
              direction: "row",
              first: destination,
              second: id,
            },
          },
        },
      ])

      setLayout(tree)
      setEditLayout(tree)
    },
    [editLayout, layout, setLayout]
  )

  return (
    <div className={"sm-sliding-edit-menu"}>
      <div className={"sm--edit-menu__container"}>
        <div
          onMouseOver={() => setIsHoverOn(true)}
          onMouseLeave={() => setIsHoverOn(false)}
          className={cn("sm--edit-menu", {
            ["sm--edit-menu__full"]: isHoverOn,
            ["sm--edit-menu__condensed"]: !isHoverOn,
          })}
        >
          <div className={"sm--edit-menu__slider"}>
            <MenuLayoutWrapper>
              <Icons.addPanelPlus />
            </MenuLayoutWrapper>

            <MenuWrapper>
              <SimpleBar
                forceVisible={"y"}
                simpleContentWrapperStyle={{
                  padding: "0",
                }}
              >
                <MenuLayout>
                  <MenuHeaderWrapper>
                    <h3>Edit Stream Manager Layout</h3>
                  </MenuHeaderWrapper>

                  <MenuContentWrapper>
                    <MenuDescriptionWrapper>
                      <MenuDescriptionText>
                        Add stats and panels by clicking the plus icon.
                      </MenuDescriptionText>
                    </MenuDescriptionWrapper>

                    <MenuContentContainer>
                      <MenuContentHeader>
                        <p>Panels</p>
                      </MenuContentHeader>

                      <ContentWrapper>
                        {ALL_AVAILABLE_PANEL.filter(
                          ({ title }) => !leaves.includes(title)
                        ).map(({ title, description }, index) => (
                          <ContentContainer key={index}>
                            <ContentTextWrapper>
                              <ContentTextContainer>
                                <ContentText>
                                  <p>{title}</p>
                                </ContentText>

                                <Hint
                                  delayDuration={100}
                                  align={"end"}
                                  alignOffset={-10}
                                  label={description}
                                >
                                  <ContentButton>
                                    <ContentButtonWrapper>
                                      <Icons.explainationMark />
                                    </ContentButtonWrapper>
                                  </ContentButton>
                                </Hint>
                              </ContentTextContainer>
                            </ContentTextWrapper>

                            <AddButtonLayoutWrapper>
                              <ContentButton
                                onClick={() => addWindowPanel(title)}
                              >
                                <ContentButtonWrapper>
                                  <Icons.addPanelPlus />
                                </ContentButtonWrapper>
                              </ContentButton>
                            </AddButtonLayoutWrapper>
                          </ContentContainer>
                        ))}
                      </ContentWrapper>
                    </MenuContentContainer>
                  </MenuContentWrapper>
                </MenuLayout>
              </SimpleBar>
            </MenuWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}
