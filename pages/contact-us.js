import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Link from 'next/link'
import '../styles/custom-theme.scss'

const Banner = () => (
  <section className="hero_section">
    <Container>
      <Row>
        <Col md={6} xs={12}>
        <div className="banner_cont">
        <h1 className="banner_head white">
          Domestic & International Payment Gateway for India.
        </h1>
        <p>Accept domestic and international payments with 100+ payment options. Choose from a range of integrations to give best checkout experience to your customers.</p>
        </div>
        <a onClick={() => Router.push('/contact-sales')} className="btn-primary">
                    Get Started
        </a>
       <style jsx>{`
            p{
              font-size: 1.37rem;
              font-weight: 500;
              padding: 24px 0;
              color:white;
            }
        `}</style>
        </Col>
        <Col md={6} xs={12}>
          <div className="banner_img">

          </div>
        </Col>

      </Row>
    </Container>
  </section>
)

const contact = () => (
  <div>
    <Head>
      <title>Careers</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800|Open+Sans:300,400,600,700,800&display=swap" rel="stylesheet"></link>
    </Head>
     <Header/>
     <Banner/>
     <Footer/>

  </div>
)

export default contact
