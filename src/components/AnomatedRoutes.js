import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import Bestsellers from './Bestsellers/Bestsellers';
import FavoritePage from './FavoritePage/FavoritePage';
import { AnimatePresence } from "framer-motion";

function AnomatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<SearchBar/>} />
                <Route path="/favorites" element={<FavoritePage/>} />
                <Route path="/bestsellers" element={<Bestsellers/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnomatedRoutes

