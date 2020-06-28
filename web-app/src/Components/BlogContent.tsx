import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { getContents } from "../Utilities/api";

const { Content, Sider } = Layout;

export const BlogContent = () => {
	const location = useLocation();
    const gitHubContentUrl = location?.hash?.split("#/").join("");
    const [markdown, setMarkdown] = useState("");
    useEffect(() => {
        getContents(gitHubContentUrl, setMarkdown);        
    }, [gitHubContentUrl])
    console.log((location as any).action, location?.hash);
	return (
		<>
			<Breadcrumb style={{ margin: "16px 0" }}>
				<Breadcrumb.Item>Blog</Breadcrumb.Item>
				<Breadcrumb.Item>Landing Page</Breadcrumb.Item>
			</Breadcrumb>
			<Content
				className="site-layout-background"
				style={{
					padding: 24,
					margin: 0,
					minHeight: 280,
				}}
			>
				Some (hopefully) exciting posts will be coming soon. Stay tuned!
			</Content>
		</>
	);
};
