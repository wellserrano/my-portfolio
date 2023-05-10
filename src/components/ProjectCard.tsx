import * as Tooltip from '@radix-ui/react-tooltip';
import * as Collapsible from '@radix-ui/react-collapsible';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

import { Browser, GithubLogo } from 'phosphor-react'

import { useState } from 'react';
// import { Tag } from './Tag';

interface Props {
  title: string
  description: string
  image: string
  githubLink: string
  siteLink: string
  tags?: string[]
}

export function ProjectCard({ title, description, image, githubLink, siteLink, tags }: Props) {
  const [open, setOpen] = useState(true);

  const tooltipStyle = 'text-[#3D3D3D] select-none rounded-md bg-white px-4 py-2 text-base leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]'

  return (
    <Collapsible.Root
      className="group w-72 sm:w-80 sm:min-h-full overflow-hidden rounded-md shadow-[0_2px_10px] sm:hover:scale-105 transition-transform"
      open={ open }
      // onMouseOver={() => setOpen(true) }
      // onMouseLeave={() => setTimeout(() => setOpen(false), 500) }
    >

      <Collapsible.Trigger asChild >
        <AspectRatio.Root ratio={16 / 9}>
          <img
            className="h-full w-full object-cover sm:grayscale-[0.75] sm:group-hover:grayscale-0 transition-blur ease-linear"
            src={ image }
            alt="webpage image"
          />
        </AspectRatio.Root>
      </Collapsible.Trigger>

      <Collapsible.Content 
        className='relative flex w-full flex-col justify-between overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp'
      >
        <div className='flex flex-col items-start px-4 pt-2 gap-2'>
          <h2 className='text-[#3A3A3A] dark:text-[#C3C7CB] opacity-95 text-xl'>{ title }</h2>
          {/* {
            tags && 
            tags.map(tag => <Tag text={ tag } />)
          } */}
          <p className='text-[#575757] dark:text-[#A3ABB2] text-sm'>{ description }</p>
        </div>

        <div className='flex justify-around pt-2 pb-4'>
          <Tooltip.Provider delayDuration={800}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a href={ siteLink } target='_blank'>
                  <Browser size={28} className='hover:cursor-pointer hover:scale-110 transition-transform text-[#575757] dark:text-[#A3ABB2]' />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className={ tooltipStyle }
                  sideOffset={5}
                  side='bottom'
                >
                  Visit website
                  <Tooltip.Arrow className="dark:fill-white" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>

          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a href={ githubLink } target='_blank'>
                  <GithubLogo size={28} className='hover:cursor-pointer hover:scale-110 transition-transform text-[#575757] dark:text-[#A3ABB2]' />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className={ tooltipStyle }
                  sideOffset={5}
                  side='bottom'
                >
                  Go to github
                  <Tooltip.Arrow className="fill-white" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>

        </div>
      </Collapsible.Content>

    </Collapsible.Root> 
  )
}