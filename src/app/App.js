import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/home/Home';
import './App.css';
import PostForm from './components/PostForm/PostForm';
import TasksList from './components/TasksList/TasksList';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <h1>My App</h1>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/Edit" component={PostForm} />
                    <Route exact path="/list" component={TasksList} />
                </div>
            </Router>
        );
    }
}

export default App;