


function SinglePost({post}) {
  

  return (
    <div className="single">
    <label>Title:</label>   {' '} {post.title} <br/>         
    <label>Body:</label>   {' '} {post.body.slice(0, 50)} <br/>         
        
    </div>
  )
}

export default SinglePost
