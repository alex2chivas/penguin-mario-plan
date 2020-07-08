import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const SignUp = (props) => {
	const { auth } = props;

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');

	const handleChange = (e) => {
		let setValue = 'set' + e.target.id.toLowerCase();

		if (setValue === 'setEmail'.toLocaleLowerCase()) {
			setEmail(e.target.value);
		}

		if (setValue === 'setPassword'.toLocaleLowerCase()) {
			setPassword(e.target.value);
		}

		if (setValue === 'setFirstName'.toLocaleLowerCase()) {
			setFirstName(e.target.value);
		}

		if (setValue === 'setLastName'.toLocaleLowerCase()) {
			setLastName(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		console.log(password);
		console.log(firstName);
		console.log(lastName);
	};

	if (auth.uid) {
		return <Redirect to='/' />;
	}

	return (
		<div className='container'>
			<form onSubmit={handleSubmit} className='white' autoComplete='off'>
				<h5 className='grey-text text-darken-3'>Sign In</h5>
				<div className='input-field'>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' onChange={handleChange} autoComplete='off' />
				</div>
				<div className='input-field'>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' onChange={handleChange} autoComplete='off' />
				</div>
				<div className='input-field'>
					<label htmlFor='firstName'>First Name</label>
					<input type='text' id='firstName' onChange={handleChange} />
				</div>
				<div className='input-field'>
					<label htmlFor='lastName'>Last Name</label>
					<input type='text' id='lastName' onChange={handleChange} />
				</div>
				<div className='input-field'>
					<button className='btn pink lighten-1 z-depth-0'>SIGN UP</button>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	};
};

export default connect(mapStateToProps)(SignUp);
