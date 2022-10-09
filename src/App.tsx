import React from "react";
import "./App.css";
import Router from "./routers/index";
import { BrowserRouter } from "react-router-dom";
import "./styles/reset.less";
import "antd/dist/antd.css";

const App = () => {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
};

export default App;
