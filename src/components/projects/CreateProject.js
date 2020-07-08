import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/rootActions';

const CreateProject = (props) => {
	const [ title, setTitle ] = useState('');
	const [ content, setContent ] = useState('');

	const handleChange = (e) => {
		let setValue = 'set' + e.target.id.toLowerCase();

		if (setValue === 'setTitle'.toLocaleLowerCase()) {
			setTitle(e.target.value);
		}

		if (setValue === 'setContent'.toLocaleLowerCase()) {
			setContent(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const project = {
			title,
			content
		};

		props.createProject(project);
		props.history.push('/');
	};

	const { auth } = props;

	if (!auth.uid) {
		return <Redirect to='/signin' />;
	}

	return (
		<div className='container'>
			<form onSubmit={handleSubmit} className='white' autoComplete='off'>
				<h5 className='grey-text text-darken-3'>Create new Project</h5>
				<div className='input-field'>
					<label htmlFor='title'>Title</label>
					<input type='text' id='title' onChange={handleChange} autoComplete='off' />
				</div>
				<div className='input-field'>
					<label htmlFor='content'>Project Content</label>
					<textarea id='content' className='materialize-textarea' onChange={handleChange} />
				</div>
				<div className='input-field'>
					<button className='btn pink lighten-1 z-depth-0'>Create</button>
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

const mapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => dispatch(createProject(project))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
