import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroDescr from './components/HeroDescr'
import Detaily from './components/Detaily'
import Specification from './components/Specification'
import Motor from './components/Motor'
import Sizes from './components/Sizes'



const App = () => {
    return (
        <div >
            <Navbar />
            <Hero />
            <HeroDescr />
            <Detaily />
            <Specification />
            <Motor />
            <Sizes />

        </div>
    )
}


export default App
