
const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
                    About
                </p>
            </div>
                <p className='text-xl mt-20 mb-5'>
                    Hello, my name is Brandon David Zarate Estrada and I am a Senior 
                    studying Computer Science at UC Davis! I am a full-stack developer 
                    because I enjoy working on both the front-end and back-end of 
                    applications. I am passionate about learning new technologies and
                    I am always looking for new opportunities to grow as a developer!
                </p>
                <p className='text-xl mb-5'>
                    Some of my hobbies include running, soccer, guitar, and hangingout with friends.
                    I am listening to music 24/7 and I am always looking for new music to listen to.
                </p>
                <p className='text-xl'>
                    I am currently looking for internships and full-time position post graduation. 
                    I am also looking to work with others right now! If you are interested in working
                    together, feel free to reach out to me!
                </p>
                <br/>
        </div>
    </div>
  )
}

export default About