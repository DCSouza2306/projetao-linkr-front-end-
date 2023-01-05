import { SignUpContainer } from './SignUp-page';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL_BASE } from '../constants/url';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [enable, setEnable] = useState(false);
	const navigate = useNavigate();
	const token = JSON.parse(localStorage.getItem('token'));

	function login(e) {
		e.preventDefault();

		if (email === '' || password === '') {
			alert('Todos os campos devem ser preenchidos');
			return;
		}

		setEnable(true);

		const newLogin = {
			email: email,
			password: password,
		};

		axios
			.post(`${URL_BASE}/`, newLogin)
			.then((res) => {
				localStorage.setItem('token', JSON.stringify(res.data));
				navigate('/timeline');
			})
			.catch((e) => {
				alert(e.response.data.message);
				setEnable(false);
			});
	}

	return (
		<SignUpContainer>
			<div className="left-box-sign-up">
				<div className="content-left">
					<h1>linkr</h1>
					<h2>save, share and discover the best links on the web</h2>
				</div>
			</div>

			<div className="right-box-sign-up">
				<form onSubmit={login}>
					<input
						type="email"
						placeholder="e-mail"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						disabled={enable}
					/>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						disabled={enable}
					/>
					<button
						className="button-sign-up"
						type="submit"
						disabled={enable}
					>
						<p>Log In</p>
					</button>
				</form>
				<Link to="/sign-up">
					<button>First time? Create an account!</button>
				</Link>
			</div>
		</SignUpContainer>
	);
}
