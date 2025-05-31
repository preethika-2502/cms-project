import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/Authcontext';// 🔥 Import navigate
import React, { useState, useContext } from 'react';

export default function Signup(props) {
    const navigate = useNavigate(); // 🔥 Hook for navigation
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { register } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        register(email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 relative overflow-hidden">
            {/* Animated background image */}
            <img
                src="https://engageware.com/wp-content/uploads/2023/02/Purpose-of-appointment-system.jpg"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover opacity-80 animate-bg-float pointer-events-none"
            />
            <style>
                {`
                @keyframes bg-float {
                    0% { transform: scale(1) translateY(0); }
                    50% { transform: scale(1.05) translateY(-10px); }
                    100% { transform: scale(1) translateY(0); }
                }
                .animate-bg-float {
                    animation: bg-float 8s ease-in-out infinite;
                }
                `}
            </style>
            <div className="relative z-10 bg-white bg-opacity-90 rounded-xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center justify-center">
                {/* User Logo */}
                <div className="mb-6 flex justify-center w-full">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">Create Your Account</h2>
                <p className="text-blue-500 mb-6 text-center">Sign up to manage your appointments efficiently</p>
                <form className="w-full space-y-4 flex flex-col items-center" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <label className="block text-blue-700 font-semibold mb-1" htmlFor="name">Name</label>
                        <input
                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-blue-700 font-semibold mb-1" htmlFor="email">Email</label>
                        <input
                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-blue-700 font-semibold mb-1" htmlFor="password">Password</label>
                        <input
                            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-sm text-blue-600 text-center">Already have an account? <a href="/login" className="underline font-semibold">Login</a></p>
            </div>
        </div>
    );
}
