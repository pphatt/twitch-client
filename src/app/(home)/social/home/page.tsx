import * as React from "react"

import HomePageComponent from "@/components/layouts/home/home-page"
import HomeSiteHeader from "@/components/layouts/home/site-header"

export default function HomePage() {
  return (
    <>
      <HomeSiteHeader />

      <HomePageComponent />
    </>
  )
}
