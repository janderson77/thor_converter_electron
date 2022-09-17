import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import NoPage from './components/NoPage';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    )
};

export default AppRoutes