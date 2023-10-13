import * as React from "react"
import { NavAppBar } from "./AppBar"
import { Footer } from "./Footer"
import PromotionCarousel from "../components/PromotionCarousel"

type Props = {
  children: React.ReactNode
}

export const AppLayout = ({children}: Props) => {
  return (
    <>
      <NavAppBar />
        <PromotionCarousel direction="rtl"/>
        <div className="main">
          {children}
        </div>
      <Footer/>
    </>
  )
}

