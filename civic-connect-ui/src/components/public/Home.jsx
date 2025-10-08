import React from 'react';
import '../../index.css';
import { Link, Links } from 'react-router-dom';
const Home = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-112px)] pt-24 pb-16">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold underline mb-2">
                    hello There !! this is civic connect
                </h1>
                <p>Welcome to the Civic Connect platform!</p>
            </div>
            <div className="text-center">
                <p className="mb-4">Click here to login as:</p>
                <div className="flex gap-4 justify-center mb-4">
                    <Link to="/user">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        User
                    </button>
                    </Link>
                    <Link to="/admin">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Admin
                    </button>
                    </Link>
                    <Link to="/worker">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Worker
                    </button>
                    </Link>
                </div>
                
               <p className="mt-2 text-gray-700">
                    Already have an account?{' '}
                    <Link to="/login" className="font-semibold text-blue-600 cursor-pointer hover:underline">
                        Login here
                    </Link>
                </p>
            </div>

        </main>
    );
};

export default Home;