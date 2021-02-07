import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<PrivateRoute 
						exact 
						path="/bubbles" 
						component={BubblePage}
					/>
					<Route path="/login" component={Login} />
					<Route component={Login} />
				</Switch>
				{/* 
					Build a PrivateRoute component that will 
					display BubblePage when you're authenticated 
				*/}

			</div>
		</Router>
	);
}

export default App;
