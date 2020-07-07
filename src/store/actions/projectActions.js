import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from './types';

export const createProject = (project) => (dispatch, getState, { getFirebase, getFirestore }) => {
	const firestore = getFirestore();
	const profile = getState().firebase.profile;
	const authId = getState().firebase.auth.uid;

	firestore
		.collection('projects')
		.add({
			...project,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authId,
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
