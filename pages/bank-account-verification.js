import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import '../styles/custom-theme.scss';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Col from 'react-bootstrap/Col'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import BavUseCases from '../components/BavUseCases'
import MarketplaceFaqs from '../components/faqs/MarketplaceFaqs'
import { NextSeo } from 'next-seo'
import '../styles/custom-theme.scss'




function clients() {
    return [
      { src: '/clients/cred.svg', alt: 'Cred' },
      { src: '/clients/delhivery.svg', alt: 'delhivery' },
      { src: '/clients/dunzo.svg', alt: 'dunzo' },
      { src: '/clients/exxon.svg', alt: 'exxo' },
      { src: '/clients/xiaomi.svg', alt: 'xiaomi' },
      { src: '/clients/zomato.svg', alt: 'zomato' }
    ];
  }
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 320 },
      items: 2,
    },
  };
  
  function BannerClients(props) {
    return (
      <Carousel responsive={responsive}
        arrows={false}
        infinite={false}
        centerMode={true}
        slidesToSlide={1}
        autoPlay={props.deviceType !== "desktop" ? true : false}
        ssr={true}
        removeArrowOnDeviceType={["desktop", "superLargeDesktop"]}
        itemClass="client_logo_item"
      >
        {clients().map(slide => (
          <img
            className="d-block w-100"
            src={slide.src}
            alt={slide.alt}
          />
        ))}
      </Carousel>
    );
  }

  

const Banner = () => (
    <section className="hero_section">
        <Container>
            <Row>
                <Col md={6} xs={12} className="center_content">
                    <div className="banner_cont">
                        <h1 className="banner_head white">
                         Bank Account Verification
                         </h1>
                        <p>Verify your bank account details in real time.<br /> [LIVE NOW]UPI ID or VPA verification</p>
                    </div>
                    <a onClick={() => Router.push('/contact-sales')} className="btn-primary">
                    Get Started
                    </a>
                    
                </Col>
            </Row>
        </Container>
    </section>
)



const CustomerSection = () => <section className="page_section light_bg">
  <Container>
    <Row>
      <Col md={12} xs={12}>
        <div className="text-center">
          <h2 className="page_head">
            Our customers include
        </h2>
        </div>
      </Col>
    </Row>

    <Row>
      <Col md={12} xs={12}>
        <div className="banner_slide text-center">
          <BannerClients />
        </div>
      </Col>
    </Row>


  </Container>
</section>;

const ContentSection = () => (
    <section className="page_section">
        <Container>
            <Row>
                <Col md={12} xs={12}>
                    <div className="text-center">
                        <h1 className="page_head">
                        Instant bank account verification for all.
                         </h1>
                        <h3 className="blue mt-5"><span className="green">Verify</span> before you onboard
                             <br /> <span className="green">Validate</span> before you pay. </h3>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


const BavCrads = () => (
    <section className="page_section">
        <Container>

            <Row>
                <Col md={4} sm={4} xs={12}>
                    <div className="main_product mp_card w-100 m-0">
                        <div className="card_img"><Image src="/images/bankverification/instant.png" fluid /></div>
                        <h3 className="tile_head"><sapn className="green">Explore</sapn><br/> use cases</h3>
                        <p>Vendor onboarding, employee onboarding, borrower KYC - Cashfree has you covered.</p>
                    </div>
                </Col>
                <Col md={4} sm={4} xs={12}>
                    <div className="main_product mp_card w-100 m-0">
                        <div className="card_img"><Image src="/images/bankverification/sucuredandex.png" fluid /></div>
                        <h3 className="tile_head"><span className="green">Highly</span><br/> scalable & secure</h3>
                        <p>A powerful API that integrates with your company internal system to automate verification. Get a response without exposing data to a third party.</p>
                    </div>
                </Col>
                <Col md={4} sm={4} xs={12}>
                    <div className="main_product mp_card w-100 m-0">
                        <div className="card_img"><Image src="/images/bankverification/successrate.png" fluid /></div>
                        <h3 className="tile_head"> <span className="green">Optimize</span> <br/> your payouts success rates</h3>
                        <p>Verify accounts before sending money and minimise reversals and failed transfers.</p>
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
           <BavUseCases />
            </Col>
          </Row>
        </Container>
      </section>
    );
  
  }
  
