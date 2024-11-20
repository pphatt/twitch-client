"use client"

import * as React from "react"

import {
  RootPageContentWrapper,
  RootPageLayoutContainer,
  RootPageLayoutOverlay,
  RootPageLayoutWrapper,
} from "@/components/layouts/home/home-page/style"
import Post from "@/components/layouts/home/post"

export default function HomePageComponent() {
  return (
    <RootPageLayoutWrapper>
      <RootPageLayoutContainer>
        <RootPageLayoutOverlay>
          <RootPageContentWrapper>
            <div
              style={{
                position: "relative",
              }}
              className="article-list"
            >
              <Post />

              <Post />
            </div>
          </RootPageContentWrapper>
        </RootPageLayoutOverlay>
      </RootPageLayoutContainer>
    </RootPageLayoutWrapper>
  )
}
