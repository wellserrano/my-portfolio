import * as Collapsible from '@radix-ui/react-collapsible';

import { SkillCard } from "./SkillCard"

import { ReactComponent as Tailwindcss } from '../assets/skills/tailwindcss.svg'
import { ReactComponent as Javascript } from '../assets/skills/javascript.svg'
import { ReactComponent as Typescript } from '../assets/skills/typescript.svg'
import { ReactComponent as Python } from '../assets/skills/python.svg'
import { ReactComponent as Delphi } from '../assets/skills/delphi.svg'
import { ReactComponent as React } from '../assets/skills/react.svg'
import { ReactComponent as Next } from '../assets/skills/next.svg'
import { ReactComponent as Fastify } from '../assets/skills/fastify.svg'
import { ReactComponent as Prisma } from '../assets/skills/prisma.svg'
import { ReactComponent as Node} from '../assets/skills/node.svg'

import { CaretDown, CaretUp } from 'phosphor-react';
import { useState } from 'react';


export function SkillsContainer() {
  const [languageOpen, setLanguageOpen] = useState(true)
  const [frameworkOpen, setFrameworkOpen] = useState(true)
  const [librarieOpen, setLibrarieOpen] = useState(true)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center justify-center items-center gap-8">

        <div className="w-96 items-center text-justify">
          <p className="text-lg leading-relaxed text-[#3D3D3D] dark:text-[#F1F2F4]">
            I am <strong>Wellington Serrano</strong>, a professional web developer with over 3 years of experience in creating dynamic and responsive web/desktop applications.
            My portfolio website showcases my expertise in crafting user-friendly and visually appealing web solutions that cater to a wide range of industries and target audiences.
            I have honed my skills in <strong className="italic">HTML, CSS, JavaScript, TypeScript</strong> and various web frameworks, tools and technologies such as <strong className="text-lg text-emerald-700 dark:text-[#FFE071]" >React, NextJS, React Native, Expo</strong> and <strong className="text-emerald-700 dark:text-[#FFE071]">NodeJS</strong>. 
            <br /><br />I am a problem-solver at heart, who enjoys tackling complex challenges to develop innovative and creative solutions that drive business growth and success.
            <br /><br />&there4; Committed to delivering high-quality work that meets the unique needs and requirements of my clients. 
            <br /><br />&there4; Keen eye for detail and strive to exceed expectations. 
            <br /><br />&there4; Up-to-date with the latest trends and technologies in the industry to ensure my clients receive cutting-edge web solutions.
          </p>
        </div>

        <div className="w-72 h-full ml-14">

          <Collapsible.Root open={languageOpen} onOpenChange={setLanguageOpen}>
          <Collapsible.Trigger asChild>
            <p className='flex flex-row justify-end items-center gap-2 text-xl font-bold text-[#3D3D3D] dark:text-white mt-8 mb-1  cursor-pointer hover:opacity-75'>
              {languageOpen ? <CaretUp /> : <CaretDown />} Programming Languages 
            </p>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <SkillCard skill="NodeJS" level={80} icon={ Node } />
            <SkillCard skill="JavaScript" level={80} icon={Javascript} />
            <SkillCard skill="TypeScript" level={65} icon={Typescript} />
            <SkillCard skill="Python" level={60} icon={Python} />
            <SkillCard skill="Delphi" level={75} icon={Delphi} />
          </Collapsible.Content>
          </Collapsible.Root>

          <Collapsible.Root open={frameworkOpen} onOpenChange={setFrameworkOpen}>
          <Collapsible.Trigger asChild>
            <p className='flex flex-row justify-end items-center gap-2 text-xl font-bold text-[#3D3D3D] dark:text-white mt-8 mb-1  cursor-pointer hover:opacity-75'>
              {frameworkOpen ? <CaretUp /> : <CaretDown />} Frameworks 
            </p>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <SkillCard skill="React" level={75} icon={React} />
            <SkillCard skill="React Native" level={75} icon={React} />
            <SkillCard skill="NextJS" level={55} icon={Next} />
          </Collapsible.Content>
          </Collapsible.Root>

          <Collapsible.Root open={librarieOpen} onOpenChange={setLibrarieOpen}>
          <Collapsible.Trigger asChild>
            <p className='flex flex-row justify-end items-center gap-2 text-xl font-bold text-[#3D3D3D] dark:text-white mt-8 mb-1  cursor-pointer hover:opacity-75'>
              {librarieOpen ? <CaretUp /> : <CaretDown />} Libraries 
            </p>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <SkillCard skill="Tailwind CSS" level={75} icon={Tailwindcss} />
            <SkillCard skill="Fastify" level={65} icon={Fastify} />
            <SkillCard skill="Prisma" level={80} icon={Prisma} />
          </Collapsible.Content>
          </Collapsible.Root>
        </div>

      </div>
    </>
  )
}