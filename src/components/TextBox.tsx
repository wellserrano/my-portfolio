interface Props {
  amount: string
  subject: string
}

export function TextBox({amount, subject} : Props) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <p className="text-[#C3C7CB] text-base">{amount}</p>
      <p className="text-[#A3ABB2] text-sm">{subject}</p>

    </div>
  )
}