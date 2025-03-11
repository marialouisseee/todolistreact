import React, {useState} from 'react'
import { Toform } from './Toform'
import  Todo  from './Todo'
import { v4 as uuidv4 } from 'uuid';
import { Editform } from './Editform';
uuidv4();


export const Todowrapper = () => {
    const [todos,setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos,{id:uuidv4(), task:todo, completed:false, isEditing:false}])
        console.log(todos)
    }

    const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed:
      !todo.completed}:todo))
    }
  
    const deleteTodo = id => {
    setTodos(todos.filter(todo=>todo.id !== id))
    }

    const editTodo = id => { setTodos(todos.map(todo => todo.id === id ? {...todo,
    isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: 
    !todo.isEditing}: todo))
    
    }

  return (
    <div className='Todowrapper'>
      <h1>Get Things Done!</h1>
        <Toform addTodo={addTodo}/>
        {todos.map((todo, index) => (
          todo.isEditing ? (
            <Editform editTodo={editTask} task={todo}/>
          ) : (
          <Todo task={todo} key={index} toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} editTodo={editTodo}/>
          )


        ))}

      </div>
  )
}

