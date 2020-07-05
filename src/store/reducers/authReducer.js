import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/types';

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
		default:
			return state;
	}
};

export default authReducer;
