import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
	return (
		<div className="App">
			<Navbar />
			<h1>Responsive Navigation Example</h1>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</div>
	);
}

export default App;
