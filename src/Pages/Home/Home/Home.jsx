import React from 'react'
import Banner from '../Banner/Banner'
import Needs from '../Needs/Needs'
import Slider from '../Slider/Slider'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <Needs />
            <Slider />
        </div>
    )
}

export default Home
