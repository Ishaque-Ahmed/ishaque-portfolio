import React from 'react'

const About = () => {
    return (
        <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-10'>I am a Software Developer and a programmer living in Fredericton, NB Canada. I have completed my Bachelor of Computer Science from Leading University, Sylhet, Bangladesh. Currently, I am pursuing my Master of Computer Science from University of New Brunswick, Fredericton, New Brunswick. I have proficient knowledge in Programming Languages, such as, Python, JavaScript, C, C++ and Java. 
                I have a strong background in full-stack development, cloud computing, and microservices architecture. I write clean and reusable codes. I am a team player and I am focused on completing my tasks on time. Organizing skills and consistency are the key to achieve great results in any sector and I try to maintain my time, energy and strength in an effective and efficient way. I believe learning is a continuous process and I am always eager to learn new technologies and progress as a developer.
                </p>

                <br />

                <p className='text-xl'>I also have an excellent grasp in data structures and algorithms and I have solved more than three hundreds coding problems on different platforms.
                </p>

            </div>
        </div >
    )
}

export default About