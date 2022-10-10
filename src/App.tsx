import React from "react";
import "./App.css";
import Router from "./routers/index";
import { BrowserRouter } from "react-router-dom";
import "./styles/reset.less";
import "antd/dist/antd.css";
import Errorboundary from "./components/ErrorBoundary";

const App = () => {
	return (
		<BrowserRouter>
			<Errorboundary>
				<Router />
			</Errorboundary>
		</BrowserRouter>
	);
};

export default App;
