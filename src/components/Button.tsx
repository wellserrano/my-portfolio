interface Props extends React.HTMLProps<HTMLButtonElement> {
  title: string
}

export function Button({ title, children }: Props ) {
  return (
      <button 
        type="button"
        className="flex justify-center items-center gap-2 w-36 h-11 bg-[#FFE071] text-[#3D3D3D] rounded-xl"
      >
        { title }
        { children }
      </button>
  )
}