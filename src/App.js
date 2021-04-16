import React  from 'react';
import './App.css';
import TodoList from './js/TodoList';
import NavBar from './js/NavBar';
import Filters from './js/Filters';
import moment from 'moment';

// Fake database
const tasks = [
  {
      "id": 1,
      "description" : "Complete Lab 3",
      "important": true,
      "privateTask": false,
      "deadline": moment("2020-04-03T11:00:00"),
      "project": "WebApp I",
      "completed": true
  },
  {
      "id": 2,
      "description" : "Watch Mr. Robot",
      "important": false,
      "privateTask": true,
      "deadline": moment("2020-05-31T18:59:00"),
      "project": "Personal",
      "completed": false
  },
  {
      "id": 3,
      "description" : "Go for a walk",
      "important": true,
      "privateTask": true,
      "deadline": moment("2020-04-18T08:00:00"),
      "project": "Personal",
      "completed": false
  }];

// Main app component
class App extends React.Component {

  // Get all the projects from the state
  getProjects(){
    return [...new Set(this.state.tasks.map(task => task.project))];
  }

  // Constructor: set the tasks into the state
  constructor(props) {
    super(props);
    this.state = {tasks: tasks};
  }

  // Main render: create all the view of the application
  render() {
    return (
      <div>
        <NavBar/>
        <div className = "container-fluid">
          <div className="row vheight-100">
            <aside className="collapse d-sm-block col-sm-4 col-12 bg-light below-nav" id="left-sidebar">
              <Filters projects = {this.getProjects()}/>
            </aside>
            <main className="col-sm-8 col-12 below-nav">
              <TodoList tasks = {this.state.tasks}/>
              <button type="button" className="btn btn-lg btn-success fixed-right-bottom">&#43;</button>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
