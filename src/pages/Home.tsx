import { Avatar } from "../components/Avatar"
import { Toggle } from "../components/Toggle"
import { TextBox } from "../components/TextBox"
import { ModalCV } from "../components/ModalCV"
import { ThemeToggle } from "../components/ThemeToggle"
import { ModalContact } from "../components/ModalContact"
import { SkillsContainer } from "../components/SkillsContainer"
import { ProjectsContainer } from "../components/ProjectsContainer"

import * as Toast from '@radix-ui/react-toast'
import { LinkedinLogo, GithubLogo } from 'phosphor-react'

import { useEffect, useRef, useState } from "react"

import projects from '../data/projects'

export function Home() {
  const [toggleValue, setToggleValue] = useState<string>('portfolio')
  const [showToast, setShowToast] = useState<boolean>(false)

  const toastDialogRef = useRef<HTMLButtonElement | null>(null)

  function handleToggle(e:string) {
    setToggleValue(e)
  }

  const numberOfProjects = projects.length

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(true)
    }, 15000)
    return () => clearTimeout(timer)
  }, [])

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
              <a className='' href="https://www.linkedin.com/in/wellserrano/" target='_blank'><LinkedinLogo weight='fill' className='dark:text-[#A3ABB2]/90 text-[#15212c]/90 text-4xl sm:text-5xl dark:hover:text-[#A3ABB2] hover:text-[#15212c] hover:scale-105 transition-all'/></a>
              <a className='' href="https://github.com/wellserrano" target='_blank'><GithubLogo weight='fill' className='dark:text-[#A3ABB2]/90 text-[#15212c]/90 text-4xl sm:text-5xl dark:hover:text-[#A3ABB2] hover:text-[#15212c] hover:scale-105 transition-all'/> </a>
            </div>
          </div>
        </div>
        <div className="flex mt-8 gap-6 sm:gap-20">
          <TextBox amount={4} subject='Years of Experience' />
          <TextBox amount={numberOfProjects} subject='Completed Projects'  />
          <TextBox amount={3} subject='Currently developing' />
        </div>
      </header>
      <Toast.Provider swipeDirection="right">
        <main className='mt-10'>

          <div className="flex justify-center items-center gap-3 mb-12">
            <ModalCV title='Check my CV' />
            <ModalContact ref={toastDialogRef} title='Contact Me' />
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
        <Toast.Root
          className="bg-[#D7D7D7] dark:bg-[#171F26] rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-4 grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-4 items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
          open={showToast}
          onOpenChange={setShowToast}
        >

          <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-[#19191B] dark:text-[#A3ABB2] text-base">
            Hey! 
          </Toast.Title>
          <Toast.Description asChild className="text-[#19191B] dark:text-[#A3ABB2] text-sm">
            <p>Have you found anything strange or willing to be improved on these projects? 
              Be welcome to contact me or create an issue on its github project
              😉
            </p>
          </Toast.Description>
          <Toast.Action className="[grid-area:_action] bg-emerald-500 dark:bg-[#FDE072] p-2 rounded hover:opacity-80 transition-all" asChild altText='pops contact message'>
            <button onClick={() => {
              toastDialogRef.current?.click()
            } }>
                Contact
            </button>
          </Toast.Action>

        </Toast.Root>

        <Toast.Viewport className="[--viewport-padding:_25px] 
        fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] 
        gap-[10px] w-96 max-w-[100vw] m-0 list-none z-[2147483647] outline-none" 
        />
      </Toast.Provider>

      <footer className='flex justify-center items-center text-center text-sm sm:text-base text-[#3D3D3D] dark:text-[#F1F2F4] font-normal mt-12'>
        <p>Created with 🖤 and ☕ by Me</p>
      </footer>
    </div>
  )
}