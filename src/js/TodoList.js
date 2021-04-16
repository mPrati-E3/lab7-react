import React from 'react';
import TodoItem from './TodoItem';

// Create a row of the table, a task, by calling TodoItem
function createTodo(task) {
  return (
    <TodoItem key = {task.id} task = {task}/>
  );
}

// Create a list of "Todo" by using the previous function
const TodoList = (props) => {

  let {tasks} = props;

  return (
    <div>
      {tasks && <ul className ="list-group list-group-flush">{tasks.map(createTodo) }</ul>}
    </div>
  );
}

export default TodoList;
