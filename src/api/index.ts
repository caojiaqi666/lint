import axios from "axios";
import { BASEURL } from "../config/config";

// 响应拦截器
axios.interceptors.response.use(
	(response: any) => {
		// if (response?.data?.state == 5) {
		// 	return router.push({
		// 		path: "/login",
		// 		query: { redirect: router.currentRoute.fullPath }
		// 	});
		// } else if (response?.data?.state == 4) {
		// 	console.log("权限不够");
		// }
		return response;
	},
	(error: any) => {
		console.log("error: ", error);
		return Promise.reject(error);
	}
);

// 登录接口
const toLogin = async (data: any) => {
	return await axios({
		method: "POST",
		url: `${BASEURL}/login`,
		data,
		withCredentials: true
	});
};
export { toLogin };
