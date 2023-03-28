import * as Progress from '@radix-ui/react-progress';
import { useEffect, useState } from 'react';

interface SkillCardProps {
  skill: string
  level: number
  image: string
}

export function SkillCard({ skill, level, image }: SkillCardProps) {
  const [progressValue, setProgressValue] = useState<number>(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(level), 500)  
    return () => clearTimeout(timer)
  },[])

  return (
    <div className='flex flex-row justify-center items-center mb-6'>
      <img src={ image } alt="skill logo" className='h-8 mr-4'/>

      <div>
        <h2 className='dark:text-[#FFE071] font-bold mb-2'>{skill}</h2>
        <Progress.Root
          className="relative overflow-hidden bg-slate-700 rounded-full w-[300px] h-4"
          value={ level }
        >
          <Progress.Indicator
            className="bg-white w-full h-full rounded-r-3xl transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
            style={{ transform: `translateX(-${100 - progressValue}%)` }}
          />
        </Progress.Root>
      </div>
    </div>
  )
}