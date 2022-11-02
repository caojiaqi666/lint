import React from "react";
import styles from "./App.less";
import Router from "./routers/index";
import { BrowserRouter } from "react-router-dom";
import "./styles/reset.less";
import "antd/dist/antd.min.css";
import Errorboundary from "./components/ErrorBoundary";

const App = () => {
	return (
		<BrowserRouter>
			<Errorboundary>
				<div className={styles.wrap}></div>
				<Router />
			</Errorboundary>
		</BrowserRouter>
	);
};

export default App;
