export function Post({ post }) {
  return (
    <div className="post p-[20px] w-[700px] mb-[10px] mx-auto border-2 border-solid border-teal-400">
      <div><b>Post #{post.id}.</b></div>
      <div><b>Title: </b>{post.title}</div>
      <div><b>Description: </b> {post.body}</div>
    </div>
  )
}