const Features = () => (
    <section className="page_section">
        <Container>

            <Row>
                <Col md={8} xs={12} className="m-auto">
                    <div className="text-center">
                        <h2 className="page_head">
                            Marketplace Settlement Features
                        </h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={6} xs={12}>
                    <div className="main_product w-100 p-4">
                        <div className="card_img"><Image src="/images/marketplace/fast.svg" fluid /></div>
                        <h3 className="tile_head">Fast Settlements</h3>
                        <p>Ensures faster settlement to vendors within a T+2 settlement cycle</p>
                    </div>
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <div className="main_product w-100 p-4">
                        <div className="card_img"><Image src="/images/marketplace/easyi.svg" fluid /></div>
                        <h3 className="tile_head">Easy Integration</h3>
                        <p>Integrate with our simple APIs and get running in under 30 minutes</p>
                    </div>
                </Col>

            </Row>
            <Row>

                <Col md={6} sm={6} xs={12}>
                    <div className="main_product w-100 p-4">
                        <div className="card_img"><Image src="/images/marketplace/simpler.svg" fluid /></div>
                        <h3 className="tile_head">Simpler business payments</h3>
                        <p>Tax computations are faster and simpler by accessing marketplace earnings per transaction</p>
                    </div>
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <div className="main_product w-100 p-4">
                        <div className="card_img"><Image src="/images/marketplace/global.svg" fluid /></div>
                        <h3 className="tile_head">Go Global</h3>
                        <p>Allow international vendors to sell through your marketplace without any hassle</p>
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
                    <MarketplaceFaqs />
                </div>
            </Col>
        </Row>
    </Container>
</section>;



const ProductCards = () => (
    <section className="page_section light_bg">
        <Container>

            <Row>
                <Col md={4} sm={4} xs={12}>
                    <div className=" w-100 mt-5">
                        <h4 className="blue">Link to Cashfree payment gateway and other collections products</h4>
                    </div>
                </Col>
                <Col md={4} sm={4} xs={12}>
                    <div className="link_card w-100">
                        <div className="link-payment-item">
                            <Image src="/images/productcard1.svg" fluid />
                            <p><b>Auto Collect</b>   - Accept payments directly via NEFT, IMPS, RTGS and UPI and disburse using Payouts</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={4} xs={12}>
                    <div className="link_card w-100">
                        <div className="link-payment-item">
                            <Image src="/images/productcard2.svg" fluid />
                            <p><b>Marketplace Settlements</b>  - Automatically split commissions with your vendors after every purchase. Run a marketplace with ease.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


const BavCtaSection = () => <section className="page_section">
    <Container>
        <Row>
            <Col md={12} xs={12}>
                <div className="text-center">
                    <h3 className="Mplace_head">
                        Do Instant Verification
          </h3>
                    <h5 className="p-3">Verify bank account or UPI ID using powerful APIs automatically.</h5>
                    <a onClick={() => Router.push('/contact-sales')} className="btn-primary">
                        Get In Touch
            </a>
                </div>
            </Col>
        </Row>
    </Container>
</section>;


const BankAccountVerification = () => (
    <div>
        <NextSeo
            title="Bank Account Verification API for India | Cashfree"
            keywords="payment gateway india,best payment gateway,best payment gateway india,payment gateway integration,payment gateway integration India,international payment gateway"
            description="Bank account verification: Use powerful APIs to automate bank account number verification. Works for all bank account in India."
        />
        <Header />
        <Banner />
        <CustomerSection />
        <ContentSection />
        <BavCrads />
        <TestimonialSection />
        <Features />
        <Faqs />
        <BavCtaSection />
        <ProductCards />
        <Footer />
    </div>
)

export default BankAccountVerification
