import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from '../actions/types';

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

		default:
			return state;
	}
};

export default authReducer;
