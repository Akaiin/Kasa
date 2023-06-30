import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Lodging from './pages/Lodging'
import Error from './pages/404'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/lodging/:id" element={<Lodging />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
