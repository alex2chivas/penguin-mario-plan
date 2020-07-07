import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signUp } from '../../store/actions/rootActions';

const SignUp = (props) => {
	const { auth, authError } = props;

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

		const signUpUser = {
			email,
			password,
			firstName,
			lastName
		};

		props.signUp(signUpUser);
	};

	if (auth.uid) {
		return <Redirect to='/' />;
	}

	return (
		<div className='container'>
			<form onSubmit={handleSubmit} className='white' autoComplete='off'>
				<h5 className='grey-text text-darken-3'>Sign Up</h5>
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
					<div className='red-text center'>{authError ? <p> {authError.message} </p> : null}</div>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (newUser) => dispatch(signUp(newUser))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
