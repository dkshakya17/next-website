import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from 'react-bootstrap/Container';
import '../../styles/custom-theme.scss'

const Banner = () => (
  <section className="hero_section">
    <Container>
      <div className="career">
      <h1 className="banner_head white">
      welcome to Cashfree Pricing
      </h1>
      </div>
    </Container>
  </section>
)

const NachMandate = () => (
  <div>
    <Head>
      <title>Pricing</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800|Open+Sans:300,400,600,700,800&display=swap" rel="stylesheet"></link>
    </Head>
     <Header/>
     <Banner/>
     <Footer/>


  </div>
)

export default NachMandate
