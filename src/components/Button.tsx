import { PrimitiveButtonProps } from "@radix-ui/react-toggle"

interface Props extends PrimitiveButtonProps {
  title: string
}

export function Button({ title, children }: Props ) {
  return (
      <button 
        type="button"
        className="flex justify-center items-center gap-2 w-40 h-11 bg-[#FFE071] text-[#3D3D3D] rounded-xl"
      >
        { title }
        { children }
      </button>
  )
}