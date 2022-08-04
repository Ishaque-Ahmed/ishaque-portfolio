import React from 'react'

const About = () => {
    return (
        <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-10'>I am a tech-savvy person who loves to build clear and simple web applications. I write clean and reusable codes. I am a team player and I am focused on completing my tasks on time. Organizing skills and consistency are the key to achieve great results in any sector and I try to maintain my time, energy and strength in an effective and efficient way. I believe learning is a continuous process and I am always eager to learn new technologies and progress as a developer.
                </p>

                <br />

                <p className='text-xl'>I also have an excellent grasp in data structures and algorithms, programming languages such as C, C++, Python, Java, and JavaScript. I have great communication skills and my competence in English is a bonus.
                </p>

            </div>
        </div >
    )
}

export default About