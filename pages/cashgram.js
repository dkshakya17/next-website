import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import CtaSection from '../components/CtaSection'
import Image from 'react-bootstrap/Image'
import PayoutsFaqs from '../components/faqs/PayoutsFaqs'
import Link from 'next/link'
import Tabs from 'react-bootstrap/Tabs'
import VideoModal from '../components/VideoModal'
import Tab from 'react-bootstrap/Tab'
import { NextSeo } from 'next-seo'
import '../styles/custom-theme.scss'

function Banner() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <section className="hero_section position-relative">
            <Container>
                <Row>
                    <Col md={6} sm={6} xs={12}>
                        <div className="cashgram_feature_img w-100 pr-3">
                            <Image src="/images/cashgram/cashgramplane.svg" fluid />
                        </div>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <div className="cashgram_banner w-100">
                            <h3 className="white">Pay your users the way they want, instantly.</h3>
                            <a onClick={() => Router.push('/cashgram-invite')} className="btn-primary mt-3">Get Started</a>
                            <p><a className="play_btn mt-3 white" onClick={() => setModalShow(true)}><Image src="/images/cashgram/play.png" fluid /></a> Watch 20 second video</p>
                        </div>

                    </Col>

                </Row>
            </Container>
            <VideoModal show={modalShow}
                onHide={() => setModalShow(false)}
                src="https://www.youtube.com/embed/pWYZES2xkV0?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"
            />
            <div className="producthunt_strip position-absolute">
                <Image src="/images/cashgram/trophy.png" fluid />
                <p>Product of the Day on Product Hunt</p>
            </div>
        </section>
    );

}

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
                                    <img src="/images/payouts/logos/upi.png" class="img-responsive" alt="UPI API" />
                                </div>
                                <div class="logos">
                                    <img src="/images/payouts/logos/imps.png" class="img-responsive" alt="IMPS API" />
                                </div>
                                <div class="logos">
                                    <img src="/images/payouts/logos/visa.png" class="img-responsive" alt="RBL API" />
                                </div>
                                <div class="logos">
                                    <img src="/images/payouts/logos/mc.png" class="img-responsive" alt="API Banking" />
                                </div>
                                <div class="logos">
                                    <img src="/images/payouts/logos/paytm.png" class="img-responsive" alt="PAYTM API" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


const HowItWorks = () => <section className="page_section">
    <Container>
        <Row>
            <Col md={12} xs={12}>
                <div className="text-center">
                    <h1 className="page_head">
                        How it works
                    </h1>
                </div>
            </Col>
        </Row>

        <Row>
            <Col md={4} sm={4} xs={12}>
                <div className="main_product cashgram_hiw">
                    <Image src="/images/cashgram/send.svg" fluid />
                    <h3 className="tile_count"><b>1 . </b> Send</h3>
                    <p>Create a Cashgram link and send to recipient’s email and phone.</p>
                </div>
            </Col>
            <Col md={4} sm={4} xs={12}>
                <div className="main_product cashgram_hiw ">
                    <Image src="/images/cashgram/capture.svg" fluid />
                    <h3 className="tile_count"><b>2 . </b>Capture</h3>
                    <p>Recipient enters their bank account/UPI ID/PayTM no./Debit Card.</p>
                </div>
            </Col>
            <Col md={4} sm={4} xs={12}>
                <div className="main_product cashgram_hiw">
                    <Image src="/images/cashgram/redeem.svg" fluid />
                    <h3 className="tile_count"><b>3 . </b>Redeem</h3>
                    <p>Recipient receives a payout in her preferred account.</p>
                </div>
            </Col>

        </Row>

    </Container>
</section>;

