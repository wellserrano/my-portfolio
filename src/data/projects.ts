import pacmanImage from '../assets/projects-images/pacman.png'
import dashboardImage from '../assets/projects-images/dashboard.png'
import soroblocoImage from '../assets/projects-images/sorobloco.png'
import creditcardImage from '../assets/projects-images/creditcard.png'
import rocketmoviesImage from '../assets/projects-images/rocketmovies.png'
import gol from '../assets/projects-images/golconway.png'

const projectsData = [
  {
    title: "Conway's Game of Life",
    description: "Observe John Conway's Game of life on a simple and beautiful grid",
    image: gol,
    githubLink: 'https://github.com/wellserrano/conwaysgol',
    siteLink: 'https://golconway.netlify.app/',
  },
  {
    title: 'Credit Card',
    description: 'Credit card registration component design',
    image: creditcardImage,
    githubLink: 'https://github.com/wellserrano/creditcard',
    siteLink: 'https://wellserrano.github.io/creditcard/',
  },
  {
    title: 'Dashboard',
    description: 'Simple dashboard design shows specific data',
    image: dashboardImage,
    githubLink: 'https://github.com/wellserrano/dashboard',
    siteLink: 'https://wellserrano.github.io/dashboard/',
  },
  {  
    title: 'Sorobloco',
    description: 'Display street carnival groups in Sorocaba',
    image: soroblocoImage,
    githubLink: 'https://github.com/wellserrano/sorobloco',
    siteLink: 'https://sorobloco.netlify.app',
  },
  {
    title: 'RocketMovies',
    description: 'Platform dedicated to organize your favorite movies',
    image: rocketmoviesImage,
    githubLink: 'https://github.com/wellserrano/rocketMovies-app',
    siteLink: 'https://app-rocket-movies.netlify.app',
  },
  {
    title: 'Pacman',
    description: 'Vanilla pacman implementation',
    image: pacmanImage,
    githubLink: 'https://github.com/wellserrano/pacman',
    siteLink: 'https://wellserrano.github.io/pacman/',
  },
]

export default projectsData