import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-list">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title- {id}</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi debitis illum laudantium necessitatibus saepe repellendus beatae excepturi magnam nemo nulla!</p>
                </div>
                <div className="card-action lightn-4 grey-text">
                    <div>Posted by Bhanu Pratap Singh</div>
                    <div>17 January 2021</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
