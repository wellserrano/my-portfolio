import * as Tooltip from '@radix-ui/react-tooltip';
import * as Collapsible from '@radix-ui/react-collapsible';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

import { Browser, GithubLogo } from 'phosphor-react'

import { useState } from 'react';

export function ProjectCard() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      className="w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px] opacity-80 hover:opacity-100"
      open={ open }
      onOpenChange={ setOpen }
    >

      <Collapsible.Trigger asChild >
        <AspectRatio.Root ratio={16 / 9}>
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            alt="Landscape photograph by Tobias Tullius"
          />
        </AspectRatio.Root>
      </Collapsible.Trigger>

      <Collapsible.Content>
        <div className='flex justify-around py-6'>
          <Browser size={36} weight="duotone" color='#A3ABB2' />
          <GithubLogo size={36} color='#A3ABB2'/>
        </div>
      </Collapsible.Content>

    </Collapsible.Root> 
  )
}