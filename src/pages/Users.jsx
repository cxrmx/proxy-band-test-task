import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { User } from '../components/User';

export function Users() {
  const {users, error, loading} = useSelector(state => state.user)

  useEffect(() => {
  })

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getUsers())
  //   console.log(users, loading)
  // }, [])




  if (loading) {
    return (
      <h2 className='w-full flex flex-col items-center mt-[40px] text-xl font-bold'>Data is loading...</h2>
    )
  }
  if (error) {
    return (
      <div>Error occured: {error}</div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center">
      {users.map(user => (
        <User user={user} key={user.id} additionalClasses="my-[20px]" />
      ))}
      <Outlet />
    </div>
  );
}