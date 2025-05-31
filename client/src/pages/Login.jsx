import { useState, useContext } from 'react';
import AuthContext from "../context/Authcontext";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    function handleSubmit(event) {
        event.preventDefault();
        login(email, password);
    }



    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200">
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
            <div className="relative z-10 bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md animate-fade-in-up border border-white/30">
                <div className="flex justify-center mb-6">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="User Login"
                        className="w-20 h-20 rounded-full shadow-lg border-4 border-white animate-fade-in"
                    />
                </div>
                <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6 animate-bounce">
                    Appointment Manager Login
                </h2>

                <form className="space-y-5 text-center" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 mb-1 text-center" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-center"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1 text-center" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-center"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition transform hover:-translate-y-1"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-500 text-sm animate-fade-in">
                    &copy; {new Date().getFullYear()} Appointment Management System
                </p>
            </div>
            <style>
                {`
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .animate-fade-in {
                    animation: fade-in 1.2s ease;
                }
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                `}
            </style>
        </div>
    );
}