import { useRequest } from "ahooks";
import * as API from "../../api/index";
// import loginLeft from "../../assets/images/login_left.png";
// import logo from "../../assets/images/logo.png";
import "./index.less";

const Login = () => {
	const { data, error, loading } = useRequest(() => {
		return API.toLogin({});
	});
	console.log("data, error, loading: ", data, error, loading);
	// const onChange = () => {
	// 	// setThemeConfig({ ...themeConfig, isDark: checked });
	// };
	return (
		<div className="loginContainer">
			{/* <img src={logo} alt="" /> */}
			<div className="wrap1">11111</div>
			<div className="wrap1">22222</div>
		</div>
	);
};

export default Login;
