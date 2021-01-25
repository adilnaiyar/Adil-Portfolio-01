import clothing from '../../assets/projects_images/clothing.PNG';
import burger_ghar from '../../assets/projects_images/burger_ghar.PNG';
import code_blog from '../../assets/projects_images/code_blog.PNG';
import indiatest from '../../assets/projects_images/indiatest.png';
import web_coach from '../../assets/projects_images/web_coach.png';
import an_gallery from '../../assets/projects_images/an_gallery.PNG';


const ProjectData = [
    {
        name: 'ANN Clothings',
        image: clothing,
        deployed_url: 'https://ann-clothing.herokuapp.com/',
        github_url: 'https://github.com/adilnaiyar/an-clothing',
        category: ['react.js', 'redux']
    },

    {
        name: 'Burger Ghar',
        image: burger_ghar,
        deployed_url: 'https://burger-ghar.web.app/',
        github_url: 'https://github.com/adilnaiyar/burger-ghar',
        category: ['react.js', 'redux']
    },

    {
        name: 'An Gallery',
        image: an_gallery,
        deployed_url: 'https://an-gallery.netlify.app/',
        github_url:'https://github.com/adilnaiyar/an-gallery',
        category: ['react.js', 'react-hook', 'framer-motion']
    },

    {
        name: 'Code Blog',
        image: code_blog,
        deployed_url: '!#',
        github_url: 'https://github.com/adilnaiyar/code-blog',
        category: ['laravel', 'php', 'mysql']
    },

    {
        name: 'IndiaTest',
        image: indiatest,
        deployed_url: 'https://indiatests.in/',
        github_url: '!#',
        category: ['laravel','php','mysql']
    },

    {
        name: 'Web Coach',
        image: web_coach,
        deployed_url: '!#',
        github_url:'https://github.com/adilnaiyar/web_coach',
        category: ['codeigniter','php','mysql']
    },
]

export default ProjectData;