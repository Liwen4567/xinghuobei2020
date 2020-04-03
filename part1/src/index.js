import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './pages/Home';
import Personmessage from './pages/Personmessage';
import History from './pages/History';
import Part4 from './pages/Part4';
import Part5 from './pages/Part5';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Route path="/pages/Home" component={Home} />  
            <Route path="/pages/History" component={History} /> 
            <Route path="/pages/Personmessage" component={Personmessage} /> 
            <Route path="/pages/Part4" component={Part4} />    
            <Route path="/" exact component={Part5} /> 
        </div>
   </Router>
, document.getElementById('root'));

