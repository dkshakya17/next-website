import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import CtaSection from '../components/CtaSection'
import Image from 'react-bootstrap/Image'
import PayoutsFaqs from '../components/faqs/PayoutsFaqs'
import Link from 'next/link'
import Tabs from 'react-bootstrap/Tabs'
import CaseStudy from '../components/CaseStudy'
import Tab from 'react-bootstrap/Tab'
import { NextSeo } from 'next-seo'
import '../styles/custom-theme.scss'

const Banner = () => (
  <section className="hero_section">
    <Container>
      <Row>
        <Col md={6} xs={12} className="center_content">
        <div className="banner_cont w-100">
        <h1 className="banner_head white">
        Payouts simplify
        </h1>
        <h3 className="text_rotator yellow position-relative"><b className="one">Vendor Payments</b>
        <b className="two">Ecommerce Refunds</b> 
        <b className="three">Loan Disbursal</b>
        <b className="four">Wage Payments</b></h3>
        </div>
        <a onClick={() => Router.push('/contact-sales')} className="btn-primary">
                    Get Started
        </a>
        </Col>
        
      </Row>
    </Container>
  </section>
)


const BannerLogo = () => (
    <section className="page_section primary_bg">
    <Container>
    <Row>
        <Col md={8} xs={12} className="m-auto">
        <div class="finserv">
                <div class="service-item white">
                    <p>Send money via:</p>
                </div>
                <div class="service-item">                    
                    <div class="service-logos">
                        <div class="logos">
                            <img src="/images/payouts/logos/upi.png" class="img-responsive" alt="UPI API"/>
                        </div>
                        <div class="logos">
                            <img src="/images/payouts/logos/imps.png" class="img-responsive" alt="IMPS API"/>
                        </div>
                        <div class="logos">
                            <img src="/images/payouts/logos/visa.png" class="img-responsive" alt="RBL API"/>
                        </div>
                        <div class="logos">
                            <img src="/images/payouts/logos/mc.png" class="img-responsive" alt="API Banking"/>
                        </div>
                        <div class="logos">
                            <img src="/images/payouts/logos/paytm.png" class="img-responsive" alt="PAYTM API"/>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
  
const IntroSection = () => (
    <section className="page_section light_bg">
    <Container>
  
      <Row>
        <Col md={7}  sm={7} xs={12}>
        <div className=" w-100 mt-5">
        <h2 className="yellow">Introducing Payouts Direct</h2>
         <h3 className="blue mb-3">
        Instant, automated payouts  <b className="green"> directly </b> 
         from your Bank Account </h3>
        </div>
        <a onClick={() => Router.push('/contact-sales')} className="btn-primary">
                    Get Started
        </a>
        </Col>
        <Col md={5}  sm={5} xs={12}>
        <div className="intro_gif w-100">
            <Image src="/images/payouts/bankdispursel.gif"  fluid/>
        </div>
        </Col>
      </Row>
    </Container>
  </section>
  )

  const PayoutsFeatures = () => <section className="page_section">
  <Container>
    <Row>
      <Col md={12} xs={12}>
      <div className="text-center">
      <h1 className="page_head">
      Payouts just the way you wanted
      </h1>
      </div>
      </Col>
    </Row>

    <Row>
      <Col md={4}  sm={4} xs={12}>
      <div className="main_product payout_feature w-100">
      <Image src="/images/payouts/payouts.svg" fluid/>
      <h3 className="tile_head">More than just bank transfers</h3>
      <p>Send payouts to any UPI-BHIM ID, PayTM wallet or debit card. Verify bank accounts in real time.</p>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="main_product payout_feature w-100">
      <Image src="/images/payouts/calendar.svg" fluid/>
      <h3 className="tile_head">Works on holidays</h3>
      <p>Payouts work 24x7. Money moves even when banks don't.</p>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="main_product payout_feature w-100">
      <Image src="/images/payouts/uploads.svg" fluid/>
      <h3 className="tile_head">Simpler file uploads than banks</h3>
      <p>Move ahead of file upload errors. Bulk payouts are easy now.</p>
      </div>
      </Col>
    
    </Row>
  </Container>
</section>;


const Cashgram = () => <section className="page_section mt-5 mb-5">
<Container>

  <Row>
    <Col md={6}  sm={6} xs={12}>
    <div className="cashgram_feature_img w-100 pr-3">
    <Image src="/images/payouts/cashgram.svg" fluid/>
    </div>
    </Col>
    <Col md={6}  sm={6} xs={12}>
    <div className="cashgram_feature w-100">
    <h3 className="tile_head">Send a Cashgram link to user. User enters bank account, UPI or PayTM and receives refund instantly.
Request Early Access</h3>
    <a onClick={() => Router.push('/cashgram-invite')}  className="btn-primary mt-3">Request Early Access</a>
    </div>
    </Col>
  
  </Row>
</Container>
</section>;

const CustomersLogo = () => (
    <section className="page_section pt-0">
    <Container>
      <Row>
        <Col md={3}  sm={3} xs={12}>
        <div className="logo_tile w-100">
        <Image src="/images/payouts/nykaa_logo.png"  fluid className="circle"/>
        <p>For Cash on delivery refunds</p>
        </div>
        </Col>
        <Col md={3}  sm={3} xs={12}>
        <div className="logo_tile w-100">
        <Image src="/images/payouts/signzy_logo.png"  fluid/>
        <p>For Bank Account validation</p>
        </div>
        </Col>
        <Col md={3}  sm={3} xs={12}>
        <div className="logo_tile w-100">
        <Image src="/images/payouts/rummycircle_logo.png"  fluid />
        <p>For Instant player cashouts</p>
        </div>
        </Col>
        <Col md={3}  sm={3} xs={12}>
        <div className="logo_tile w-100">
        <Image src="/images/payouts/milaap_logo.png"  fluid />
        <p>For Marketplace vendor payouts</p>
        </div>
        </Col>
      </Row>
    </Container>
  </section>
  )


function TestimonialSection() {  
    return (
    <section className="page_section">
        <Container>
        <Row className="m-0">
          <Col md={12} xs={12} className="p-0">
          <h2 className="page_head text-center">
          Case Studies
          </h2>
           <CaseStudy />
            </Col>
          </Row>
        </Container>
      </section>
    );
  
  }


const Businesses = () => <section className="page_section mt-5 mb-5">
<Container>
    <Row>
        <Col md={12} xs={12}>
        <div className="text-center">
        <h1 className="page_head">
        Advanced API Banking platform <br/> Loved by Businesses of all Sizes
        </h1>
      </div>
      </Col>
    </Row>
  <Row>
    <Col md={6}  sm={6} xs={12}>
      <div className="main_product w-100">
      <iframe id="cashgram-video" width="100%" height="315px" src="https://www.youtube.com/embed/SA4H5UAhzCQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </Col>
    <Col md={6}  sm={6} xs={12} className="center_content">
        <div className="cashgram_feature w-100">
        <h3 className="tile_head">Send a Cashgram link to user. User enters bank account, UPI or PayTM and receives refund instantly. Request Early Access</h3>
        <a onClick={() => Router.push('/cashgram-invite')}  className="btn-primary mt-3">Request Early Access</a>
        </div>
    </Col>
  </Row>
</Container>
</section>;

const IntegrationTabs = () => (
  <section className="page_section light_bg">
    <Container fluid>
    <Row>
      <Col md={4} xs={12} className="d-flex align-items-center  justify-content-center">
      <div className="text-center">
      <h1 className="page_head">
      Do mass payments using
      </h1>
      </div>
      </Col>
      <Col md={8} xs={12}>
        <div className="intigration_tabs">
          <Tabs defaultActiveKey="api" id="uncontrolled-tab-example">
            <Tab eventKey="api" title="API">
                <div className="cashfree-block">
                  <div className="row cashfree-block-padding">
                      <div className="col-md-6">
                          <div className="single">
                          <h3>View API docs</h3>
                          <p className="cashgram-tab-text">
                          Explore everything you can do with the powerful API and how to get started.</p>
                          </div>
                          <div className="single">
                          <h3>Test your Payouts API integration</h3>
                              <p className="cashgram-tab-text">Use the Cashfree sandbox to complete an end-to-end test of your integration, including positive and negative test scenarios.</p>
                          </div>
                          <div className="single">
                          <h3>Use Payouts to verify bank accounts</h3>
                              <p className="cashgram-tab-text">Use the Payouts API to pass account number and IFSC. Cashfree confirms if the account exists and returns the name of the account holder at the bank.</p>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="single">
                          <h3>Kits to make integration a breeze</h3>
                              <p className="cashgram-tab-text">Visit our Payout Github page to integrate in PHP, Python, Java, NodeJS, .NET, Ruby.</p>
                          </div>
                          <div className="single">
                          <h3>Webhooks</h3>
                              <p className="cashgram-tab-text">Get notified when a payout related event occurs.</p>
                          </div>
                      </div>
                  </div>
                </div>
            </Tab>
          
            <Tab eventKey="dashboard" title="Dashboard">
              
              <div className="cashfree-block">
                    <div className="row cashfree-block-padding">
                        <div className="col-md-6">
                            <div className="single">
                            <h3>
                            Making single Payout transfers from dashboard
                            </h3>
                            <p className="cashgram-tab-text">
                            Add beneficiaries instantly and make a payment.
                            </p>
                            </div>
                           
                        </div>
                        <div className="col-md-6">
                            <div className="single">
                            <h3>
                            Making bulk transfers by uploading a file
                            </h3>
                                <p className="cashgram-tab-text">Create a payout file and upload it using the Merchant dashboard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Tab>
          </Tabs>
        </div>
      </Col>
    </Row>
    </Container>
</section>
)


const Faqs = () => <section className="page_section">
    <Container>
      <Row>
        <Col md={8} xs={12} className="m-auto">
        <div className="text-center">
        <h2 className="page_head">
        Payment Gateway Integration FAQs
        </h2>
        </div>
        </Col>
      </Row>
      <Row>
        <Col md={8} xs={12} className="m-auto">
        <div className="faqs">
        <PayoutsFaqs/>
        </div>
        </Col>
      </Row>
    </Container>
  </section>;



const ProductCards = () => (
  <section className="page_section light_bg">
  <Container>

    <Row>
      <Col md={4}  sm={4} xs={12}>
      <div className=" w-100 mt-5">
       <h4 className="blue">Link Payouts to Cashfree's Payment Collection products</h4>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="link_card w-100">
        <div className="link-payment-item">
          <Image src="/images/productcard1.svg"  fluid/>
          <p><b>Payment Gateway</b> - Accept local and international payments from 100 payment modes and disburse using Payouts</p>
        </div>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="link_card w-100">
        <div className="link-payment-item">
          <Image src="/images/productcard2.svg"  fluid/>
          <p><b>Auto Collect</b> - Accept payments directly via NEFT, IMPS, RTGS and UPI and disburse using Payouts</p>        </div>
      </div>
      </Col>
    </Row>
  </Container>
</section>
)

const Payouts = () => (
  <div>
     <NextSeo
      title="Payouts - IMPS, NEFT money transfer API for banking in India"
      keywords="payment gateway india,best payment gateway,best payment gateway india,payment gateway integration,payment gateway integration India,international payment gateway"
      description="Payouts allows a business to disburse bulk payments instantly to any bank account, UPI ID, card and PayTM wallet"
      />
     <Header/>
     <Banner/>
     <BannerLogo/>
     <IntroSection/>
     <PayoutsFeatures/>
     <Cashgram/>
     <TestimonialSection/>
     <CustomersLogo/>
     <Businesses/>
     <IntegrationTabs/>
     <Faqs/>
     <CtaSection/>
     <ProductCards/>
     <Footer/>
  </div>
)

export default Payouts
