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
import c from '../assets/c.png';
import docker from '../assets/docker.png';
import java from '../assets/java.png';
import kubernetes from '../assets/kubernetes.png';
import mysql from '../assets/mysql.png';
import operating from '../assets/operating.png';
import postgre from '../assets/postgre.png';
import py from '../assets/py.jpg';
import rest from '../assets/rest.jpg';
import next from '../assets/next.png'


const Experiences = () => {

    const experiences = [
        {
            id: 1,
            src: javascript,
            title: "JavaScript",
            style: 'shadow-yellow-500'
        },
        {
            id: 2,
            src: py,
            title: "Python",
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            src: c,
            title: "C",
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: java,
            title: "JAVA",
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: react,
            title: "REACT",
            style: 'shadow-blue-600'
        },
        {
            id: 6,
            src: next,
            title: "NEST JS",
            style: 'shadow-blue-600'
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
            src: mysql,
            title: "MYSQL",
            style: 'shadow-green-500'
        },
        {
            id: 10,
            src: postgre,
            title: "PostgreSQL",
            style: 'shadow-green-500'
        },
        {
            id: 11,
            src: docker,
            title: "Docker",
            style: 'shadow-green-500'
        },
        {
            id: 12,
            src: kubernetes,
            title: "Kubernetes",
            style: 'shadow-green-500'
        },
        , {
            id: 13,
            src: rest,
            title: "REST API",
            style: 'shadow-teal-500'
        }
        , 
        {
            id: 14,
            src: html,
            title: "HTML",
            style: 'shadow-teal-500'
        },
        {
            id: 15,
            src: css,
            title: "CSS",
            style: 'shadow-sky-400'
        },
        {
            id: 16,
            src: bootstrap,
            title: "BootStrap",
            style: 'shadow-gray-400'
        },
        {
            id: 17,
            src: tailwind,
            title: "TailWind",
            style: 'shadow-gray-400'
        },
        {
            id: 18,
            src: github,
            title: "Github",
            style: 'shadow-gray-400'
        }
    ]

    return (
        <div name="Experience"
            className='bg-gradient-to-b from-gray-800 to-black w-full h-full pt-20'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                    <p className='py-6'>I have profiecient knowledge on the following skills</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {experiences.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
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