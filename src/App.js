import React, {useState} from 'react';

import './App.css';

import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  const addTodo = (desc, name) => {
    // make sure id is unique
    const id = todos.length === 0 ? 1 : todos[todos.length - 1].order + 1;

    const todo = {
      order: id,
      desc: desc,
      assigned: name
    }

    // https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
    setTodos(prevTodos => [...prevTodos, todo]);
    setShowNewTodoForm(!showNewTodoForm);
  }

  const deleteTodo = (row) => {
    let filteredTodos = todos.filter(value => value.order !== row);
    setTodos(filteredTodos);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          
          {!showNewTodoForm 
            ? <button className='btn btn-primary' type='button' onClick={() => setShowNewTodoForm(!showNewTodoForm)}>Add New Todo</button>
            : <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
