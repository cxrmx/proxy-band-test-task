import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from './store/features/userSlice'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Users } from './pages/Users'
import { Posts } from './pages/Posts'
import { Modal } from './components/Modal'
import { WrongRoute } from './components/WrongRoute'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const navigate = useNavigate()

  return (
    <Routes>
      <Route path="/users" element={<Users />}>
        <Route path='/users/:id/albums' element={<Modal title="User's albums" onClose={() => navigate(-1)} />} />
      </Route>
      <Route path="/users/:id/posts" element={<Posts />} />
      <Route path="*" element={<WrongRoute />} />
    </Routes>
  )
}

export default App
