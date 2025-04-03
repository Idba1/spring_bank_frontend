import React from 'react'
import Banner from '../Banner/Banner'
import Needs from '../Needs/Needs'
import Slider from '../Slider/Slider'
import Blog from '../Blog/Blog'
import FAQSection from '../../FAQSection/FAQSection'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <Needs />
            <Slider />
            <FAQSection />
            <Blog />
        </div>
    )
}

export default Home
