import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroDescr from './components/HeroDescr'
import Detaily from './components/Detaily'
import Specification from './components/Specification'
import Motor from './components/Motor'



const App = () => {
    return (
        <div >
            <Navbar />
            <Hero />
            <HeroDescr />
            <Detaily />
            <Specification />
            <Motor />

        </div>
    )
}


export default App
