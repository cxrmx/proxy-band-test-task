import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../store/features/postSlice'
import { Post } from '../components/Post'
import { Button } from '../UI/Button'

export function Posts() {
  const { id } = useParams()
  const { posts, loading } = useSelector((state) => state.post)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getPosts(id))
  }, [dispatch, id])

  if (loading) {
    return <h2 className='w-full flex flex-col items-center mt-[40px] text-xl font-bold'>Data is loading...</h2>
  }

  return (
    <div className="posts flex flex-col ">
      <h1 className="font-bold mx-auto py-[20px] text-lg w-fit">
        POSTS PAGE FOR USER #{id}
      </h1>
      <Button
        additionalClasses="bg-teal-400 text-white mx-auto mb-[20px]"
        onClick={() => navigate(-1)}
      >
        Go back
      </Button>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
