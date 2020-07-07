import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SingedOutLinks';

const Navbar = (props) => {
	const { auth, profile } = props;
	console.log(props);

	const links = auth.uid ? <SignedInLinks {...profile} /> : <SignedOutLinks />;

	return (
		<nav className='nav-wrapper grey darken-3'>
			<div className='container'>
				<Link to='/' className='brand-logo'>
					MarioPlan
				</Link>
				{links}
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	};
};

export default connect(mapStateToProps)(Navbar);
