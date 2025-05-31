import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-white to-purple-200 relative overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-purple-300 opacity-30 rounded-full blur-3xl animate-bgblob1 pointer-events-none"></div>
            <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] bg-blue-300 opacity-30 rounded-full blur-3xl animate-bgblob2 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[40rem] max-h-[40rem] bg-gradient-to-tr from-blue-200 via-purple-200 to-white opacity-20 rounded-full blur-[120px] animate-bgblob3 pointer-events-none"></div>
            <div className="flex flex-col items-center bg-white/90 rounded-3xl shadow-2xl px-12 py-14 backdrop-blur-lg border border-blue-300 relative overflow-hidden z-10">
                {/* Animated Timer */}
                <div className="mb-8 relative">
                    <svg
                        className="w-28 h-28 animate-spin-timer drop-shadow-lg"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="timer-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6366f1" />
                                <stop offset="1" stopColor="#a78bfa" />
                            </linearGradient>
                        </defs>
                        <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="#c7d2fe"
                            strokeWidth="7"
                            opacity="0.3"
                        />
                        <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="url(#timer-gradient)"
                            strokeWidth="7"
                            strokeDasharray="60 100"
                            strokeLinecap="round"
                            className="timer-progress"
                        />
                        <rect x="29" y="8" width="6" height="16" rx="3" fill="#6366f1" />
                        <circle cx="32" cy="32" r="7" fill="url(#timer-gradient)" />
                    </svg>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full blur-2xl opacity-40 bg-gradient-to-tr from-blue-400 via-purple-400 to-purple-300 animate-pulse-timer"></div>
                </div>
                <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 mb-4 animate-fade-in drop-shadow-lg">404</h1>
                <p className="text-2xl text-gray-700 mb-10 animate-fade-in delay-200 text-center max-w-md font-medium">
                    Oops! The page you're looking for doesn't exist.<br />
                    Maybe you lost track of time.
                </p>
                <Link
                    tof="/"
                    className="px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 animate-fade-in delay-400 font-semibold text-lg tracking-wide ring-2 ring-blue-200 hover:ring-purple-300"
                >
                    Back to Home
                </Link>
                {/* Decorative floating blobs */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-300 opacity-30 rounded-full blur-2xl animate-blob1"></div>
                <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-blue-300 opacity-30 rounded-full blur-2xl animate-blob2"></div>
                <style>
                    {`
                        @keyframes fade-in {
                            from { opacity: 0; transform: translateY(20px);}
                            to { opacity: 1; transform: translateY(0);}
                        }
                        .animate-fade-in {
                            animation: fade-in 0.8s ease forwards;
                            opacity: 0;
                        }
                        .animate-fade-in.delay-200 {
                            animation-delay: 0.2s;
                        }
                        .animate-fade-in.delay-400 {
                            animation-delay: 0.4s;
                        }
                        @keyframes spin-timer {
                            0% { transform: rotate(0deg);}
                            100% { transform: rotate(360deg);}
                        }
                        .animate-spin-timer {
                            animation: spin-timer 2s linear infinite;
                            display: inline-block;
                        }
                        .timer-progress {
                            stroke-dasharray: 60 100;
                            stroke-dashoffset: 0;
                            transition: stroke-dashoffset 0.5s;
                        }
                        @keyframes pulse-timer {
                            0%, 100% { opacity: 0.4; }
                            50% { opacity: 0.7; }
                        }
                        .animate-pulse-timer {
                            animation: pulse-timer 2s infinite;
                        }
                        @keyframes blob1 {
                            0%, 100% { transform: translateY(0) scale(1);}
                            50% { transform: translateY(-20px) scale(1.1);}
                        }
                        .animate-blob1 {
                            animation: blob1 6s ease-in-out infinite;
                        }
                        @keyframes blob2 {
                            0%, 100% { transform: translateY(0) scale(1);}
                            50% { transform: translateY(20px) scale(1.08);}
                        }
                        .animate-blob2 {
                            animation: blob2 7s ease-in-out infinite;
                        }
                        /* Animated background blobs */
                        @keyframes bgblob1 {
                            0%,100% { transform: scale(1) translateY(0);}
                            50% { transform: scale(1.08) translateY(-40px);}
                        }
                        .animate-bgblob1 {
                            animation: bgblob1 12s ease-in-out infinite;
                        }
                        @keyframes bgblob2 {
                            0%,100% { transform: scale(1) translateY(0);}
                            50% { transform: scale(1.12) translateY(40px);}
                        }
                        .animate-bgblob2 {
                            animation: bgblob2 14s ease-in-out infinite;
                        }
                        @keyframes bgblob3 {
                            0%,100% { transform: scale(1);}
                            50% { transform: scale(1.04);}
                        }
                        .animate-bgblob3 {
                            animation: bgblob3 18s ease-in-out infinite;
                        }
                    `}
                </style>
            </div>
        </div>
    );
}

export default NotFound;