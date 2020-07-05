import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from './types';

export const createProject = (project) => (dispatch, getState, { getFirebase, getFirestore }) => {
	const firestore = getFirestore();
	firestore
		.collection('projects')
		.add({
			...project,
			authorFirstName: 'Alex',
			authorLastName: 'Flores',
			authorId: 1234,
			createAt: new Date()
		})
		.then(() => {
			dispatch({
				type: CREATE_PROJECT,
				project
			});
		})
		.catch((err) => {
			dispatch({
				type: CREATE_PROJECT_ERROR,
				err
			});
		});
};
