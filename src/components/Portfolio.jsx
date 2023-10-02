import gamingCenter from '../assets/gamingCenter.png'
import ucbAdmissions from '../assets/ucbAdmissions.png'
import ecommerce from '../assets/django-python.png'

const Portfolio = () => {

    const portfolios = [
        { 
            id: 1,
            title: 'Gaming Center',
            src: gamingCenter,
            code: 'https://github.com/zbrandon98/gaming-center',
            demo: 'https://gaming-center.vercel.app',

        },
        { 
            id: 2, 
            title: 'Data Science Looks at Discimination',
            src: ucbAdmissions,
            code: 'https://github.com/matloff/dsld',
            demo: '',

        },
        {
            id: 3,
            title: 'E-commerce Website (WIP)',
            src: ecommerce,
            code: 'https://github.com/zbrandon98/eCommerceStoreFront',
        }
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>
                    Check out my work!
                </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolios.map(({id, title, src, code, demo}) => 
                    <div key={id} className='shadow-md shadow-gray-400 rounded-lg hover:scale-105 duration-200'>
                        <div className='flex justify-center py-2 font-bold'>{title}</div>
                        <img src={src} className='rounded-md ' />
                        <div className='flex items-center justify-center'>
                            {demo && <button onClick={() => window.open(demo, '_blank')} className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105'>Demo</button>}
                            <button onClick={() => window.open(code, '_blank')} className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Portfolio