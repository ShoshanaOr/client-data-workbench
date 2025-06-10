import { useEffect, useState } from "react"
import SinglePost from "./SinglePost"
import { addToUser, getFromUser, postsUrl } from "./Utils"

function PostsComp({ userId }) {

  const [posts, setPosts] = useState([])
  const [isPostOpen, setIsPostOpen] = useState(true)
  const [newP, setNewP] = useState({ title: '', body: '',id:7 })

  useEffect(() => {
    const getUserPost = async () => {
      const { data: somePosts } = await getFromUser(postsUrl, userId)
      setPosts(somePosts)
    }
    getUserPost()
  }, [posts])

  const addPost = async () => { 
    const { data } = await addToUser(postsUrl, userId, newP)
    console.log(data);
    setIsPostOpen(true)
  }

  return (
    <div>
      <div style={{ display: isPostOpen ? 'block' : 'none' }}>
        <label>Posts-User</label> {' '}{userId}
        <button className="ad" onClick={() => setIsPostOpen(false)}>Add</button>
        <div className="frame">
          {
            posts.map(post => {
              return (
                <SinglePost post={post} key={post.id}></SinglePost>)
            })
          }
        </div>
      </div>
      <section style={{ display: isPostOpen ? 'none' : 'block' }}>
        <label>New Post-User</label> {' '} {userId}
        <div className="add">
          <label>Title:</label><br /> {' '}<input type="text" onChange={(e) => setNewP({ ...newP, title: e.target.value })} /><br /> <br />
          <label>Body:</label> <br />{' '}<input type="text" onChange={(e) => setNewP({ ...newP, body: e.target.value })} /><br /> <br />
          <button className="del" onClick={() => setIsPostOpen(true)}>Cancel</button> <br /> <br />
          <button className="ad" onClick={addPost}>Add</button>
        </div>

      </section>
    </div>
  )
}

export default PostsComp
