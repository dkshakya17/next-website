import React, { useState } from 'react'
import Router from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Container from 'react-bootstrap/Container';
import '../styles/custom-theme.scss';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import HomeFaqs from '../components/faqs/HomeFaqs'
import CtaSection from '../components/CtaSection'
import VideoModal from '../components/VideoModal'
import Testimonial from '../components/Testimonial'



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
  <>
    <section className="hero_section">
      <Container>
        <Row>
          <Col md={6} xs={12} className="center_content">
            <div className="banner_cont">
              <h1 className="banner_head white">
                A Complete Payments Toolkit for India
        </h1>
              <p>The fastest and easiest way to collect and disburse payments for growing businesses</p>
            </div>
            <ButtonToolbar>
              <Button variant="outline-light mr-3">Create Account</Button>
              <Button variant="primary">Contact Sales</Button>
            </ButtonToolbar>
            <style jsx>{`
            p{
              font-size: 22px;
              font-weight: 500;
              padding: 24px 0;
              color:white;
            }
        `}</style>
          </Col>
        </Row>
      </Container>
    </section>
  </>
)

const Competition = () => (
  <section className="page_section light_bg">
    <Container>
      <Row>
        <Col md={12} xs={12}>
          <div className="text-center">
            <h2 className="page_head">
              Stay Ahead of Competition with Cashfree
        </h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={3} sm={4} xs={12}>
          <div className="product_box text-center w-100">
            <Image src="/products/instant-refunds.png" fluid />
            <h3 className="tile_head">Instant Refund</h3>
            <p>For online payments and cash on delivery payments. Independent of banking hours.</p>
          </div>
        </Col>
        <Col md={3} sm={4} xs={12}>
          <div className="product_box text-center w-100">
            <Image src="/products/instant-account-verification.png" fluid />
            <h3 className="tile_head">On-demand Payouts</h3>
            <p>Disburse bulk payments instantly. Simpler and faster than banks.</p>
          </div>
        </Col>
        <Col md={3} sm={4} xs={12}>
          <div className="product_box text-center w-100">
            <Image src="/products/ondemand-payouts.png" fluid />
            <h3 className="tile_head">Bank Account Verification</h3>
            <p>Know your customer: Verify bank account and holder name instantly before sending money.</p>
            {/* <Link href="/"/> */}
          </div>
        </Col>
        <Col md={3} sm={4} xs={12}>
          <div className="product_box text-center w-100">
            <Image src="/products/recurring-payments.png" fluid />
            <h3 className="tile_head">Recurring Payments</h3>
            <p>Unlock business opportunities with subscriptions.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

const Products = () => <section className="page_section">
  <Container>
    <Row>
      <Col md={12} xs={12}>
        <div className="text-center">
          <h1 className="page_head">
            Our Products
        </h1>
        </div>
      </Col>
    </Row>

    <Row>
      <Col md={3} sm={4} xs={12}>
        <div className="main_product w-100">
          <Image src="/products/payment-gateway.png" fluid />
          <h3 className="tile_head">Payment Gateway</h3>
          <p>Collect local and international payments with a simple integration. Receive money within 2 days.</p>

          <a onClick={() => Router.push('/payment-gateway-india')}>
            Learn More
          </a>

        </div>
      </Col>
      <Col md={3} sm={4} xs={12}>
        <div className="main_product w-100">
          <Image src="/products/payouts.png" fluid />
          <h3 className="tile_head">Payouts</h3>
          <p>Send money to any bank account, UPI address or PayTM wallet by uploading a file or via an API.</p>
          <Link href="/payouts">
            <a>
              Learn More
        </a>
          </Link>
        </div>
      </Col>
      <Col md={3} sm={4} xs={12}>
        <div className="main_product w-100">
          <Image src="/products/auto-collect.png" fluid />
          <h3 className="tile_head">Auto Collect</h3>
          <p>Automatically track customer payments with virtual bank accounts. No more manual reconciliation.</p>
          <Link href="/autocollect">
            <a>
              Learn More
        </a>
          </Link>
        </div>
      </Col>
      <Col md={3} sm={4} xs={12}>
        <div className="main_product w-100">
          <Image src="/products/marketplace-settlement.png" fluid />
          <h3 className="tile_head">Marketplace Settlements</h3>
          <p>Automatically split commissions with your vendors after every purchase. Run a marketplace with ease.</p>
          <a href="#">
            Learn More
        </a>
        </div>
      </Col>
    </Row>
  </Container>
</section>;



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

const NewsSection = () => <section className="page_section light_bg">
  <Container>
    <Row>
      <Col md={12} xs={12}>
        <div className="text-center">
          <h2 className="page_head">
            Cashfree in the News
    </h2>
        </div>
      </Col>
    </Row>
    <Row>
      <Col md={12} xs={12}>
        <div className="news_links">
          <ul className="news_list">
            <li>
              <Image src="/newslogo/yc.png" fluid />
            </li>
            <li>
              <Image src="/newslogo/tc.png" fluid />
            </li>
            <li>
              <Image src="/newslogo/ta.png" fluid />
            </li>
            <li>
              <Image src="/newslogo/ph.png" fluid />
            </li>
            <li>
              <Image src="/newslogo/et.png" fluid />
            </li>
            <li>
              <Image src="/newslogo/ys.png" fluid />
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>
</section>;



const Faqs = () => <section className="page_section">
  <Container>
    <Row>
      <Col md={12} xs={12}>
        <div className="text-center">
          <h2 className="page_head">
            FAQs
        </h2>
        </div>
      </Col>
    </Row>
    <Row>
      <Col md={8} xs={12} className="m-auto">
        <div className="faqs">
          <HomeFaqs />
        </div>
      </Col>
    </Row>
  </Container>
</section>;



function CashgramHome() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <section className="page_section cashgram_sec">
      <Row className="m-0">
        <Col md={6} xs={12} className="p-0">
          <div className="cashgram_video">
            <div className="bg_img">
              <Image src="/images/cg_bg.png" fluid />
            </div>
            <a className="play_btn" onClick={() => setModalShow(true)}><Image src="/icons/playicon.png" fluid /></a>
          </div>

        </Col>
        <Col md={6} xs={12}>
          <div className="cashgram_content">
            <h3> <b className="green">Cashgram</b> <br /> First of its kind refund solution</h3>
            <p>Cashgram is a weblink businesses can send users to collect account details and make payment instantly. <b> Experience the future of refunds in India.</b></p>
            <a href="https://www.cashfree.com/cashgram" target="_blank" className="btn btn-primary">Learn more</a>
          </div>
        </Col>
      </Row>
      <VideoModal show={modalShow}
        onHide={() => setModalShow(false)}
        src="https://www.youtube.com/embed/pWYZES2xkV0?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"
      />
    </section>
  );

}



function TestimonialSection() {
  return (
    <section className="page_section">
      <Container>
        <Row className="m-0">
          <Col md={12} xs={12} className="p-0">
            <h2 className="page_head text-center">
              High growth companies love Cashfree
           </h2>
            <Testimonial />
          </Col>
        </Row>
      </Container>
    </section>
  );

}

const Home = () => (
  <>
    <NextSeo
      title="Cashfree - Best Payment Gateway and Payouts for India"
      keywords="payment gateway india,best payment gateway,best payment gateway india,payment gateway integration,payment gateway integration India,international payment gateway"
      description="Payment Gateway India: Cashfree provides a single platform for businesses to disburse and collect payments in India via its Payouts and Payment Gateway products. No setup cost. Highest success rates."
    />
    <Header />
    <Banner />
    <CustomerSection />
    <Products />
    <Competition />
    <CashgramHome />
    <NewsSection />
    <TestimonialSection />
    <Faqs />
    <CtaSection />
    <Footer />
  </>
)

export default Home
