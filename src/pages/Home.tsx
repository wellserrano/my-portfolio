import React from 'react'

import { Avatar } from "../components/Avatar"
import { Toggle } from "../components/Toggle"
import { Button } from "../components/Button"
import { TextBox } from "../components/TextBox"
import { ProjectCard } from "../components/ProjectCard"
import { DarkModeToggle } from "../components/DarkModeToggle"

import githubLogo from '../assets/github.svg'
import linkedinLogo from '../assets/linkedin.svg'

import dashboardImage from '../assets/projects-images/dashboard.png'

export function Home() {

  return (
    <div className="flex flex-col justify-center items-center pt-5 px-5 pb-10">

      <header className="flex flex-col justify-start items-center mb-10">
        <DarkModeToggle />
        <Avatar />
        <h1 className="text-[#F1F2F4] text-2xl">Wellington Serrano</h1>
        <p className="text-[#A3ABB2] text-lg mb-2">Software Developer</p>
        <div className="flex gap-12 justify-center items-center">
          <a href="https://www.linkedin.com/in/wellserrano/" target='_blank'><img src={ linkedinLogo } alt="linkedin logo" /></a>
          <a href="https://github.com/wellserrano" target='_blank'><img src={ githubLogo } alt="github logo" /></a>
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
          <Button title='Contact Me'/>
        </div>

        <div className='flex justify-center items-center mb-8'>
          <Toggle />
        </div>

        <div className='flex justify-center items-center'>
          <ProjectCard 
            title='Dashboard' 
            description='Simple dashboard design to show data'
            image={ dashboardImage }
            githubLink='https://github.com/wellserrano/dashboard'
            siteLink='https://wellserrano.github.io/dashboard/'
          />
        </div>

      </main>
    </div>
  )
}