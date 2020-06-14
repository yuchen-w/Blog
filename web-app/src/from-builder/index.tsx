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

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

// eslint-disable-next-line no-restricted-globals
const defaultIsMobile = screen.width <= 768;

export const Home = () => {
	const [isMobile, setIsMobile] = useState(defaultIsMobile);

	// // eslint-disable-next-line no-restricted-globals
	// if (screen.width <= 768) {
	// 	setIsMobile(true);
	// }

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
		<Layout className="templates-wrapper">
			<Nav0
				id="Nav0_0"
				key="Nav0_0"
				dataSource={Nav00DataSource}
				isMobile={isMobile}
			/>
			<Layout>
				<Sider width={200} className="site-layout-background">
					<Menu
						mode="inline"
						defaultSelectedKeys={["1"]}
						defaultOpenKeys={["sub1"]}
						style={{ height: "100%", borderRight: 0 }}
					>
						<SubMenu
							key="sub1"
							icon={<UserOutlined />}
							title="subnav 1"
						>
							<Menu.Item key="1">option1</Menu.Item>
							<Menu.Item key="2">option2</Menu.Item>
							<Menu.Item key="3">option3</Menu.Item>
							<Menu.Item key="4">option4</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							icon={<LaptopOutlined />}
							title="subnav 2"
						>
							<Menu.Item key="5">option5</Menu.Item>
							<Menu.Item key="6">option6</Menu.Item>
							<Menu.Item key="7">option7</Menu.Item>
							<Menu.Item key="8">option8</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub3"
							icon={<NotificationOutlined />}
							title="subnav 3"
						>
							<Menu.Item key="9">option9</Menu.Item>
							<Menu.Item key="10">option10</Menu.Item>
							<Menu.Item key="11">option11</Menu.Item>
							<Menu.Item key="12">option12</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout style={{ padding: "0 24px 24px" }}>
					<Breadcrumb style={{ margin: "16px 0" }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content
						className="site-layout-background"
						style={{
							padding: 24,
							margin: 0,
							minHeight: 280,
						}}
					>
						Content
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
