import * as Progress from '@radix-ui/react-progress';
import { useEffect, useState } from 'react';

interface SkillCardProps {
  skill: string
  level: number
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export function SkillCard({ skill, level, icon:Icon }: SkillCardProps) {
  const [progressValue, setProgressValue] = useState<number>(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(level), 500)  
    return () => clearTimeout(timer)
  },[])

  return (
    <div className='flex flex-row justify-center items-center mb-6'>
      <div className='mr-6'>
        <Icon className='fill-[#15212C] dark:fill-[#E5E5E5]' height={36} width={36}/>
      </div>

      <div>
        <h2 className='text-emerald-700 dark:text-[#FFE071] font-bold mb-2'>{skill}</h2>
        <Progress.Root
          className="relative overflow-hidden bg-[#D7D7D7] dark:bg-slate-700 rounded-full w-60 h-4"
          value={ level }
        >
          <Progress.Indicator
            className="bg-[#737379] dark:bg-white w-full h-full rounded-r-3xl transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
            style={{ transform: `translateX(-${100 - progressValue}%)` }}
          />
        </Progress.Root>
      </div>
    </div>
  )
}