import * as Tooltip from '@radix-ui/react-tooltip';
import * as Collapsible from '@radix-ui/react-collapsible';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

import { Browser, GithubLogo } from 'phosphor-react'

import { useState } from 'react';

interface Props {
  title: string
  description: string
  image: string
  githubLink: string
  siteLink: string
}

export function ProjectCard({ title, description, image, githubLink, siteLink }: Props) {
  const [open, setOpen] = useState(false);

  const tooltipStyle = 'text-[#3D3D3D] select-none rounded-md bg-white px-4 py-2 text-base leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]'

  return (
    <Collapsible.Root
      className="w-72 overflow-hidden rounded-md shadow-[0_2px_10px] hover:scale-105 transition-transform"
      open={ open }
      onOpenChange={ setOpen }
    >

      <Collapsible.Trigger asChild >
        <AspectRatio.Root ratio={16 / 9}>
          <img
            className="h-full w-full object-cover blur-sm grayscale-[0.75] hover:grayscale-0 hover:blur-none transition-blur ease-linear"
            src={ image }
            alt="webpage image"
          />
        </AspectRatio.Root>
      </Collapsible.Trigger>

      <Collapsible.Content 
        className='overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp'
      >
        <div className='flex flex-col items-start px-4 pt-2 gap-2'>
          <h2 className='text-[#F1F2F4] opacity-95 text-xl'>{ title }</h2>
          <p className='text-[#A3ABB2] text-sm'>{ description }</p>
        </div>

        <div className='flex justify-around pt-2 pb-4'>
          <Tooltip.Provider delayDuration={800}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a href={ siteLink } target='_blank'>
                  <Browser size={28} color='#A3ABB2' className='hover:cursor-pointer hover:scale-110 transition-transform' />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className={ tooltipStyle }
                  sideOffset={5}
                  side='bottom'
                >
                  Visit website
                  <Tooltip.Arrow className="fill-white" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>

          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a href={ githubLink } target='_blank'>
                  <GithubLogo size={28} color='#A3ABB2' className='hover:cursor-pointer hover:scale-110 transition-transform' />
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