import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Todowrapper } from './Todowrapper'
// import Todo from './Todowrapper.js'


// export const Todo = () => {
//   return (
//     <div className='Todo'>
        
//         <p>Go to mall</p>
//         <div>
//         <FontAwesomeIcon icon={faPenToSquare} />
//         <FontAwesomeIcon icon={faTrash} />

//         </div>
//     </div>
//   )
// }
// export default Todo;
const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className="Todo">
      <p onClick={() => toggleComplete(task.id)} 
      className={`${task.completed ? 'completed': ""}`}>
        {task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo
          (task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo; //  Keep only this export

