import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Album } from '../components/Album'
import { getAlbums } from '../store/features/albumSlice'

export function Modal({ children, title, onClose }) {
  const { id } = useParams()
  const { albums } = useSelector((state) => state.album)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlbums(id))
  }, [dispatch, id])

  return (
    <>
      <div
        className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
        onClick={onClose}
      />
      <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <div
          onClick={onClose}
          className="ml-auto w-fit rounded-full flex align-center justify-center text-teal-500 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
          </svg>
        </div>

        <h1 className="font-bold text-2xl text-center mb-2">{title}</h1>
        {albums.map((album) => {
          return (
            <Album album={album} key={album.id} additionalClasses="mb-[10px]" />
          )
        })}
      </div>
    </>
  )
}
