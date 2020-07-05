import React, { useState, Children, useEffect } from "react"
import { Layout } from "antd"

import Nav0 from "./Nav0"
import Footer0 from "./Footer0"
import { Nav00DataSource, Footer00DataSource } from "./data.source"
import "./scss/antMotionStyle.scss"
import { SideMenu } from "./SideMenu"
import { BlogContent } from "./BlogContent"

const { Content, Sider } = Layout

// eslint-disable-next-line no-restricted-globals
// const defaultIsMobile = screen.width <= 768

export const BlogLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

  const displayMobileFunction = () => {
    // eslint-disable-next-line no-restricted-globals
    if (screen.width <= 768 && !isMobile) {
      setIsMobile(true)
    }
    // eslint-disable-next-line no-restricted-globals
    if (screen.width > 768 && isMobile) {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", displayMobileFunction)
    return () => window.removeEventListener("resize", displayMobileFunction)
  })

  return (
    <Layout style={{ height: "100vh" }}>
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={isMobile}
        style={{ height: "64px" }}
      />
      <Layout>
        {/* <Sider width={200} className="site-layout-background">
						<SideMenu />
					</Sider> */}
        <Layout style={{ padding: "0 24px 24px" }}>{children}</Layout>
      </Layout>
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        style={{ height: "64px" }}
      />
    </Layout>
  )
}
