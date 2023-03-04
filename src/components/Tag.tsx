interface TagProps {
  text: string
}

export function Tag({ text }: TagProps)  {
  return (
    <div className="w-fit bg-blue-400 rounded-full text-gray-800 text-xs p-1">
      <p>{ text }</p>
    </div>
  )
}