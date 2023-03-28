import { ProjectCard } from "./ProjectCard"
import { projectsData } from '../data/projects'

export function ProjectsContainer() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center justify-center items-center gap-8'>
      {
        projectsData &&
        projectsData.map((project, i) => {
          return (
            <ProjectCard 
              key={project.title+i}
              title={project.title} 
              description={project.description}
              image={ project.image }
              githubLink={ project.githubLink }
              siteLink={ project.siteLink }
            />
          )
        })
      }
    </div>
  ) 
}