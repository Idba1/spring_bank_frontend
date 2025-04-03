import React from 'react'
import Banner from '../Banner/Banner'
import Needs from '../Needs/Needs'
import Slider from '../Slider/Slider'
import Blog from '../Blog/Blog'
import FAQSection from '../../FAQSection/FAQSection'
import LockerFacility from '../LockerFacility/LockerFacility'
import LoanCalculator from '../LoanCalculator/LoanCalculator'
import CreditCardSection from '../CreditCardSection/CreditCardSection'
import CustomBankingSection from '../CustomBankingSection/CustomBankingSection'
import StatisticsCard from '../StatisticsCard/StatisticsCard'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <Needs />
            <Slider />
            <CustomBankingSection />
            <StatisticsCard />
            <LoanCalculator />
            <CreditCardSection />
            <LockerFacility />
            <FAQSection />
            <Blog />
        </div>
    )
}

export default Home