const HappyUsers = () => <section className="page_section">
    <Container>
        <Row>
            <Col md={12} xs={12}>
                <div className="text-center">
                    <h1 className="page_head">
                        Instant payouts. Happy users.
                    </h1>
                </div>
            </Col>
        </Row>
    </Container>
    <Container fluid className="mb-5 mt-5">
        <Row>
            <Col md={7} xs={12}>
             <div className="hu_cont justify-content-center">
                <Image src="/images/cashgram/marketing.svg" fluid />
                <p>Payout Marketing affiliates</p>
             </div>
             <div className="hu_cont">
                <p>Distribute Prize Money</p>
                <Image src="/images/cashgram/prize.svg" fluid />
             </div>
             <div className="hu_cont justify-content-center">
                <Image src="/images/cashgram/reimburse.svg" fluid />
                <p>Process Refunds</p>
             </div>
             <div className="hu_cont">
                <p>Reimburse Expenses </p>
                <Image src="/images/cashgram/refund.svg" fluid />
             </div>
            </Col>
            <Col md={5} xs={12} className="p-0">
                <div className="hu_img">
                <Image src="/images/cashgram/mobile-demo.svg" fluid />
                </div>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col md={12} sm={12} xs={12}>
                <div className="cming_soon_box subs_diduknow for_dev">
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <p className="box_head">
                                #Cashgram <br /> your users
                             </p>
                        </div>
                        <div className="col-md-7 col-sm-8 col-xs-12">
                            <p>Delight your users by paying them faster. Send Cashgrams in bulk via an API.</p>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12 text-center d-flex align-items-center">
                            <a onClick={() => Router.push('/contact-sales')} className="btn-white">Contact Sales</a>
                        </div>
                    </div>

                </div>
            </Col>
        </Row>
    </Container>
</section>;


const Businesses = () => <section className="page_section mt-5 mb-5">
    <Container>
        <Row>
            <Col md={12} xs={12}>
                <div className="text-center">
                    <h1 className="page_head">
                        Furlenco uses Cashgram to automate <br /> security deposit refund at end of subscription
                     </h1>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={6} sm={6} xs={12} className="center_content">
                <div className="cashgram_business w-100">
                    <Image src="/images/cashgram/furlenco-logo.png" fluid />

                    <h3 className="tile_head mb-3">Through Cashgram we are using all payment modes -IMPS, UPI & Paytm. From the customer point of view refund settlement process is instantaneous. The moment Furlenco picks your furniture, Furlenco is able to disburse the refund right away. There is a phenomenal shift in customer experience.</h3>
                    <h3 className="tile_head">Varun Krishnakumar | Director of Products</h3>
                    <a onClick={() => Router.push('/cashgram-invite')} className="btn-primary mt-3">Request Early Access</a>
                </div>
            </Col>
            <Col md={6} sm={6} xs={12}>
                <div className="main_product w-100">
                    <iframe id="cashgram-video" width="100%" height="315px" src="https://www.youtube.com/embed/yRGiEXzEDok" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
                        <h4 className="blue">Link Cashgram to Cashfree's Payment Collection products</h4>
                    </div>
                </Col>
                <Col md={4} sm={4} xs={12}>
                    <div className="link_card w-100">
                        <div className="link-payment-item">
                            <Image src="/images/productcard1.svg" fluid />
                            <p><b>Payment Gateway</b> - Accept local and international payments from 100 payment modes and disburse using Payouts</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={4} xs={12}>
                    <div className="link_card w-100">
                        <div className="link-payment-item">
                            <Image src="/images/productcard2.svg" fluid />
                            <p><b>Auto Collect</b> - Accept payments directly via NEFT, IMPS, RTGS and UPI and disburse using Payouts</p>        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

const CashgramLp = () => (
    <div>
        <NextSeo
            title="Cashgram - Powered by Cashfree"
            keywords="payment gateway india,best payment gateway,best payment gateway india,payment gateway integration,payment gateway integration India,international payment gateway"
            description="A weblink to send money to users the way they want."
        />
        <Header />
        <Banner />
        <BannerLogo />
        <HowItWorks />
        <HappyUsers />
        <Businesses />
        <ProductCards />
        <Footer />
    </div>
)

export default CashgramLp
