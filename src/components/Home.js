import React from 'react';
import myImg from '../assets/ishaque.jpg';
import { Link } from 'react-scroll';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';


const Home = () => {
    return (
        <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>

            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>

                    <h2 className='text-4xl sm:text-7xl font-bold text-white mt-5'>Software Engineer  Full-Stack Developer</h2>

                    <p className='text-gray-500 py-4 max-w-md '>I specialize in building dynamic, scalable applications using React, Node.js, and AWS while ensuring seamless backend integrations with PostgreSQL and MongoDB. 

                        <p>🔹 Expertise: JavaScript (React, Node.js), Cloud (AWS, Docker, Kubernetes), Database (MYSQL, PostgreSQL, MongoDB) </p>
                        <p>🔹 Passion: Software Development, Cloud Computing, Quality Assurance</p>
                        <p>🔹 Tech Stack: React, Redux, Next.js, Express.js, Jest, Kubernetes</p>
                    </p>

                    <div>
                        <Link to="Portfolio"
                            smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className="ml-1" /></span>
                        </Link>
                    </div>

                </div>

                <div>
                    <img src={myImg} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>

            </div>
        </div>
    )
}

export default Home;