import React from 'react';
import '../../index.css';


const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-112px)] pt-24 pb-16 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">About This Project</h2>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        Civic Connect is a platform dedicated to empowering communities through civic engagement. 
        Our mission is to connect citizens, workers, and administrators to foster collaboration and positive change.
      </p>
    </div>
  );
};

export default About;