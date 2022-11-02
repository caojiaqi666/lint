import React from "react";
// import lazyLoad from "../utils/lazyLoad";
import { LayoutIndex } from "../constant";
import { RouteObject } from "../interface";
// import Menu1 from "../../pages/menu/menu1/index"

// menu 模块
const menuRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "嵌套菜单"
		},
		children: [
			{
				path: "/menu/menu1",
				// element: Menu1,
				meta: {
					requiresAuth: true,
					title: "菜单1",
					key: "menu1"
				}
			}
		]
	}
];

export default menuRouter;
