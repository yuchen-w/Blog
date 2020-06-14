import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
} from "@ant-design/icons";
import { GitHubContent } from "../Models/GitHubContent";
import { getContents } from "../Utilities/api";
const { SubMenu } = Menu;

type SideSubMenuType = {
    key: string,
    icon?: React.ReactNode,
    title: string,
    url: string,
}

export const SideSubMenu = (props: SideSubMenuType) => {
    const {key, icon, title, url, ...rest} = props;
    const [contents, setContents] = useState<GitHubContent[]>([]);

	useEffect(() => {
		getContents<GitHubContent[]>(
			url,
			setContents
		);
    }, []);

	return (
		<SubMenu key={key} icon={icon} title={title} {...rest}>
            {contents.map(item => <Menu.Item key={item.url}>{item.name.replace(".md", "")}</Menu.Item>)}
		</SubMenu>
	);
};
