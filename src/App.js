import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HowItWorks from './Components/Pages/HowItWorks/HowItWorks';
import LandingPage from './Components/Pages/Landing/LandingPage';
import UserAuth from './Components/Pages/Create';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/UserAuth" component={UserAuth} exact />
        <Route path="/HowItWorks" component={HowItWorks} exact/>
      </Switch>
    </Router>
  )
}

export default App
