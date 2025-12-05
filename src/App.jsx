import React, { useEffect, useState } from 'react'
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
import Navody from './components/Navody'
import Bicycle from './components/Bicycle'
import Doplinky from './components/Doplinky'
import Footer from './components/Footer'
import Preloader from './components/ui/Preloader'
import gsap from 'gsap'


import { ScrollTrigger } from 'gsap/ScrollTrigger' // ! ! !
import { SplitText } from 'gsap/all';              // ! ! !
gsap.registerPlugin(ScrollTrigger, SplitText);     // ! ! !



const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handlePageLoad = () => {
            setIsLoading(false);
            document.body.style.overflow = 'auto';
        };

        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, []);

    if (isLoading) return <Preloader />

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
            <Navody />
            <Bicycle />
            <Doplinky />
            <Footer />
        </>
    )
}


export default App
