import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Movie from "../pages/Movie";


export default class NavRoutes extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/movie' element={<Movie />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={ <Contact/> }/>
                </Routes>
            </div>
        )
    }
}
