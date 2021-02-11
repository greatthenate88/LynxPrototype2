import React from 'react';
//import Login from '../Pages/Login';
////import Dashboard from '../Pages/Dashboard';
//import NotFound from '../Pages/NotFound';
import ProfilePage from '../pages/ProfilePage';
import Home from '../pages/Home'
import SignIn from '../pages/SignIn';
import LinkCreation from '../pages/LinkCreation';




const routes = [
	{
		path: '/signin',
		component: SignIn,
		isPrivate: false,
	},
	{
		path: '/dashboard',
		component: Home,
		isPrivate: true,
	},
	{
		path: '/*',
		component: Home,
		isPrivate: true,
	},
];

export default routes;
