import React, { useEffect } from 'react'

import { Avatar } from "../components/Avatar"
import { Toggle } from "../components/Toggle"
import { Button } from "../components/Button"
import { TextBox } from "../components/TextBox"
import { ProjectCard } from "../components/ProjectCard"
import { ThemeToggle } from "../components/ThemeToggle"

import { LinkedinLogo, GithubLogo} from 'phosphor-react'

import dashboardImage from '../assets/projects-images/dashboard.png'

export function Home() {

  return (
    <div className="flex flex-col justify-center items-center pt-5 px-5 pb-10 dark:bg-[#0C151D] bg-[#E5E5E5] transition-colors ease-out">

      <header className="flex flex-col justify-start items-center mb-10">
        <ThemeToggle />
        <Avatar />
        <h1 className="dark:text-[#F1F2F4] text-[#3D3D3D] text-2xl">Wellington Serrano</h1>
        <p className="dark:text-[#A3ABB2] text-[#575757] text-lg mb-2">Software Developer</p>
        <div className="flex gap-12 justify-center items-center">
          <a href="https://www.linkedin.com/in/wellserrano/" target='_blank'><LinkedinLogo weight='fill' size={32} className='dark:text-[#A3ABB2] text-#575757'/></a>
          <a href="https://github.com/wellserrano" target='_blank'><GithubLogo weight='fill' size={32} className='dark:text-[#A3ABB2] text-#575757'/> </a>
        </div>
        <div className="flex mt-8 gap-6">
          <TextBox amount='3' subject='Years of Experience' />
          <TextBox amount='+10' subject='Completed Projects'  />
          <TextBox amount='2' subject='Currently developing' />
        </div>
      </header>

      <main>
        <div className="flex justify-center items-center gap-3 mb-12">
          <Button title='Check my CV' />
          <Button title='Contact Me' />
        </div>

        <div className='flex justify-center items-center mb-8'>
          <Toggle />
        </div>

        <div className='flex justify-center items-center'>
          <ProjectCard 
            title='Dashboard' 
            description='Simple dashboard design shows specific data'
            image={ dashboardImage }
            githubLink='https://github.com/wellserrano/dashboard'
            siteLink='https://wellserrano.github.io/dashboard/'
          />
        </div>

      </main>
      <footer className='flex justify-center items-center text-center text-sm text-[#3D3D3D] dark:text-[#F1F2F4] font-normal mt-8'>
        <p>Desenvolvido com 💖 e ☕ por Wellington Serrano</p>
      </footer>
    </div>
  )
}