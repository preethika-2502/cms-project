import React from 'react';

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Decorative background image */}
            <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                alt="Appointments"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-60 pointer-events-none "
            />
            <div className="relative z-10 bg-white/90 rounded-3xl shadow-2xl p-10 max-w-lg w-full animate-fade-in-up">
                <div className="flex flex-col items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                        alt="Calendar"
                        className="w-20 h-20 mb-4 animate-fade-in"
                    />
                    <h1 className="text-4xl font-bold text-blue-700 mb-2 text-center animate-bounce">
                        Appointment Manager
                    </h1>
                    <p className="text-gray-600 text-center mb-6 animate-fade-in delay-100">
                        Effortlessly schedule, view, and manage your appointments.<br />
                        Secure, fast, and user-friendly platform for all your scheduling needs.
                    </p>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <a
                        href="/login"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md animate-fade-in delay-200 text-center"
                    >
                        Sign In
                    </a>
                    <a
                        href="/sign-up"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md animate-fade-in delay-200 text-center"
                    >
                        Sign Up
                    </a>
                    <a
                        href="/landing"
                        className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md animate-fade-in delay-200 text-center text-xs"
                    >
                        Back
                    </a>
                </div>
                <div className="mt-8 text-sm text-gray-500 text-center animate-fade-in delay-400">
                    <span>
                        <strong>Features:</strong> Appointment booking, reminders, calendar integration, and more.
                    </span>
                </div>
            </div>
            {/* Animations using Tailwind CSS custom classes */}
            <style>
                {`
                .animate-fade-in-up {
                    animation: fadeInUp 1s ease;
                }
                .animate-fade-in {
                    animation: fadeIn 1.2s ease;
                }
                .animate-fade-in.delay-100 {
                    animation-delay: 0.1s;
                }
                .animate-fade-in.delay-200 {
                    animation-delay: 0.2s;
                }
                .animate-fade-in.delay-300 {
                    animation-delay: 0.3s;
                }
                .animate-fade-in.delay-400 {
                    animation-delay: 0.4s;
                }
                .animate-bounce {
                    animation: bounce 1s infinite alternate;
                }
                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes bounce {
                    0% { transform: translateY(0);}
                    100% { transform: translateY(-10px);}
                }
                `}
            </style>
        </div>
    );
}

export default Home;