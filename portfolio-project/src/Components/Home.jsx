import React from 'react';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div name="home"className="h-screen w-full bg-[#0a192f]">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    I'm a Front End Web Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                    I have 4 years of experience in graphics design and web development.
                    Currently, I love to work on web application using technologies like
                    React, Tailwind, Next.js and Mongodb.
                </p>
                <div>
                    <Link to="about" smooth duration={500} 
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 cursor-pointer md:text-center">
                        About Me  
                    </Link>
                </div>
            </div>
            {/* Add some Profile picture */}
            <div>
                <h1 className='text-9xl text-white'>TIGER</h1>
            </div>
        </div>
  </div>
  );
};
export default Home;