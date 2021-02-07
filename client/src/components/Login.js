import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialCredentials = {
	username: '',
	password: ''
}

const Login = () => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	
	const [credentials, setCredentials] = useState(initialCredentials);

	const { push } = useHistory();

	const handleChange = e => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name] : value });
	};  

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/api/login', credentials)
			.then(res => {
				console.log('LOGIN SUCCESS', res)
				window.localStorage.setItem('token', res.data.payload)
				push('/bubbles')
			})
			.catch(err => console.log('LOGIN ERROR', err))
	};
	
	return (
		<div className='login-container'>
		<h2>Login</h2>
		<div className='login-form-container'>
				<form onSubmit={handleSubmit}>
						<label htmlFor='username'>Username </label>
						<input 
								type='text'
								name='username'
								value={credentials.username}
								onChange={handleChange}
						/>
						<label htmlFor='password'> Password </label>
						<input 
								type='password'
								name='password'
								value={credentials.password}
								onChange={handleChange}
						/>
						<button>Log In</button>
				</form>
		</div>
</div>
	);
};

export default Login;
