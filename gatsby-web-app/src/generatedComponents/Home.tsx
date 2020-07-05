import React, { useState } from "react";
import { Layout, Breadcrumb } from "antd";

import Nav0 from "./Nav0";
import Footer0 from "./Footer0";
import { Nav00DataSource, Footer00DataSource } from "./data.source";
import "./scss/antMotionStyle.scss";
// import { SideMenu } from "../Components/SideMenu";
// import { BlogContent } from "../Components/BlogContent";

const { Content, Sider } = Layout;

// eslint-disable-next-line no-restricted-globals
// const defaultIsMobile = screen.width <= 768;

export const Home = () => {
	const [isMobile, setIsMobile] = useState(false);

	// window.addEventListener("resize", () => {
	// 	// eslint-disable-next-line no-restricted-globals
	// 	if (screen.width <= 768 && !isMobile) {
	// 		setIsMobile(true);
	// 	}
	// 	// eslint-disable-next-line no-restricted-globals
	// 	if (screen.width > 768 && isMobile) {
	// 		setIsMobile(false);
	// 	}
	// });

	return (
		<Layout style={{ height: "100vh" }}>
			
				<Nav0
					id="Nav0_0"
					key="Nav0_0"
					dataSource={Nav00DataSource}
					isMobile={isMobile}
				/>
				<Layout>
					<Sider width={200} className="site-layout-background">
						{/* <SideMenu /> */}
						<p>Test</p>
					</Sider>
					<Layout style={{ padding: "0 24px 24px" }}>
						{/* <BlogContent/> */}
						<p>Coming soon</p>
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
