import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroDescr from './components/HeroDescr'
import Detaily from './components/Detaily'
import Specification from './components/Specification'
import Motor from './components/Motor'
import Sizes from './components/Sizes'
import Geometria from './components/Geometria'
import Technologies from './components/Technologies'
import DhBike from './components/DhBike'



const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <HeroDescr />
            <Detaily />
            <Specification />
            <Motor />
            <Sizes />
            <Geometria />
            <Technologies />
            <DhBike/>

        </>
    )
}


export default App
