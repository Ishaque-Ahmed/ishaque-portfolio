import React from 'react'
import burgerbuilder from '../assets/portfolio/burgerbuilder.png';
import hotelbooking from '../assets/portfolio/hotelbooking.png';
import photogallery from '../assets/portfolio/photogallery.png';
import healthcare from '../assets/portfolio/healthcare.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: healthcare,
            demo: "https://online-healthcare-store.web.app/store",
            code: "https://github.com/Ishaque-Ahmed/healthcarestorefrontend"
        },
        {
            id: 2,
            src: burgerbuilder,
            demo: "https://burger-builder-21020.web.app/login",
            code: "https://github.com/Ishaque-Ahmed/burger-builder"
        },
        {
            id: 3,
            src: hotelbooking,
            demo: "https://drive.google.com/drive/folders/1j0pk7cJnCPNDu3e9fDwTZB5TfljrZaj1?usp=sharing",
            code: "https://github.com/Ishaque-Ahmed/react-hotel-booking"
        },
        {
            id: 4,
            src: photogallery,
            demo: "https://drive.google.com/drive/folders/1bCt5k_hrAB6kVYI_oRZPGwCwURnbpIkJ?usp=sharing",
            code: "https://github.com/Ishaque-Ahmed/photo-gallery"
        }
    ]

    return (
        <div name="Portfolio"
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Some Of My Previous Projects</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>

                    {portfolios.map(({ id, src, demo, code }) => (
                        <div
                            key={id}
                            className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="img"
                                className='rounded-md duration-200 hover:scale-105' />

                            <div className='flex items-center  justify-center'>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    window.open(demo);
                                }}
                                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    window.open(code);
                                }}
                                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}

export default Portfolio;