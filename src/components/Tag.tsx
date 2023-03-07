interface TagProps {
  text: string
}

export function Tag({ text }: TagProps)  {
  return (
    <div className="flex w-2 h-2 justify-center items-center bg-blue-400 rounded-full text-gray-800 text-xs p-1 group-hover:animate-pill">
      <p className="hidden text-[0.5rem] group-hover:flex group-hover:flex-auto">{ text }</p>
    </div>
  )
}