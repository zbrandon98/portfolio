import selfCartoon from '../assets/selfCartoon.png'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from 'react-icons/md'


const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
          <div className="flex flex-col justify-center h-full">
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>

            <p className='text-gray-500 py-4 max-w-md'>
              I a Senior at UC Davis and I enjoy building web applications.
              I love coming up with designs and bringing them to life with technology.
              like React and Tailwind.
            </p>

            <button className='group  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className=' group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span> 
            </button>
          </div>
          <div>
            <img src={selfCartoon} alt="cartoon of myself" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
          </div>
      </div>
    </div>
  )
}

export default Home