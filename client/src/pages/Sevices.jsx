import React from 'react';
import { Link } from 'react-router-dom';

function Sevices(props) {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-100 to-white">
            <header className="flex items-center justify-between py-6 px-10 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg z-10 relative animate-fade-in-down">
                <div className="text-2xl font-bold text-white tracking-wide">Appointment Manager</div>
                <nav>
                    <ul className="flex space-x-8 text-white font-medium">
                        <li>
                            <Link to="/home" className="hover:text-yellow-300 transition-colors cursor-pointer">Home</Link>
                        </li>
                        <li>
                            <Link to="/developer" className="hover:text-yellow-300 transition-colors cursor-pointer">Contact</Link>
                        </li>
                        <li>
                            <Link to="/landing" className="hover:text-yellow-300 transition-colors cursor-pointer">LogOut</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <h2 className="text-2xl font-bold mb-6 text-center mt-8 text-indigo-700 animate-fade-in-up">Book your Specialists</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 md:px-10 mb-10">
                {[
                    { name: "General Medicine",img: "https://img.icons8.com/color/96/000000/stethoscope.png" },
                    { name: "Pediatrics",img: "https://img.icons8.com/color/96/000000/baby.png" },
                    { name: "Dermatology",img: "https://img.icons8.com/color/96/000000/skin-care.png" },
                    { name: "Cardiology",img: "https://img.icons8.com/color/96/000000/heart-with-pulse.png" },
                    { name: "Neurology",img: "https://img.icons8.com/color/96/000000/brain.png" },
                    { name: "Oncology", img: "https://img.icons8.com/color/96/000000/ribbon.png" },
                    { name: "Orthopedic",img: "https://img.icons8.com/color/96/000000/bone.png" },
                    { name: "Gastroenterology",img: "https://img.icons8.com/color/96/000000/stomach.png" },
                    { name: "Nephrology & Urology",img: "https://img.icons8.com/color/96/000000/kidney.png" },
                    { name: "Pulmonology",img: "https://img.icons8.com/color/96/000000/lungs.png" },
                    { name: "Gynecology",img: "https://img.icons8.com/color/96/000000/pregnant-woman.png" },
                    { name: "Radiology",img: "https://img.icons8.com/color/96/000000/x-ray.png" },
                    { name: "Physiotherapy", img: "https://img.icons8.com/color/96/000000/physiotherapy.png" },
                    { name: "Psychology", img: "https://img.icons8.com/color/96/000000/psychology.png" },
                    { name: "Vaccination", img: "https://img.icons8.com/color/96/000000/syringe.png" },
                    { name: "Dental", img: "https://img.icons8.com/color/96/000000/tooth.png" },
                    { name: "Ophthalmology",img: "https://img.icons8.com/color/96/000000/eye.png" },
                    { name: "Pathology", img: "https://img.icons8.com/color/96/000000/microscope.png" },
                    { name: "Rehabilitation", img: "https://img.icons8.com/color/96/000000/test-tube.png" },
                    { name: "Tricologist", img: "https://img.icons8.com/color/96/000000/hair.png" },
                ].map((spec, idx) => (
                    <Link
                        key={spec.name}
                        to="/general"
                        className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform animate-fade-in cursor-pointer"
                        style={{ animationDelay: `${idx * 60}ms` }}
                        onClick={() => handleSpecialistClick(spec.name)}
                    >
                        <img src={spec.img} alt={spec.name} className="w-16 h-16 mb-2 drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-center text-sm font-semibold text-indigo-800">{spec.name}</span>
                    </Link>
                ))}
            </div>
            <footer className="mt-auto py-6 px-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center z-10 relative animate-fade-in-up">
                &copy; {new Date().getFullYear()} Appointment Manager. All rights reserved.
            </footer>
            {/* Tailwind custom animation classes */}
            <style>
                {`
                @keyframes fade-in {
                    0% { opacity: 0; transform: translateY(20px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in {
                    animation: fade-in 0.7s both;
                }
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(40px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s both;
                }
                @keyframes fade-in-down {
                    0% { opacity: 0; transform: translateY(-40px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in-down {
                    animation: fade-in-down 1s both;
                }
                `}
            </style>
        </div>
    );
}

export default Sevices;