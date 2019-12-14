import React from 'react';
import {Router} from '@reach/router'
import App from './App'
import Search from './Search'
import Home from './Home';

const About = () => <h1>Coming soon!</h1>;

function Routes() {
    return (
        <Router>
             <App path="/" />
             <About path="about" />
             <Search path="search" />
             <Home path="home" />
        </Router>
    );
}

export default Routes;

