import React from 'react';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import LinkCreation from './pages/LinkCreation';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Navibar from './presentational/NaviBar';
import Footer from './presentational/Footer'

const loginState = { loggedIn: false };
const LoginContext = React.createContext(loginState.loggedIn);

function App() {
  return (
    <div className="App">
<LoginContext.Provider value={loginState.loggedIn}>
    <Router>
        <Navibar></Navibar>
          <Route exact path="/" component={Home}></Route>
          <Route  path="/signin" component={SignIn}></Route>
          <Route  path="/createlink" component={LinkCreation}></Route>
        <Footer></Footer>
    </Router>
</LoginContext.Provider>

    </div>
  );
}

export default App;
