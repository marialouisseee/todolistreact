import React, {useState} from 'react'

export const Editform = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);

        setValue("")
    }
  return (
    <form className='Toform' onSubmit={handleSubmit}>
        <input type="text" className='todotext' value={value} placeholder='Update your task?' 
        onChange= {(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
