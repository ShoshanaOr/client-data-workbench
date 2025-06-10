import { useEffect, useState } from "react"
import SingleTodo from "./SingleTodo"
import { getFromUser, todosUrl } from "./Utils"

function TodosComp({ userId}) {

  const [todos, setTodos] = useState([])
  const [isTodoOpen, setIsTodoOpen] = useState(true)
  const [newT, setNewT] = useState({})

  useEffect(() => {
    const getUserTodo = async () => {
      const { data: someTodos } = await getFromUser(todosUrl, userId)
      setTodos(someTodos)
      //console.log(someTodos);
    }
    getUserTodo()
  }, [])

   const addTodo = () => {
    todos.push(newT)
    setIsTodoOpen(true)
   }



  
  return (
    <div>
    {/* <div style={{visibility: isTodoOpen? 'visible':'hidden'}}> */}
    <div style={{display: isTodoOpen? 'block':'none'}}>
    <label>Todos-User</label> {' '}{userId}
      <button onClick={()=> setIsTodoOpen(false)}>Add</button>
      <div className="frame">
        {
        todos.map(todo => {
            return (
              <SingleTodo todo={todo} key={todo.id} ></SingleTodo>)
          })
        }
      </div>
    </div>
    <section style={{display: isTodoOpen? 'none':'block'}}>
    {/* <section style={{visibility: isTodoOpen? 'hidden':'visible'}}> */}
    <label>New Todo-User</label> {' '} {userId}
      <div className="add">
      <label>Title:</label><br/> {' '} <input type="text" placeholder={'Add Todo'}
         onChange={(e)=> setNewT({title:e.target.value, completed:false})}/><br/> <br/>
        <button className="del" onClick={()=> setIsTodoOpen(true)}>Cancel</button> <br/> <br/>
        <button className="ad" onClick={addTodo}>Add</button>
      </div>

    </section>
    </div>
  )
}

export default TodosComp
