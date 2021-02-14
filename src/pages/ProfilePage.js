import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NaviBar from '../presentational/NaviBar';
import Footer from '../presentational/Footer';
import UserProfile from '../containers/UserProfile';


export default function ProfilePage(props) {
  return (
    <div>
      <NaviBar></NaviBar>
      <br/>
      <br/>
      <UserProfile></UserProfile>
      <br/>
      <Footer></Footer>
    </div>
  );
}


