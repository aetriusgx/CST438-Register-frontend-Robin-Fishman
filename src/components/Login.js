import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

const Login = () => {
	let [username, setUsername] = useState('');
	let [password, setPassword] = useState('');

	const updateUsernameInput = (e) => {
		setUsername(e.target.value);
	}

	const updatePasswordInput = (e) => {
		setPassword(e.target.value);
	}

	const handleLoginAttempt = () => {
		fetch('http://localhost:8080/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				password: password
			})
		})
			.then(res => res.json())
			.then(data => {
				switch (data.role) {
					case 'admin':
						return <Redirect to='/admin' />
						break;
					case 'student':
						return <Redirect to='/' />
						break;
				}
			})
			.catch(err => console.log(err));
	}

	return (
		<div>
			<div margin='auto'>
				Login
				<label for="username">Username: </label>
				<input type="text" name="username" onChange={updateUsernameInput}></input>
				<label for="password">Password: </label>
				<input type="password" name="password" onChange={updatePasswordInput}></input>
				<button id="loginSubmit" onClick={handleLoginAttempt}></button>
			</div>
		</div>
	)
}

export default Login;
