import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import {
	FolderOutlined,
} from "@ant-design/icons";
import { toPascalCase } from "../Utilities/stringUtils";
import { getContents } from "../Utilities/api";
import { SideSubMenu } from "./SideSubMenu";
import { GitHubContent } from "../Models/GitHubContent";
import { Link } from "react-router-dom";


export const SideMenu = () => {
    const [blogRootItems, setBlogRootItems] = useState<GitHubContent[]>([]);

	useEffect(() => {
		getContents<GitHubContent[]>(
			"https://api.github.com/repos/yuchen-w/blog/contents/content?ref=development",
			setBlogRootItems
		);
    }, []);

	return (
		<Menu
			mode="inline"
			defaultSelectedKeys={["1"]}
			defaultOpenKeys={["sub1"]}
			style={{ height: "100%", borderRight: 0 }}
		>
			{blogRootItems.map((item) =>
				item.name.toLowerCase().endsWith(".md") ? (
					<Menu.Item key={item.url}>
						<Link to={`/#/${item.download_url}`}>
						{toPascalCase(item.name.replace(".md", ""))}
						</Link>
					</Menu.Item>
				) : (
					<SideSubMenu
						key={item.url}
						icon={<FolderOutlined />}
                        title={item.name}
                        url={item.url}
					></SideSubMenu>
				)
			)}			
		</Menu>
	);
};
