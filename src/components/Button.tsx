interface Props extends React.HTMLProps<HTMLButtonElement> {
  title: string
}

export function Button({ title, children }: Props ) {
  return (
      <button 
        type="button"
        className="flex justify-center items-center gap-2 w-36 h-11 sm:w-72 sm:h-20 bg-[#FFE071] text-[#3D3D3D] text-sm sm:text-2xl rounded-xl hover:opacity-90 transition-opacity"
      >
        { title }
        { children }
      </button>
  )
}