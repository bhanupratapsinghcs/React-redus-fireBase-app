import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'

export default class DashBoaed extends Component {
    render() {
        return (
            <div className="dasboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}
