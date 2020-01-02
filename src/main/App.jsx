import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import React from 'react'

import { HashRouter } from 'react-router-dom'

import Routers from './Routers'

import Logo from '../componentes/templates/Logo'
import Nav from '../componentes/templates/Nav'
import Footer from '../componentes/templates/Footer'

import User from '../componentes/user/User'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routers />
            <Footer />
        </div>
    </HashRouter>
