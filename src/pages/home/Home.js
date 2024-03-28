import React from 'react'

import { Header } from '../../components/header/Header'
import { FeatureBar } from '../../components/featureBar/FeatureBar'
import { InfoCards } from '../../components/infoCards/InfoCards'
import { MainAd } from '../../components/mainAd/MainAd'
import { ContactForm } from '../../components/contactForm/ContactForm'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {

    return (
        <>
            <Header />
            <MainAd />
            <section className='my-5'>
                <FeatureBar />
            </section>
            <section className='my-5'>
                <InfoCards />
            </section>
            <section className='mt-5'>
                <ContactForm />
            </section>
        </>
    )
}
