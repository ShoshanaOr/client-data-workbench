import { useState } from "react"

function SingleTodo({todo}) {
 
const [isCompleted, setIsCompleted] = useState(todo.completed)
const completedTask= () => {
  setIsCompleted('true')
  //checkCompleted(e.target.value.id)
}

  return (
    <div className="single">
      <label>Title: </label>{''} {todo.title}<br/>         
      <label>Completed</label> : {''} {isCompleted ? '✅' : '❎'}
      <button style={{visibility: isCompleted ?'hidden': 'visible'}}
      onClick={completedTask} className="mark">Mark Completed</button>
     
    </div>
  )
}

export default SingleTodo
//(todo.completed === 'false') ? 'block' : 'none'