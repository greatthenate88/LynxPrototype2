
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NaviBar from '../presentational/NaviBar.js';
import Footer from '../presentational/Footer.js';
import Dashboard from '../containers/Dashboard.js';




export default function Home(props) {
  return (
    <div>
    <NaviBar></NaviBar>
        <Dashboard></Dashboard>
    <Footer></Footer>
    </div>
  );
}


