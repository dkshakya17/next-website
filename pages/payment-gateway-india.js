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
import PgFaqs from '../components/faqs/PgFaqs'
import Link from 'next/link'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { NextSeo } from 'next-seo'
import '../styles/custom-theme.scss'

const Banner = () => (
  <section className="hero_section">
    <Container>
      <Row>
        <Col md={6} xs={12} className="center_content">
        <div className="banner_cont">
        <h1 className="banner_head white">
          Domestic & International Payment Gateway for India.
        </h1>
        <p>Accept domestic and international payments with 100+ payment options. Choose from a range of integrations to give best checkout experience to your customers.</p>
        </div>
        <a onClick={() => Router.push('/contact-sales')} className="btn-primary">
                    Get Started
        </a>
        </Col>
        <Col md={6} xs={12}>
          <div className="banner_img">
          <Image src="/images/pg/pgillustration.png"  fluid/>
          </div>
        </Col>

      </Row>
    </Container>
  </section>
)

const Pgcrads = () => (
  <section className="page_section">
  <Container>
    <Row>
      <Col md={12} xs={12}>
      <div className="text-center">
      <h1 className="page_head">
      Payment Gateway Built for India
      </h1>
      </div>
      </Col>
    </Row>

    <Row>
      <Col md={4}  sm={4} xs={12}>
      <div className="main_product w-100">
      <div className="card_img"><Image src="/images/pg/modes.png"  fluid/></div>
      <h3 className="tile_head">100+ Payment Options</h3>
      <p>Let your customers pay by any card, 70+ Netbanking options, UPI, Paytm & other wallets, EMI and Pay Later options.</p>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="main_product w-100">
      <div className="card_img"><Image src="/images/pg/faster.png"  fluid/></div>
      <h3 className="tile_head">Faster Settlements</h3>
      <p>Get paid next day or as soon as possible.</p>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="main_product w-100">
      <div className="card_img"><Image src="/images/pg/global.png"  fluid/></div>
      <h3 className="tile_head">Go Global</h3>
      <p>Reach customers across the world by unlocking international payment options instantly. Show items in 30+ foreign currencies.</p>
      </div>
      </Col>
    </Row>
  </Container>
</section>
)

const PgFeatures = () => (
  <section className="page_section">
  <Container>
    <Row>
      <Col md={12} xs={12}>
      <div className="text-center">
      <h1 className="page_head">
      Payment Gateway Enterprise Features<br/>
      <b className="green">Now Available for All</b>
      </h1>
      </div>
      </Col>
    </Row>

    <Row>
      <Col md={4}  sm={4} xs={12}>
      <div className="product_features w-100">
      <div className="card_img"><Image src="/images/pg/customization.png"  fluid/></div>
      <div className="feature_cont"><h3 className="tile_head">Your Website Your Checkout Page</h3>
      <p>Customize the checkout page to look like your website or application.</p></div>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="product_features w-100">
      <div className="card_img"><Image src="/images/pg/savedcards.png"  fluid/></div>
      <div className="feature_cont"><h3 className="tile_head">Saved Cards</h3>
      <p>Save customers from typing card credentials every time. Only CVV and 3-D secure password will be required during next transaction.</p></div>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="product_features w-100">
      <div className="card_img"><Image src="/images/pg/recurring.png"  fluid/></div>
      <div className="feature_cont"><h3 className="tile_head">Recurring Payments</h3>
      <p>Auto-debit funds for periodic payments via cards, UPI and net banking.</p></div>
      </div>
      </Col>
    </Row>
    <Row>
      <Col md={4}  sm={4} xs={12}>
      <div className="product_features w-100">
      <div className="card_img"><Image src="/images/pg/preauth.png"  fluid/></div>
      <div className="feature_cont"><h3 className="tile_head">Pre-authorization</h3>
      <p>Block funds when a customer places an order. If the order is modified or cancelled within a week, process instant refund without paying any charges.</p></div>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="product_features w-100">
      <div className="card_img"><Image src="/images/pg/successrate.png"  fluid/></div>
      <div className="feature_cont"><h3 className="tile_head">Higher than Industry Success Rate</h3>
      <p>With smart dynamic rerouting between multiple bank payment gateways, experience the highest success rate every time.</p></div>
      </div>
      </Col>
    </Row>
  </Container>
</section>
)

