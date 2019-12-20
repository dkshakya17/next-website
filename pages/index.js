import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Container from 'react-bootstrap/Container';
import '../styles/custom-theme.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Banner = () => (
  <>
   <Header/>
  <section className="hero_section">
    <Container>
      <Row>
        <Col md={6} xs={12}>
        <div className="banner_cont">
        <h1 className="banner_head">
        A Complete Payments Toolkit for India
        </h1>
        <p>The fastest and easiest way to collect and disburse payments for growing businesses</p>
        </div>
        <ButtonToolbar>
        <Button variant="outline-light mr-3">Create Account</Button>
        <Button variant="primary">Contact Sales</Button>
       </ButtonToolbar>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={12}>
        <div className="banner_slide">

        </div>
        </Col>
      </Row>
     
    </Container>
    {/* <style jsx>{`
            .banner_cont{
                margin:200px 0;
            }
        `}</style> */}
  </section>
  </>
)

const Products = () => (
  <section className="page_section">
    <Container>
      <div className="text-center">
      <h1>
      welcome to cashfree
      </h1>
      <ButtonToolbar>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="outline-light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </ButtonToolbar>
      </div>
    </Container>
  </section>
)


const Home = () => (
<>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800|Open+Sans:300,400,600,700,800&display=swap" rel="stylesheet"></link>
    </Head>
     <Banner/>
     
     <Products/>
     <Footer/>
     <style jsx>{`
            .bootom_footer{
                margin-right:20px;
            }
        `}</style>
  </>
)

export default Home
