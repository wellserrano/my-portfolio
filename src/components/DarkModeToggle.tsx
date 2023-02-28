import { Sun, Moon } from 'phosphor-react'
import { useState } from 'react';


export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <button 
      type='button'
      className='
      relative
      flex justify-center items-center 
      w-12 h-12 mb-8
      bg-[#171F26] rounded-full
      '
      onClick={() => setDarkMode(!darkMode)}
    >
      
      <Moon size={24} weight="fill" color='#A3ABB2' className={`absolute transition-transform duration-500 ${darkMode ? 'scale-100' : 'scale-0'}`}/>
      <Sun size={24} weight="fill" color='#A3ABB2' className={`absolute transition-transform duration-500 ${darkMode ? 'scale-0' : 'scale-100'}`}/>
      
    </button>
  )
}