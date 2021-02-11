import React from 'react';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import LinkCreation from './pages/LinkCreation';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Navibar from './presentational/NaviBar';
import Footer from './presentational/Footer'
import ProfilePage from './pages/ProfilePage';

import routes from './Config/routes.js';
import { AuthProvider } from './Context';
import AppRoute from './Config/AppRoute';


const loginState = { loggedIn: false };
const LoginContext = React.createContext(loginState.loggedIn);

function App() {
  return (
    <div className="App">
{/* <LoginContext.Provider value={loginState.loggedIn}>
    <Router>
        <Navibar></Navibar>
          <Route exact path="/" component={Home}></Route>
          <Route  path="/signin" component={SignIn}></Route>
          <Route  path="/createlink" component={LinkCreation}></Route>
          <Route path="/profile" component={ProfilePage}></Route>
        <Footer></Footer>
    </Router>
</LoginContext.Provider> */}


<AuthProvider>
			<Router>
				<Switch>
					{routes.map((route) => (
						<AppRoute
							key={route.path}
							path={route.path}
							component={route.component}
							isPrivate={route.isPrivate}
						/>
					))}
				</Switch>
			</Router>
		</AuthProvider>

    </div>
  );
}

export default App;
