import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

export const AuthIsLoaded = ({ children }) => {
	const auth = useSelector((state) => state.firebase.auth);
	if (!isLoaded(auth)) return <div>Loading Screen...</div>;
	return children;
};
