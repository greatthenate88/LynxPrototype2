import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import LinkCreation from './pages/LinkCreation';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Navibar from './presentational/NaviBar';
import Footer from './presentational/Footer'

function App() {
  return (
    <div className="App">

<Router>
    <Navibar></Navibar>
    <Route exact path="/" component={Home}></Route>
    <Route  path="/SignIn" component={SignIn}></Route>
    <Route  path="/Links" component={LinkCreation}></Route>
    <Footer></Footer>
</Router>


    </div>
  );
}

export default App;
