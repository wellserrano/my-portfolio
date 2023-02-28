import { Sun, Moon } from 'phosphor-react'
import { useEffect, useState } from 'react';


export function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') return document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <button 
      type='button'
      className='
      relative
      flex justify-center items-center 
      w-12 h-12 mb-8
      bg-white  
      dark:bg-[#171F26] rounded-full
      '
      onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
    >
      
      <Moon size={24} weight="fill" color='#A3ABB2' className={`absolute transition-transform duration-500 ${theme === 'dark' ? 'scale-100' : 'scale-0'}`}/>
      <Sun size={24} weight="fill" color='#A3ABB2' className={`absolute transition-transform duration-500 ${theme === 'dark' ? 'scale-0' : 'scale-100'}`}/>
      
    </button>
  )
}