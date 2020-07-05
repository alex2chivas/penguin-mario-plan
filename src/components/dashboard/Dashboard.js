import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

const Dashboard = props => {
    const { projects } = props

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                   <ProjectList projects={projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                   <Notifications />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(firestoreConnect([
    { collection: 'projects' }
]), connect(mapStateToProps))(Dashboard);
