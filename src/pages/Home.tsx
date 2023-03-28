import { Avatar } from "../components/Avatar"
import { Toggle } from "../components/Toggle"
import { Button } from "../components/Button"
import { TextBox } from "../components/TextBox"
import { ModalCV } from "../components/ModalCV"
import { ProjectCard } from "../components/ProjectCard"
import { ThemeToggle } from "../components/ThemeToggle"
import { ModalContact } from "../components/ModalContact"

import { LinkedinLogo, GithubLogo} from 'phosphor-react'

import pacmanImage from '../assets/projects-images/pacman.png'
import dashboardImage from '../assets/projects-images/dashboard.png'
import soroblocoImage from '../assets/projects-images/sorobloco.png'
import rocketmoviesImage from '../assets/projects-images/rocketmovies.png'
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
              <a href="https://www.linkedin.com/in/wellserrano/" target='_blank'><LinkedinLogo weight='fill' className='dark:text-[#A3ABB2] text-#575757 text-4xl sm:text-5xl'/></a>
              <a href="https://github.com/wellserrano" target='_blank'><GithubLogo weight='fill' className='dark:text-[#A3ABB2] text-#575757 text-4xl sm:text-5xl'/> </a>
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
          toggleValue === 'portfolio' ?
          <>
            <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center justify-center items-center gap-8'>
              <ProjectCard 
                title='Dashboard' 
                description='Simple dashboard design shows specific data'
                image={ dashboardImage }
                githubLink='https://github.com/wellserrano/dashboard'
                siteLink='https://wellserrano.github.io/dashboard/'
              />
              <ProjectCard 
                title='Sorobloco' 
                description='Display street carnival groups in Sorocaba'
                image={ soroblocoImage }
                githubLink='https://github.com/wellserrano/sorobloco'
                siteLink='https://sorobloco.netlify.app'
              />
              <ProjectCard 
                title='RocketMovies' 
                description='Platform dedicated to organize your favorite movies'
                image={ rocketmoviesImage }
                githubLink='https://github.com/wellserrano/rocketMovies-app'
                siteLink='https://app-rocket-movies.netlify.app'
              />
              <ProjectCard 
                title='Pacman' 
                description='Vanilla pacman implementation'
                image={ pacmanImage }
                githubLink='https://github.com/wellserrano/pacman'
                siteLink='https://wellserrano.github.io/pacman/'
              />
            </div>
          </>

          : 
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center justify-center items-center gap-8">
              <div className="w-96 text-start">
                <p className="text-lg leading-relaxed text-[#3D3D3D] dark:text-[#F1F2F4]">
                  I am <strong>Wellington Serrano</strong>, a professional web developer with over 3 years of experience in creating dynamic and responsive web/desktop applications.
                  My portfolio website showcases my expertise in crafting user-friendly and visually appealing web solutions that cater to a wide range of industries and target audiences.
                  I have honed my skills in <strong className="italic">HTML, CSS, JavaScript, TypeScript</strong> and various web frameworks, tools and technologies such as <strong className="text-lg text-[#FFE071]">React, NextJS, React Native, Expo</strong> and <strong className="text-[#FFE071]">NodeJS</strong>. 
                  <br /><br />I am a problem-solver at heart, who enjoys tackling complex challenges to develop innovative and creative solutions that drive business growth and success.
                  <br /><br />&there4; Committed to delivering high-quality work that meets the unique needs and requirements of my clients. 
                  <br /><br />&there4; Keen eye for detail and strive to exceed expectations. 
                  <br /><br />&there4; Up-to-date with the latest trends and technologies in the industry to ensure my clients receive cutting-edge web solutions.
                </p>
              </div>
              <div className="w-72 h-full">

              </div>
            </div>
          </>
        }
        

      </main>
      <footer className='flex justify-center items-center text-center text-sm sm:text-base text-[#3D3D3D] dark:text-[#F1F2F4] font-normal mt-12'>
        <p>Created with 🖤 and ☕ by Me</p>
      </footer>
    </div>
  )
}