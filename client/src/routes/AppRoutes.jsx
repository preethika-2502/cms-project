import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Developer from '../pages/Developer';
import Landing from '../pages/Landing';
import Sevices from '../pages/Sevices';
import General from '../pages/General';
import Signup from '../pages/Signup';

function AppRoutes() {
    return (
       <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/developer" element={<Developer/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/services" element={<Sevices/>}/>
        <Route path="/general" element={<General/>}/>
       </Routes>
    );
}

export default AppRoutes;