import * as Toggle from '@radix-ui/react-toggle';
import { Sun, Moon } from 'phosphor-react'
import { useState } from 'react';


export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <Toggle.Root 
      className='flex justify-center items-center 
      w-12 h-12 bg-[#171F26] rounded-full'
      onClick={() => setDarkMode(!darkMode)}
    >
      {
        darkMode 
        ? <Moon size={24} weight="fill" color='#A3ABB2'/>
        : <Sun size={24} weight="fill" color='#A3ABB2' />
      }
    </Toggle.Root>
  )
}