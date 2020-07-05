import React, { useState, useEffect, ReactNode } from "react"
import { Layout, Breadcrumb } from "antd"

const { Content, Sider } = Layout

type BlogContentProps = {
  children: ReactNode
  breadcrumb: string[]
}

export const BlogContent = ({ children, breadcrumb }: BlogContentProps) => {
  const gitHubContentUrl = location?.hash?.split("#/").join("")
  const [markdown, setMarkdown] = useState("")
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        overflow: "auto",
      }}
    >
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Blog</Breadcrumb.Item>
        {breadcrumb.map(bc => (
          <Breadcrumb.Item>{bc}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <div style={{ background: "white", padding: "16px" }}>{children}</div>
    </Content>
  )
}
