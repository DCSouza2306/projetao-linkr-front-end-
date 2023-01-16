import React, { useState } from 'react';

const object = JSON?.parse(localStorage.getItem('token'));

export const AuthContext = React.createContext({});

export function AuthProvider(props) {
	const [userData, setUserData] = useState({
		token: object?.token,
		urlImage: object?.urlImage,
		userId: object?.userId
	});
	const [refreshTimeline, setRefreshTimeline] = useState(true);
	const  hashtags = []
	return (
		<AuthContext.Provider
			value={{
				userData,
				setUserData,
				refreshTimeline,
				setRefreshTimeline,
				hashtags
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}
