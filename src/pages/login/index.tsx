import { Button, message } from "antd";
import { useRequest } from "ahooks";
import "./index.less";
import * as API from "../../api/index";

const Login = () => {
	const { data, error, loading } = useRequest(() => {
		return API.toLogin({});
	});
	console.log("data, error, loading: ", data, error, loading);
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
