import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

type FooterType = {
  dataSource: any;
  id: string;
};

const Footer = (props: FooterType) => {	
	const { dataSource, ...rest } = props;
	return (
		<div {...rest} {...dataSource.wrapper}>
			<OverPack {...dataSource.OverPack}>
				<TweenOne
					animation={{ y: "+=30", opacity: 0, type: "from" }}
					key="footer"
					{...dataSource.copyright}
				>
					{dataSource.copyright.children}
				</TweenOne>
			</OverPack>
		</div>
	);
};

export default Footer;
