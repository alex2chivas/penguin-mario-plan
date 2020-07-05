import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/rootActions';

const SignedInLinks = (props) => {
	const { signOut } = props;
	return (
		<ul className='right'>
			<li>
				<NavLink to='/create'>New Project</NavLink>
			</li>
			<li>
				<a onClick={signOut}>Log Out</a>
			</li>
			<li>
				<NavLink to='/' className='btn btn-floating pink lighten-1'>
					AF
				</NavLink>
			</li>
		</ul>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	};
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
