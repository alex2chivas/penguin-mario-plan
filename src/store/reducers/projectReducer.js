import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../actions/types';

const INITIAL_STATE = {
	projects: []
};

const projectReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CREATE_PROJECT:
			return state;
		case CREATE_PROJECT_ERROR:
			return console.log('create project error', action.err);
		default:
			return state;
	}
};

export default projectReducer;
