export function Album({album, additionalClasses}) {
  return (
    <div className={`${additionalClasses} p-[20px] border-2 border-solid border-teal-400`}>
      <div><b>Album id: </b>{album.id}</div>
      <div><b>Album title: </b>{album.title}</div>
    </div>
  )
}