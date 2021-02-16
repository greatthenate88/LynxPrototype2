import React from 'react';
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
		isPrivate: false,
	},
	{
		path: '/dashboard',
		component: Home,
		isPrivate: true,
	},

	{
		path: '/profile',
		component: ProfilePage,
		isPrivate: false,
	},
	{
		path: '/create',
		component: LinkCreation,
		isPrivate: false,
	},
	{
		path: '/create',
		component: LinkCreation,
		isPrivate: true,
	},
];

export default routes;
