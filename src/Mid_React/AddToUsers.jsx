import { useState } from "react"
import { addUser, usersUrl } from "./Utils"

function AddToUsers({cancelScreen}) {

  const [newObj, setNewObj] = useState({name:'', email:''})
  
const addPerson = async() => {
  const {data: person} = await addUser(usersUrl, newObj)
  console.log(person);
}


  return (
    <div className="add"> 
    <label>Name:</label> <br/> {' '} <input type="text" onChange={(e)=> setNewObj({...newObj, name:e.target.value})}/> <br/>
    <label>Email:</label> <br/> {' '} <input type="text" onChange={(e)=> setNewObj({...newObj, email:e.target.value})}/> <br/> <br/>
     <button className="del" onClick={()=> cancelScreen()}>Cancel</button><br/> <br/>
     <button className="ad" onClick={addPerson}>Add</button>  
    </div>
  )
}

export default AddToUsers
