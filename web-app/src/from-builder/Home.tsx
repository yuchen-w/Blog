import React, { useState } from "react";
import { Layout, Breadcrumb, Menu } from "antd";
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
} from "@ant-design/icons";

import Nav0 from "./Nav0";
import Footer0 from "./Footer0";
import { Nav00DataSource, Footer00DataSource } from "./data.source";
import "./scss/antMotionStyle.scss";
import { SideMenu } from "../Components/SideMenu";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

// eslint-disable-next-line no-restricted-globals
const defaultIsMobile = screen.width <= 768;

export const Home = () => {
	const [isMobile, setIsMobile] = useState(defaultIsMobile);

	window.addEventListener("resize", () => {
		// eslint-disable-next-line no-restricted-globals
		if (screen.width <= 768 && !isMobile) {
			setIsMobile(true);
		}
		// eslint-disable-next-line no-restricted-globals
		if (screen.width > 768 && isMobile) {
			setIsMobile(false)
		}
	});

	return (
		<Layout style={{height: "100vh"}}>
			<Nav0
				id="Nav0_0"
				key="Nav0_0"
				dataSource={Nav00DataSource}
				isMobile={isMobile}
			/>
			<Layout>
				<Sider width={200} className="site-layout-background">
					<SideMenu/>
				</Sider>
				<Layout style={{ padding: "0 24px 24px" }}>
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
				</Layout>
			</Layout>
			<Footer0
				id="Footer0_0"
				key="Footer0_0"
				dataSource={Footer00DataSource}				
			/>
		</Layout>
	);
};
