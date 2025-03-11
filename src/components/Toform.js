import React, {useState} from 'react'

export const Toform = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)

        setValue("")
    }
  return (
    <form className='Toform' onSubmit={handleSubmit}>
        <input type="text" className='todotext' value={value} placeholder='What is your task today?' 
        onChange= {(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
