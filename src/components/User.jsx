import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../UI/Button'

export function User({ user, additionalClasses }) {
  const navigate = useNavigate()

  return (
    <div className={`${additionalClasses} w-[500px] flex flex-col items-center justify-center gap-y-3 p-[30px] border-solid border-2 border-teal-400`}>
      <div>
        <b>{user.id}. </b>
        {user.name}
      </div>
      <div><b>Username: </b>{user.username}</div>
      <div><b>Email: </b>{user.email}</div>
      <div><b>User address: </b>{user.address.city}. {user.address.street}. {user.address.suite}</div>
      <Button additionalClasses="bg-teal-400 text-white" onClick={() => {navigate(`/users/${user.id}/posts`)}}>
        User's posts
        {/* <Link to={`/user/${user.id}/posts`}>User's posts</Link> */}
      </Button>
      <Button additionalClasses="bg-red-400 text-white">
        <Link to={`/users/${user.id}/albums`}>User's albums</Link>
      </Button>
    </div>
  )
}
