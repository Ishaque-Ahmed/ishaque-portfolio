import React from 'react'
import css from '../assets/css.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import github from '../assets/github.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import mongodb from '../assets/mongodb.png';
import bootstrap from '../assets/bootstrap.png';

const Experiences = () => {

    const experiences = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: "REACT",
            style: 'shadow-blue-600'
        }
        , {
            id: 5,
            src: bootstrap,
            title: "BOOTSTRAP",
            style: 'shadow-teal-500'
        }
        , {
            id: 6,
            src: tailwind,
            title: "TAILWIND",
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            src: node,
            title: "NODE JS",
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            src: mongodb,
            title: "MONGODB",
            style: 'shadow-green-500'
        },
        {
            id: 9,
            src: github,
            title: "GITHUB",
            style: 'shadow-gray-400'
        }
    ]

    return (
        <div name="Experience"
            className='bg-gradient-to-b from-gray-800 to-black w-full h-full pt-20'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experiences</p>
                    <p className='py-6'>Technologies I have Experiences on</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {experiences.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + ' ' + style}>
                            <img src={src} alt="html"
                                className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Experiences;