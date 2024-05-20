import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Homepage/Home';
import Details from './components/Detailspage/Details';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />}></Route>
                <Route path="/home" element={<Home />} />
                <Route path="/details/:id" element={<Details/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;