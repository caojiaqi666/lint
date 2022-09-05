import React from "react";
import "./App.css";
import Router from "./routers/index";
import { BrowserRouter } from "react-router-dom";
import "./styles/reset.less";

const App = () => {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
};

export default App;
