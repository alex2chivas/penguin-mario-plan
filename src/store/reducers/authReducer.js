import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actions/types';

const INITIAL_STATE = {
	authError: null
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_ERROR:
			return {
				...state,
				authError: 'Login failed'
			};
		case LOGIN_SUCCESS:
			console.log('login success');
			return {
				...state,
				authError: null
			};
		case SIGNOUT_SUCCESS:
			console.log('signout succes');
			return state;
		case SIGNUP_SUCCESS:
			console.log('signup succes');
			return {
				...state,
				authError: null
			};
		case SIGNUP_ERROR:
			console.log('singup error');
			return {
				...state,
				authError: action.err
			};
		default:
			return state;
	}
};

export default authReducer;
