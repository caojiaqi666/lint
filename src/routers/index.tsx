import Login from "../pages/login";

import { useRoutes, Navigate, RouteObject } from "react-router-dom";
import Home from "../pages/home/index";
import NotFound from "../components/ErrorMessage/404";

const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />
	},
	// {
	// 	element: <LayoutIndex name="我是参数" />,
	// 	children: [
	// 		{
	// 			path: "/home",
	// 			element: <Home />
	// 		}
	// 	]
	// },
	{
		path: "*",
		element: <NotFound />
	},
	{
		path: "/home",
		element: <Home />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
