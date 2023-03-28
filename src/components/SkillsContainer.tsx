import { SkillCard } from "./SkillCard"

export function SkillsContainer() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center justify-center items-center gap-8">
        <div className="w-96 text-justify">
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
        <div className="w-72 h-full">
        <SkillCard skill="Tailwind CSS" level={100}/>
        </div>
      </div>
    </>
  )
}