const Integration = () => (
  <section className="page_section light_bg">
  <Container>
    <Row>
      <Col md={12} xs={12}>
      <div className="text-center">
      <h1 className="page_head">
      Payment Gateway Integration
      </h1>
      </div>
      </Col>
    </Row>

    <Row>
      <Col md={12}  sm={12} xs={12}>
      <div className="main_product w-100">
      <iframe id="cashgram-video" width="100%" height="560px" src="https://www.youtube.com/embed/aKi6lJUymiU?controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      </Col>
    </Row>
  </Container>
</section>
)


const PaymentLink = () => (
  <section className="page_section">
  <Container>
    <Row>
      <Col md={12} xs={12}>
      <div className="text-center">
      <h1 className="page_head">
      Do more with Payment Links
      </h1>
      </div>
      </Col>
    </Row>

    <Row>
      <Col md={4}  sm={4} xs={12}>
      <div className="link_card w-100">
      <div className="card_img"><Image src="/images/pg/paymentform.png"  fluid/></div>
      <div className="feature_cont">
      <p><b>Payment Form </b>- A fixed link to share with everyone instead of your bank accoun</p></div>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="link_card w-100">
      <div className="card_img"><Image src="/images/pg/producthosting.png"  fluid/></div>
      <div className="feature_cont">
      <p><b>Product Hosting</b> - Create a webstore in minutes and start selling online.</p></div>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="link_card w-100">
      <div className="card_img"><Image src="/images/pg/invoice.png"  fluid/></div>
      <div className="feature_cont">
      <p><b>Invoicing</b> - Request payments over email or SMS and track payment status.</p></div>
      </div>
      </Col>
    </Row>
  </Container>
</section>
)

