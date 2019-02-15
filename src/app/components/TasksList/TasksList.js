import React, { Component } from 'react';
import './TasksList.css';

import { withRouter } from 'react-router';

class TasksList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasksArr: [],
            _URL: '/api/task/'
        }
    }

    componentWillMount() {
        this.GetTasks();
    }

    GetTasks() {
        fetch(this.state._URL, { method: 'GET' })
            .then((response) => {
                return response.json();
            })
            .then((task) => {
                this.setState({ tasksArr: task });
            });
    }

    DeleteTask(idToDelete) {
        let foo = confirm("Do you want to delete this entry?");

        if (foo) {
            fetch(this.state._URL + '/' + idToDelete,
                {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then((response) => response.json())
                .then(data => {
                    console.log(data);
                    M.toast({ html: 'Delete Successful' })
                    this.GetTasks();
                });
        } else {
            console.log("Entry was saved c:");
        }

    }

    EditTask(idToUpdate) {
        this.ReturnToEdit();
        fetch(this.state._URL + idToUpdate, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                sessionStorage.setItem('idToChange', data._id);
            });

    }

    ReturnToEdit() {
        this.props.history.push('/Edit');
    }

    render() {
        return (
            <div className="TasksList">
                <h5>My list</h5>
                {
                    this.state.tasksArr.map((task, index) => {
                        return (
                            <span key={index}>
                                {task.name}
                                <br />
                                {task.description}
                                {task._id}
                                <br />
                                <button onClick={this.EditTask.bind(this, task._id)}>Edit</button>
                                <button onClick={this.DeleteTask.bind(this, task._id)}>Delete</button>
                                <br />
                                <br />
                            </span>
                        );
                    })
                }
            </div>
        );
    }
}

export default withRouter(TasksList);