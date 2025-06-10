import { useEffect, useState } from "react"
import { getAll, usersUrl } from "./Utils"

function SearchComp({checkTheSame}) {
 
  const [search, setSearch] = useState('')

useEffect(() => {
const fetchData2 = async() => {
const {data: allUsers} = await getAll(usersUrl)

 const sameData = allUsers.filter(one =>
   one.name.includes(search) || one.email.includes(search))
checkTheSame(sameData)

 }
 fetchData2() 
},[search])

  return (
    <>
      <label>Search</label> {'  '} <input type="search" onChange={e => setSearch(e.target.value)}/>        
    </>
  )
}

export default SearchComp
