import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const SocialLinks = () => {

    const links = [
        { 
            id: 1, 
            child: (<> LinkedIn <FaLinkedin size={30} className="hover:bg-blue-600 rounded-sm"/> </>), 
            href: 'https://www.linkedin.com/in/brandon-zarate-estrada-b8b61313a/', 
            style: 'rounded-tr-md', 
            download: false },
        {   
            id: 2,
            child: (<> Github <FaGithub size={30} className="hover:bg-purple-600 rounded-lg"/> </>), 
            href: 'https://github.com/zbrandon98', 
            style: '', 
            download: false},
        { 
            id: 3,
            child: (<> Mail <HiOutlineMail size={30} className="hover:bg-green-500 rounded-lg"/> </>), 
            href: 'mailto:bdzarate@ucdavis.edu', 
            style: '', 
            download: false
        },
        {   id: 4, 
            child: (<> Resume <BsFillPersonLinesFill size={30} className="hover:bg-yellow-500 rounded-md"/> </>), 
            href: '/ZarateBrandon_Resume.pdf', 
            style: 'rounded-br-md', 
            download: true 
        },
        
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, child, href, style, download}) => (
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[10px] duration-700 bg-gray-500 ' + style}>
                    <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
                        {child}
                    </a>
                </li>
            ))}

            
        </ul>
    </div>
  )
}

export default SocialLinks