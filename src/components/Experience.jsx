import css from '../assets/icons8-css-144.png'
import django from '../assets/icons8-django-192.png'
import git from '../assets/icons8-git-144.png'
import html from '../assets/icons8-html-144.png'
import javascript from '../assets/icons8-javascript-144.png'
import rproject from '../assets/icons8-r-project-144.png'
import react from '../assets/icons8-react-160.png'
import tailwind from '../assets/icons8-tailwind-css-144.png'
import cplusplus from '../assets/icons8-c-144.png'

const Experience = () => {

    const experiences = [
        {id: 1, src: html, title: 'HTML', style: 'shadow-orange-500'},
        {id: 2, src: css, title: 'CSS', style: 'shadow-blue-500'},
        {id: 3, src: javascript, title: 'JavaScript', style: 'shadow-yellow-500'},
        {id: 4, src: react, title: 'React', style: 'shadow-blue-500'},
        {id: 5, src: git, title: 'Git', style: 'shadow-orange-500'},
        {id: 6, src: tailwind, title: 'Tailwind', style: 'shadow-blue-500'},
        {id: 7, src: django, title: 'Django', style: 'shadow-green-600'},
        {id: 8, src: cplusplus, title: 'C++', style: 'shadow-blue-500'},
        {id: 9, src: rproject, title: 'R', style: 'shadow-blue-500'},
    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6 '>Technologies I have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {experiences.map(({id, src, title, style}) => (
                    <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + ' ' + style}>
                        <img src={src} className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Experience