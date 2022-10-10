import React from "react";
import ErrorPage from "../ErrorPage";

interface IState {
	/** 存储当前的报错信息 */
	error: any;
}

interface IProps {
	children: any;
}

class ErrorBoundary extends React.Component<IProps> {
	state: IState = {
		error: null
	};
	static getDerivedStateFromError(error: any) {
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return { error };
	}
	componentDidCatch(error: any, errorInfo: any) {
		console.log("错误捕捉组件catch的错误：", errorInfo, error);
		// 统计上报错误信息
		// logErrorToService(error, errorInfo);
	}
	render() {
		if (this.state.error) {
			return <ErrorPage />;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
