import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import News from './News';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
  	<Router>
	   <div className="App">
	  		<Nav />
	  		<Switch>
		  		<Route path="/" exact component={Home} />
		  		<Route path="/about" component={About} />
		  		<Route path="/news" component={News} />
	  		</Switch>
	  	</div>
  	</Router>
  );
}

export default App;
