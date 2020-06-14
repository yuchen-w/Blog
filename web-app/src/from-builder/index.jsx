import React, { useState } from "react";
import { enquireScreen } from "enquire-js";

import Nav0 from "./Nav0";
import Footer0 from "./Footer0";

import { Layout, Breadcrumb, Menu } from "antd";

import { Nav00DataSource, Footer00DataSource } from "./data.source";
import "./scss/antMotionStyle.scss";

const { Content } = Layout;

// eslint-disable-next-line no-unused-vars
let isMobile;
enquireScreen((b) => {
	isMobile = b;
});

export const Home = () => {
	const [localIsMobile, setIsMobile] = useState(false);

	enquireScreen((b) => {
		setIsMobile(!!b);
	});

	return (
		<div className="templates-wrapper">
			<Nav0
				id="Nav0_0"
				key="Nav0_0"
				dataSource={Nav00DataSource}
				isMobile={localIsMobile}
			/>
			<Content style={{ padding: "0 50px" }}>
				<Breadcrumb style={{ margin: "16px 0" }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<div className="site-layout-content">Content</div>
			</Content>
			,
			<Footer0
				id="Footer0_0"
				key="Footer0_0"
				dataSource={Footer00DataSource}
				isMobile={localIsMobile}
			/>
		</div>
	);
};
