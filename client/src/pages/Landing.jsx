import React from 'react';
import { Link } from 'react-router-dom';

function Landing(props) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex items-center justify-between py-6 px-10 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg z-10 relative">
                <div className="text-2xl font-bold text-white tracking-wide">Appointment Manager</div>
                <nav>
                    <ul className="flex space-x-8 text-white font-medium">
                        <li>
                            <Link to="/home" className="hover:text-yellow-300 transition-colors cursor-pointer">Home</Link>
                        </li>
                        <li>
                            <Link to="/Login" className="hover:text-yellow-300 transition-colors cursor-pointer">Login</Link>
                        </li>
                        <li>
                            <Link to="/sign-up" className="hover:text-yellow-300 transition-colors cursor-pointer">Signup</Link>
                        </li>
                        <li>
                            <Link to="/developer" className="hover:text-yellow-300 transition-colors cursor-pointer">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex-1 relative">
                {/* Background image */}
                <img
                    src="https://i.ytimg.com/vi/ogt19AkfJlQ/maxresdefault.jpg"
                    alt="Appointments"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
                    style={{ zIndex: 0 }}
                />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-10 py-16 h-full">
                    {/* Animation Left */}
                    <div className="md:w-1/2 flex justify-center items-center h-full mb-10 md:mb-0">
                        <img
                            src="https://cdn.dribbble.com/users/1434281/screenshots/6730784/illustration.gif"
                            alt="Appointment Illustration"
                            className="w-80 h-80 object-contain animate-float bg-white rounded-xl shadow-lg"
                        />
                    </div>
                    {/* Description Right */}
                    <div className="md:w-1/2 flex flex-col items-center md:items-start">
                        <div className="flex items-center justify-center mb-6 w-full">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
                                alt="Timer Left"
                                className="w-16 h-16 mr-4 animate-float"
                            />
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 animate-fade-in-down text-center">
                                Simplify Your Appointments
                            </h1>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
                                alt="Timer Right"
                                className="w-16 h-16 ml-4 animate-float"
                            />
                        </div>
                        <p className="text-lg text-black mb-8 animate-fade-in text-center md:text-left">
                            <strong> Revolutionize your practice with our smart Doctor Appointment Management System! Effortlessly schedule, track, and manage patient visits with a sleek, intuitive dashboard. From real-time availability to automated reminders and calendar sync, everything you need is just a click away. Whether you run a clinic or a hospital, our platform helps you stay organized, reduce no-shows, and deliver better care—without the hassle. Focus on healing, while we take care of the scheduling!</strong>
                        </p>
                        <Link
                            to="/Home"
                            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition-colors animate-bounce"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </main>
            <footer className="py-6 px-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center z-10 relative">
                &copy; {new Date().getFullYear()} Appointment Manager. All rights reserved.
            </footer>
            <style>
            {`
            @keyframes fade-in-down {
                0% { opacity: 0; transform: translateY(-20px);}
                100% { opacity: 1; transform: translateY(0);}
            }
            @keyframes fade-in {
                0% { opacity: 0;}
                100% { opacity: 1;}
            }
            @keyframes float {
                0%, 100% { transform: translateY(0);}
                50% { transform: translateY(-15px);}
            }
            .animate-fade-in-down { animation: fade-in-down 1s ease; }
            .animate-fade-in { animation: fade-in 2s ease; }
            .animate-float { animation: float 3s ease-in-out infinite; }
            `}
            </style>
        </div>
    );
}

export default Landing;