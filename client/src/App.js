import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";
import { Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/bubbles">Bubbles</Link>
					</li>
				</ul>
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
