import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/rootActions';
import { Redirect } from 'react-router-dom';

const SignIn = (props) => {
	const { authError, auth } = props;

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleChange = (e) => {
		let setValue = 'set' + e.target.id.toLowerCase();

		if (setValue === 'setEmail'.toLocaleLowerCase()) {
			setEmail(e.target.value);
		}

		if (setValue === 'setPassword'.toLocaleLowerCase()) {
			setPassword(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const userLogin = {
			email,
			password
		};

		props.signIn(userLogin);
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
					<button className='btn pink lighten-1 z-depth-0'>Login</button>
					<div className='red-text center'>{authError ? <p>{authError}</p> : null}</div>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (creds) => dispatch(signIn(creds))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
