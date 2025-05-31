import React from 'react';

function Developer(props) {
    return (
        <div
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div className="flex flex-col items-center justify-center min-w-[50vw] min-h-[30vh] bg-white/80 backdrop-blur-md rounded-2xl m-8 shadow-2xl p-5 border-2 border-blue-200">
                <img
                    src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                    alt="Developer Animation"
                    className="w-48 h-48 rounded-full shadow-lg mb-6 border-4 border-blue-300 object-cover"
                />
                <h1 className="text-4xl font-extrabold text-blue-800 mb-2 drop-shadow-lg">Hello, We're the Developers!</h1>
                <p className="text-lg text-gray-700 mb-6 text-center max-w-xl font-medium">
                    Welcome to the Appointment Management System. We designed and built this platform to help you manage your appointments efficiently and effortlessly.
                </p>
                {/* Profile Details */}
                <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 rounded-xl shadow-lg p-8 mb-8 w-full max-w-2xl border border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Team Profile</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Preethika */}
                        <div className="bg-white/80 rounded-lg p-4 shadow border border-blue-100 flex flex-col items-center">
                            <span className="font-semibold text-blue-800">Preethika R</span>
                            <span className="text-blue-700 text-sm">Biomedical Engineering</span>
                            <span className="text-gray-700 text-xs">Reg. No: 22bebme045</span>
                        </div>
                        {/* Divya */}
                        <div className="bg-white/80 rounded-lg p-4 shadow border border-blue-100 flex flex-col items-center">
                            <span className="font-semibold text-blue-800">Divya R</span>
                            <span className="text-blue-700 text-sm">Biomedical Engineering</span>
                            <span className="text-gray-700 text-xs">Reg. No: 22bebme015</span>
                        </div>
                        {/* Harini */}
                        <div className="bg-white/80 rounded-lg p-4 shadow border border-blue-100 flex flex-col items-center">
                            <span className="font-semibold text-blue-800">Harini R</span>
                            <span className="text-blue-700 text-sm">Biomedical Engineering</span>
                            <span className="text-gray-700 text-xs">Reg. No: 22Bebme022</span>
                        </div>
                    </div>
                </div>
                {/* Lottie animation placeholder */}
                <div className="justify-center">
                    <img
                        src="https://assets10.lottiefiles.com/packages/lf20_kkflmtur.json"
                        alt="Coding Animation"
                        className="w-full h-full"
                        style={{ pointerEvents: 'none', display: 'none' }}
                        onError={e => { e.target.style.display = 'none'; }}
                    />
                </div>
                <div className="flex space-x-6 mt-1">
                    <a
                        href="https://github.com/preethika-2502"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition font-semibold shadow"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:preethikaraju711@gmail.com"
                        className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition font-semibold shadow"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Developer;