import { useState } from 'react'
import OtherData from './OtherData'
import './Users.css'
import { deleteEl, updateEl, usersUrl } from './Utils'



function OneUserComp({ user, showdetails, selectId, selectColorId}) {

  const [userData, setUserData] = useState(user)
  const [element, setElement] = useState({})


  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data: upUser } = await updateEl(usersUrl, user.id, element)
    console.log(upUser);
    return upUser
  }

   const newElement = (data) => {
     setElement({ ...data, name: userData.name, email: userData.email })
   }

   const deleteUser = async(e) => {
   const data = await deleteEl(usersUrl, e.target.value.id )
   console.log(data);
   setUserData({...userData, name: " ", email: " ", address:{}})
   }

  const changeById = () => {
showdetails(user.id)
selectColorId(user.id)
  } 

  return (
    <div className='oneUser'style={{backgroundColor: (selectId == user.id)? '#f96666':'white'}}>
      <label onClick={changeById }> Id:</label>{' '} {user.id} <br /> 
      <form onSubmit={handleSubmit}>
        <label>Name:</label>{' '}  <input type='text' value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })} /><br />
        <label>Email:</label>{' '}  <input type='text' value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })} /><br />
        <OtherData user1={userData} newEl={newElement}></OtherData>
        <button type="submit" 
        className="btn btn5"><div id="slide"></div><span>Update</span>
        </button>
        <button type='reset' onClick={deleteUser} 
        className="del">Delete
        </button>
      </form> 
    </div>
  )
}

export default OneUserComp
