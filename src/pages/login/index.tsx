import { Button, message } from "antd";
import { useRequest } from "ahooks";
import "./index.less";
import * as API from "../../api/index";
import { useEffect } from "react";

const Login = () => {
	const { data, error, loading } = useRequest(() => {
		return API.toLogin({});
	});
	console.log("data, error, loading: ", data, error, loading);

	useEffect(() => {
		throw Error("1233");
	});

	return (
		<>
			{loading ? (
				<div>loading...</div>
			) : (
				<Button
					type="primary"
					onClick={() => {
						message.success("登录成功！");
					}}
				>
					登录
				</Button>
			)}
		</>
	);
};

export default Login;
