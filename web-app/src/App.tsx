import React, { FC } from "react";
// import { Layout, Menu, Breadcrumb } from "antd";
import "./App.css";
import Home from "./from-builder";

// const { Header, Content, Footer } = Layout;

const App: FC = () => {
	return (
		<>
			{/* <Layout className="layout">
				<Header>
					<div className="logo" />
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={["2"]}
					>
						<Menu.Item key="1">Home</Menu.Item>
						<Menu.Item key="2">About</Menu.Item>
						<Menu.Item key="3">nav 3</Menu.Item>
					</Menu>
				</Header>
				<Content style={{ padding: "0 50px" }}>
					<Breadcrumb style={{ margin: "16px 0" }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<div className="site-layout-content">Content</div>
				</Content>
				<Footer
					style={{ textAlign: "center" }}
				>{`Commit By Default ©${new Date().getFullYear()} Created by Yuchen Wang`}</Footer>
			</Layout> */}
			<Home />
		</>
	);
};

export default App;
