import React, { Component } from 'react';
import './Home.css';
import TasksList from '../TasksList/TasksList';

import { Redirect } from 'react-router';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navigate: false
        }
    }

    NavigateToPost() {
        this.setState({
            navigate: true
        })
    }

    render() {
        if (this.state.navigate === true) {
            return <Redirect to='/Edit' />
        }
        return (
            <div className="Home">
                <h4>Welcome back</h4>
                <TasksList />
                <button onClick={this.NavigateToPost.bind(this)}> Add new Entry </button>
            </div>
        );
    }
}

export default Home;