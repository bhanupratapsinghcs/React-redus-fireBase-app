import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router'
import { compose } from 'redux'

function ProjectDetails(props) {
    const { project, auth } = props
    if (!auth.uid) return <Redirect to='/signin' />
    // console.log(props)
    if (project) {
        return (
            <div className="container section project-list">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action lightn-4 grey-text">
                        <div>Posted by Bhanu Pratap Singh</div>
                        <div>17 January 2021</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                Loadind....
            </div>
        )

    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)
