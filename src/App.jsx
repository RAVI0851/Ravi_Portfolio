import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/thankyou' element={<ThankYou/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
