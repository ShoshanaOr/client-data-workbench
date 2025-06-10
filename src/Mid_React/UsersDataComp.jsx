
import { getAll, usersUrl } from "./Utils";
import { useEffect, useState } from "react"
import './Users.css'
import OneUserComp from "./OneUserComp";
import SearchComp from "./SearchComp";
import AddToUsers from "./AddToUsers";
import TodosComp from "./TodosComp";
import PostsComp from "./PostsComp";


function UsersDataComp() {

  const [users, setUsers] = useState([])
  const [isWindows, setIsWindows] = useState(false)
  const [id, setId] = useState(0)
  const [isScreenAdd, setIsScreenAdd] = useState(false)
  const [selectId, setSelectId] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const { data: users } = await getAll(usersUrl)
      //console.log(users);
      setUsers(users)
    }
    fetchData();
  }, [])

  const checkTheSame = (someUsers) => {
    setUsers(someUsers)
  }

  const showWindow = (numId) => {
    setId(numId)
    //console.log(id);
    setIsWindows(!isWindows)
  }

  const openAdd = () => {
    setIsWindows(false)
    setIsScreenAdd(true)
  }

  const cancelAdd = () => {
    setIsScreenAdd(false)
  }

  const selectColor = (id) => {
    setSelectId(id)
  }

  return (
    <div className="wrapper">
      <header><h1>REACT - MID PROJECT</h1></header>
      <nav className='allUsers'>
        <SearchComp checkTheSame={checkTheSame}></SearchComp>
        <button className="ad" onClick={openAdd}>Add</button>
      </nav>
      <section>
        {
          users.map(user => {
            return (
              { user } && <OneUserComp user={user} key={user.id}
                showdetails={showWindow} selectId={selectId} selectColorId={selectColor}></OneUserComp>)
          })
        }
      </section>
      <aside>
        {
          isWindows && <TodosComp userId={id}></TodosComp>
        }
        {
          isScreenAdd && <AddToUsers cancelScreen={cancelAdd}></AddToUsers>
        }
      </aside>
      <footer>
        {
          isWindows && <PostsComp userId={id}></PostsComp>
        }
        
      </footer>
    </div>
  )
}

export default UsersDataComp
