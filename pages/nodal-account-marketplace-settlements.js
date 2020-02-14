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
import Image from 'react-bootstrap/Image'
import MarketplaceFaqs from '../components/faqs/MarketplaceFaqs'
import { NextSeo } from 'next-seo'
import '../styles/custom-theme.scss'

const Banner = () => (
    <section className="hero_section">
        <Container>
            <Row>
                <Col md={6} xs={12} className="center_content">
                    <div className="banner_cont">
                        <h1 className="banner_head white">
                            Marketplace Payment Gateway
        </h1>
                        <p>Automatically split payments with your <br /> vendors after every sale.</p>
                    </div>
                    <a onClick={() => Router.push('/contact-sales')} className="btn-primary">
                    Get Started
                     </a>
                </Col>
            </Row>
        </Container>
    </section>
)

const ContentSection = () => (
    <section className="page_section light_bg">
        <Container>
            <Row>
                <Col md={12} xs={12}>
                    <div className="text-center">
                        <h1 className="cont_head blue">
                            Split payments without managing a Nodal Account
        </h1>
                        <h3>Running a marketplace <br /> made supereasy</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


const MplaceCrads = () => (
    <section className="page_section">
        <Container>

            <Row>
                <Col md={4} sm={4} xs={12}>
                    <div className="main_product mp_card w-100">
                        <div className="card_img"><Image src="/images/marketplace/verified.svg" fluid /></div>
                        <h3 className="tile_head">Vendor Management <br /> <span className="green">Simplified</span></h3>
                        <p>Split payments to vendors correctly: On time and automatically.</p>
                    </div>
                </Col>
                <Col md={4} sm={4} xs={12}>
                    <div className="main_product mp_card w-100">
                        <div className="card_img"><Image src="/images/marketplace/split.svg" fluid /></div>
                        <h3 className="tile_head">Split <br /> <span className="green">Payments</span></h3>
                        <p>Connect with Cashfree split payment gateway to pay your vendors faster from Cashfree’s managed nodal account.</p>
                    </div>
                </Col>
                <Col md={4} sm={4} xs={12}>
                    <div className="main_product mp_card w-100">
                        <div className="card_img"><Image src="/images/marketplace/offline.svg" fluid /></div>
                        <h3 className="tile_head">Offline or cash on <br /> <span className="green">delivery orders</span></h3>
                        <p>Any online or offline transaction can be added and settled using our API.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


const WorkProcess = () => (
    <section className="page_section">
        <Container>
            <Row>
                <Col md={8} xs={12} className="m-auto">
                    <div className="text-center">
                        <h2 className="page_head">
                            How does Marketplace Settlements work?
                        </h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4} sm={4} xs={12}>
                    <div class="process_tile">
                        <div className="tc">
                            <img src="/images/marketplace/customer.svg" />
                            <div className="time_ball"></div>
                        </div>
                        <div className="time-cont">
                            <h5>Customer Places Order</h5>
                            <h5>Customer places an order for items provided by the seller(s), and you as a marketplace define vendor commission.</h5>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={4} xs={12}>
                    <div class="process_tile">
                        <div className="tc">
                            <img src="/images/marketplace/seller.svg" />
                            <div className="time_ball"></div>
                        </div>
                        <div className="time-cont">
                            <h5>Sellers are Paid</h5>
                            <h5>Cashfree computes the amount to be paid to the seller(s) and transfers the amount. (T+2 settlement cycle).</h5>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={4} xs={12}>
                    <div class="process_tile">
                        <div className="tc">
                            <img src="/images/marketplace/easy.svg" />
                            <div className="time_ball_l"></div>
                        </div>
                        <div className="time-cont">
                            <h5>Easy Reconciliation</h5>
                            <h5>A detailed report on orders made to different sellers, transactions carried out and much more.</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

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


const Testimonial = () => <section className="page_section mt-5 mb-5">
    <Container>
        <Row>
            <Col md={12} xs={12}>
                <div className="text-center">
                    <h1 className="page_head">
                        Testimonial
                     </h1>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={6} sm={6} xs={12}>
                <div className="main_product testimonial_img w-100">
                    <Image src="/images/marketplace/zaheer.jpg" fluid />
                </div>
            </Col>
            <Col md={6} sm={6} xs={12} className="center_content">
                <div className="cashgram_business w-100">
                    <Image src="/images/marketplace/ketto.png" fluid />

                    <h3 className="tile_head mb-3">Everyday we receive 2000+ donations against hundreds of our fundraisers. Previously there was manual work involved in compilations and then the funds were released via corporate net banking. This was error prone and tedious.<br /><br />Marketplace Settlement helped us move away from Excel files and human intervention is now minimal in the payout process. All receipts are automatically tagged to the correct vendor and settlements are completely automated. It is simple to use and the money flow is hassle-free.</h3>
                    <h3 className="tile_head">Zaheer Adenwala | Co-founder &nbsp; CTO | Ketto</h3>
                </div>
            </Col>

        </Row>
        <Row>
            <Col md={12} sm={12} xs={12}>
                <div className="cming_soon_box subs_diduknow for_dev">
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <p className="box_head">
                                For <br /> Developers
                             </p>
                        </div>
                        <div className="col-md-7 col-sm-8 col-xs-12 d-flex align-items-center">
                            <p>View API documentation to split payments</p>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12 text-center d-flex align-items-center">
                            <a href="https://docs.cashfree.com/docs/ces/guide/" target="_blank" className="btn-white">View More</a>
                        </div>
                    </div>

                </div>
            </Col>
        </Row>
    </Container>
</section>;

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


const MarketplaceCtaSection = () => <section className="page_section">
  <Container>
    <Row>
      <Col md={12} xs={12}>
        <div className="text-center">
          <h3 className="Mplace_head">
          Split Payments Easily
          </h3>
          <h5 className="p-3">Run your marketplace without managing a nodal account. <br/> Talk to our payment experts.</h5>
             <a onClick={() => Router.push('/contact-sales')} className="btn-primary">
                Get In Touch
            </a>
        </div>
      </Col>
    </Row>
  </Container>
</section>;


const MarketplaceSettlements = () => (
    <div>
        <NextSeo
            title="A Nodal Account for Split Payments | Cashfree"
            keywords="payment gateway india,best payment gateway,best payment gateway india,payment gateway integration,payment gateway integration India,international payment gateway"
            description="Cashfree's marketplace settlements offers an easy to use nodal account to run your business and split payments with vendors on time"
        />
        <Header />
        <Banner />
        <ContentSection />
        <MplaceCrads />
        <WorkProcess />
        <Features />
        <Testimonial />
        <Faqs />
        <MarketplaceCtaSection />
        <ProductCards />
        <Footer />
    </div>
)

export default MarketplaceSettlements
