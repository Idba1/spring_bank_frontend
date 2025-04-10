import React from 'react'
import Banner from '../Banner/Banner'
import Needs from '../Needs/Needs'
import Slider from '../Slider/Slider'
import Blog from '../Blog/Blog'
import LockerFacility from '../LockerFacility/LockerFacility'
import LoanCalculator from '../LoanCalculator/LoanCalculator'
import CreditCardSection from '../CreditCardSection/CreditCardSection'
import CustomBankingSection from '../CustomBankingSection/CustomBankingSection'
import StatisticsCard from '../StatisticsCard/StatisticsCard'
import FAQHome from '../../FAQSection/FAQHome'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='container mx-auto'>
                <Needs />
                <Slider />
                <CustomBankingSection />
                <StatisticsCard />
                <LoanCalculator />
                <CreditCardSection />
                <LockerFacility />
                <FAQHome />
                <Blog />
            </div>
        </div>
    )
}

export default Home
