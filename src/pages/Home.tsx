import { Avatar } from "../components/Avatar"
import { DarkModeToggle } from "../components/DarkModeToggle"

import linkedinLogo from '../assets/linkedin.svg'
import githubLogo from '../assets/github.svg'

export function Home() {
  return (
    <div className="flex flex-col justify-center items-center pt-5 px-5 pb-10">
      <header className="flex flex-col justify-start items-center">
        <DarkModeToggle />
        <Avatar />
        <h1 className="text-[#F1F2F4] text-2xl">Wellington Serrano</h1>
        <p className="text-[#A3ABB2] text-lg mb-2">Software Developer</p>
        <div className="flex gap-12 justify-center items-center">
          <a href="https://www.linkedin.com/in/wellserrano/" target='_blank'><img src={ linkedinLogo } alt="linkedin logo" /></a>
          <a href="https://github.com/wellserrano" target='_blank'><img src={ githubLogo } alt="github logo" /></a>
        </div>
      </header>
    </div>
  )
}