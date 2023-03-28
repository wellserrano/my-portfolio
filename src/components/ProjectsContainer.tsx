import { ProjectCard } from "./ProjectCard"

import pacmanImage from '../assets/projects-images/pacman.png'
import dashboardImage from '../assets/projects-images/dashboard.png'
import soroblocoImage from '../assets/projects-images/sorobloco.png'
import rocketmoviesImage from '../assets/projects-images/rocketmovies.png'

export function ProjectsContainer() {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center justify-center items-center gap-8'>
        <ProjectCard 
          title='Dashboard' 
          description='Simple dashboard design shows specific data'
          image={ dashboardImage }
          githubLink='https://github.com/wellserrano/dashboard'
          siteLink='https://wellserrano.github.io/dashboard/'
        />
        <ProjectCard 
          title='Sorobloco' 
          description='Display street carnival groups in Sorocaba'
          image={ soroblocoImage }
          githubLink='https://github.com/wellserrano/sorobloco'
          siteLink='https://sorobloco.netlify.app'
        />
        <ProjectCard 
          title='RocketMovies' 
          description='Platform dedicated to organize your favorite movies'
          image={ rocketmoviesImage }
          githubLink='https://github.com/wellserrano/rocketMovies-app'
          siteLink='https://app-rocket-movies.netlify.app'
        />
        <ProjectCard 
          title='Pacman' 
          description='Vanilla pacman implementation'
          image={ pacmanImage }
          githubLink='https://github.com/wellserrano/pacman'
          siteLink='https://wellserrano.github.io/pacman/'
        />
      </div>
  ) 
}