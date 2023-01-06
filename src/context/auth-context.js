import React, { useState } from 'react';

const object = JSON?.parse(localStorage.getItem('token'));

export const AuthContext = React.createContext({});

export function AuthProvider(props) {
	const [userData, setUserData] = useState({
		token: object?.token,
		urlImage: object?.urlImage,
	});
	const [refreshTimeline, setRefreshTimeline] = useState(true);

	return (
		<AuthContext.Provider
			value={{
				userData,
				setUserData,
				refreshTimeline,
				setRefreshTimeline,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}