const IntegrationTabs = () => (
  <section className="page_section light_bg">
    <Container fluid>
    <Row>
      <Col md={4} xs={12} className="d-flex align-items-center  justify-content-center">
      <div className="text-center">
      <h1 className="page_head">
      Easiest integration
      </h1>
      </div>
      </Col>
      <Col md={8} xs={12}>
        <div className="intigration_tabs">
          <Tabs defaultActiveKey="E-STORE PAYMENTS" id="uncontrolled-tab-example">
            <Tab eventKey="E-STORE PAYMENTS" title="E-STORE PAYMENTS">
              <div className="icon-holder">
                  <p className="bounce_button"><a target="_blank" href="https://www.cashfree.com/shopify-payment-gateway-india/">
                  <img src="/images/pg/shopify.png" alt="Cashfree"/>
                  </a></p>
                  <p className="bounce_button"><a target="_blank" href="https://www.cashfree.com/woocommerce-payment-gateway-india/">
                  <img src="/images/pg/woocommerce.png" alt="Cashfree"/>
                  </a></p>
                  <p className="bounce_button"><a target="_blank" href="https://www.cashfree.com/magento-payment-gateway-india/">
                  <img src="/images/pg/magento.png" alt="Cashfree"  />
                  </a></p>
                  <p className="bounce_button"><a target="_blank" href="https://docs.cashfree.com/docs/opencart/guide/">
                  <img src="/images/pg/opencart.png" alt="Cashfree"  />
                  </a></p>
                </div>
                <div className="cashfree-block">
                  <div className="row cashfree-block-padding">
                      <div className="col-md-6">
                          <div className="single">
                          <h3>Sell in India from anywhere</h3>
                          <p className="cashgram-tab-text">
                              Being an international payment gateway, you can receive payments in your overseas bank account from Indian customers. Reach Indian buyers without having to set up an office in India. <a href="https://www.cashfree.com/contact-sales"><b>Get in touch for details.</b></a>
                          </p>
                          </div>
                          <div className="single">
                          <h3>Connect PayPal</h3>
                              <p className="cashgram-tab-text">Offer PayPal as an international payment option on your checkout page. Connect your PayPal account with Cashfree and accept international payments in minutes. Learn more.</p>
                          </div>
                          <div className="single">
                          <h3>Pay Later and EMI</h3>
                              <p className="cashgram-tab-text">Offer your customers the convenience of Buy Now, Pay Later through Cashfree's platform. Enable multiple Pay Later and cardless credit EMI options with a single integration.</p>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="single">
                          <h3>Multi-currency Payments</h3>
                              <p className="cashgram-tab-text">Accept international payments in 30 currencies including USD, GBP, EUR, AED, CAD. Convert currency dynamically from INR during checkout. View list of <a href="https://docs.cashfree.com/docs/resources/#currencies"><b>supported currencies</b></a></p>
                          </div>
                          <div className="single">
                          <h3>Connect PayTM</h3>
                              <p className="cashgram-tab-text">Offer PayTM as a checkout option along with Cashfree's payment gateway.</p>
                          </div>
                      </div>
                  </div>
                </div>
            </Tab>
          
            <Tab eventKey="INTEGRATION" title="INTEGRATION">
                <div className="icon-holder">
                      <p className="bounce_button"><a target="_blank" href="https://www.cashfree.com/shopify-payment-gateway-india/">
                        <img src="/images/pg/php.png" alt="Cashfree"  />
                      </a></p>
                      <p className="bounce_button"><a target="_blank" href="https://www.cashfree.com/woocommerce-payment-gateway-india/">
                      <img src="/images/pg/java.png" alt="Cashfree"  />
                      </a></p>
                      <p className="bounce_button"><a target="_blank" href="https://www.cashfree.com/magento-payment-gateway-india/">
                      <img src="/images/pg/python.png" alt="Cashfree"  />
                      </a></p>
                      <p className="bounce_button"><a target="_blank" href="https://docs.cashfree.com/docs/opencart/guide/">
                      <img src="/images/pg/nodejs.png" alt="Cashfree"  />
                      </a></p>
                      <p className="bounce_button"><a target="_blank" href="https://docs.cashfree.com/docs/opencart/guide/">
                      <img src="/images/pg/ios.png" alt="Cashfree"  />
                      </a></p>
                      <p className="bounce_button"><a target="_blank" href="https://docs.cashfree.com/docs/opencart/guide/">
                      <img src="/images/pg/android.png" alt="Cashfree"  />
                      </a></p>
                </div>
              <div className="cashfree-block">
                    <div className="row cashfree-block-padding">
                        <div className="col-md-6">
                            <div className="single">
                            <h3>
                              <a href="https://docs.cashfree.com/docs/web/guide/">Checkout Form</a>
                            </h3>
                            <p className="cashgram-tab-text">
                                Simple and easy integration, get started in less than an hour.
                            </p>
                            </div>
                            <div className="single">
                            <h3>
                              <a href="https://docs.cashfree.com/docs/whitelabel/guide/">Seamless Checkout</a>
                            </h3>
                                <p className="cashgram-tab-text">Design your payment form and seamlessly accept payments on your website</p>
                            </div>
                            <div className="single">
                            <h3>
                              <a href="http://docs.cashfree.com/docs/hosted/guide/">Embedded Checkout</a>
                            </h3>
                                <p className="cashgram-tab-text">Allow customers to pay on your webpage without any redirects.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single">
                            <h3>
                              <a href="https://docs.cashfree.com/docs/android/guide/">Mobile SDKs</a>
                            </h3>
                                <p className="cashgram-tab-text">Latest features optimized for mobile - Saved cards, Auto OTP reader helping faster checkout.</p>
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
        <PgFaqs/>
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
       <h4 className="blue">Link Payment Gateway to Cashfree's Payment Disbursal products</h4>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="link_card w-100">
        <div className="link-payment-item">
          <Image src="/images/productcard1.svg"  fluid/>
          <p><b>Payouts</b> - Send money to any bank account, UPI address or PayTM wallet by uploading a file or via an API.</p>
        </div>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="link_card w-100">
        <div className="link-payment-item">
          <Image src="/images/productcard2.svg"  fluid/>
          <p><b>Marketplace Settlements</b>  - Automatically split commissions with your vendors after every purchase. Run a marketplace with ease.</p>
        </div>
      </div>
      </Col>
    </Row>
  </Container>
</section>
)

const PaymentGateway = () => (
  <div>
     <NextSeo
      title="International Payment Gateway India [Lowest Pricing]"
      keywords="payment gateway india,best payment gateway,best payment gateway india,payment gateway integration,payment gateway integration India,international payment gateway"
      description="Payment Gateway Integration: Are you a business looking for a Payment Gateway in India with Zero Setup Fee, Zero Maintenance fee, Lowest Pricing and a 2 Day Settlement Cycle?"
      />
     <Header/>
     <Banner/>
     <Pgcrads/>
     <PgFeatures/>
     <IntegrationTabs/>
     <Integration/>
     <PaymentLink/>
     <Faqs/>
     <CtaSection/>
     <ProductCards/>
     <Footer/>
  </div>
)

export default PaymentGateway
