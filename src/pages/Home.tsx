import { Avatar } from "../components/Avatar"
import { DarkModeToggle } from "../components/DarkModeToggle"

export function Home() {
  return (
    <div className="flex flex-col justify-center items-center pt-5 px-5 pb-10">
      <header className="flex flex-col justify-start items-center">
        <DarkModeToggle />
        <Avatar />
        <h1>Wellington G. Andrade Serrano</h1>
        <p>Software Developer</p>
        <p>iiiicccccooooonnnnnneeeesss</p>
      </header>
    </div>
  )
}