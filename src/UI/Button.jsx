export function Button({children, onClick, additionalClasses}) {
return (
  <button className={`${additionalClasses} px-2 py-2 border-solid border-2 rounded min-w-[200px]`} onClick={onClick}>
    {children}
  </button>
)
}