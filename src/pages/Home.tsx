import React from 'react'
import Banner from '../components/landing/Banner'
import ChosenQuestions from '../components/landing/ChosenQuestions'
import SvgIcon from '../components/landing/SvgIcon'
import PremiumMembers from '../components/landing/PremiumMembers'
import Statistics from '../components/landing/Statistics'

export default function Home() {
    return (
        <>
            <Banner/>
            <SvgIcon/>
            <ChosenQuestions/>
            <PremiumMembers/>
            <Statistics/>
        </>
    )
}
