import { Avatar } from "../components/Avatar"
import { Toggle } from "../components/Toggle"
import { TextBox } from "../components/TextBox"
import { ModalCV } from "../components/ModalCV"
import { ThemeToggle } from "../components/ThemeToggle"
import { ModalContact } from "../components/ModalContact"
import { SkillsContainer } from "../components/SkillsContainer"
import { ProjectsContainer } from "../components/ProjectsContainer"

import { LinkedinLogo, GithubLogo} from 'phosphor-react'

import { useState } from "react"

export function Home() {
  const [toggleValue, setToggleValue] = useState<string>('portfolio')

  function handleToggle(e:string) {
    setToggleValue(e)
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center pt-5 px-5 pb-10 dark:bg-[#0C151D] bg-[#E5E5E5] transition-colors ease-out attach">
      
      <ThemeToggle />

      <header>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-10">
          <Avatar />
          <div className="flex flex-col sm:gap-2 text-center sm:text-left">
            <h1 className="dark:text-[#F1F2F4] text-[#3D3D3D] text-2xl sm:text-5xl">Wellington Serrano</h1>
            <p className="dark:text-[#A3ABB2] text-[#575757] text-lg sm:text-2xl mb-2">Software/Web Developer</p>
            <div className="flex gap-12 justify-center items-center">
              <a href="https://www.linkedin.com/in/wellserrano/" target='_blank'><LinkedinLogo weight='fill' className='dark:text-[#A3ABB2] text-[#15212c] text-4xl sm:text-5xl'/></a>
              <a href="https://github.com/wellserrano" target='_blank'><GithubLogo weight='fill' className='dark:text-[#A3ABB2] text-[#15212c] text-4xl sm:text-5xl'/> </a>
            </div>
          </div>
        </div>
        <div className="flex mt-8 gap-6 sm:gap-20">
          <TextBox amount='3' subject='Years of Experience' />
          <TextBox amount='+10' subject='Completed Projects'  />
          <TextBox amount='2' subject='Currently developing' />
        </div>
      </header>

      <main className='mt-10'>
        <div className="flex justify-center items-center gap-3 mb-12">
          <ModalCV title='Check my CV' />
          <ModalContact title='Contact Me' />
        </div>

        <div className='flex justify-center items-center mb-8'>
          <Toggle activeSection={ toggleValue } handleToggle={ handleToggle }/>
        </div>

        {
          toggleValue === 'portfolio'
          ? <ProjectsContainer />
          : <SkillsContainer />
        }
        

      </main>
      <footer className='flex justify-center items-center text-center text-sm sm:text-base text-[#3D3D3D] dark:text-[#F1F2F4] font-normal mt-12'>
        <p>Created with 🖤 and ☕ by Me</p>
      </footer>
    </div>
  )
}