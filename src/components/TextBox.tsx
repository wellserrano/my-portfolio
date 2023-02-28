interface Props {
  amount: string
  subject: string
}

export function TextBox({amount, subject} : Props) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <p className="text-[#3A3A3A] dark:text-[#C3C7CB] text-base">{amount}</p>
      <p className="text-[#575757] dark:text-[#A3ABB2] text-sm">{subject}</p>

    </div>
  )
}