import { useEffect, useState } from "react"

function OtherData({user1,newEl}) {
  //console.log(user1.address);
const [openPanel, setOpenPanel] = useState(false)

const [user, setUser] = useState({})

useEffect(()=> {
  newEl(user)
  //console.log('user'+user);
},[user])


  return (
    <>
     <button onMouseOver={() => setOpenPanel(true)} 
     onClick={() => setOpenPanel(false)}>Other Data</button> 
      {
        openPanel && <div className="moreData">
          Street:{' '}<input type="text" placeholder={user1.address.street} 
          onChange={(e) => setUser({...user, address: {...user.address,sreet:e.target.value}})}/><br/>
          City:{' '}<input type="text" placeholder={user1.address.city} 
          onChange={(e) => setUser({...user, address: {...user.address,city:e.target.value}})}/><br/>
           Zip Code:{' '}<input type="text" placeholder={user1.address.zipcode} 
          onChange={(e) => setUser({...user, address: {...user.address,zipcode:e.target.value}})}/><br/>
        </div>
      }  
    </>
  )
}

export default OtherData
