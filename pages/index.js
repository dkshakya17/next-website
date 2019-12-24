import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Container from 'react-bootstrap/Container';
import '../styles/custom-theme.scss';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
// import Slider from 'infinite-react-carousel';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'

function clients() {
  return [
    { src:'/clients/cred.png', alt:'Cred' },
    { src:'/clients/delhibery.png', alt:'delhibery' },
    { src:'/clients/dunzo.png', alt:'dunzo' },
    { src:'/clients/exxo.png', alt:'exxo' },
    { src:'/clients/xiaomi.png', alt:'xiaomi' },
    { src:'/clients/zomato.png', alt:'zomato' }
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
       <style jsx>{`
            h1{
              color:white;
            }
            p{
              font-size: 22px;
              font-weight: 500;
              padding: 24px 0;
              color:white;
            }
        `}</style>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={12}>
        <div className="banner_slide text-center">
          <h4>Our customers include</h4>
          <BannerClients/>
        </div>
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
        <Col md={3}  sm={4} xs={12}>
        <div className="product_box text-center w-100">
        <Image src="/products/instant-refunds.png" fluid/>
        <h3 className="tile_head">Instant Refund</h3>
        <p>For online payments and cash on delivery payments. Independent of banking hours.</p>
        </div>
        </Col>
        <Col md={3}  sm={4} xs={12}>
        <div className="product_box text-center w-100">
        <Image src="/products/instant-account-verification.png" fluid/>
        <h3 className="tile_head">On-demand Payouts</h3>
        <p>Disburse bulk payments instantly. Simpler and faster than banks.</p>
        </div>
        </Col>
        <Col md={3}  sm={4} xs={12}>
        <div className="product_box text-center w-100">
        <Image src="/products/ondemand-payouts.png" fluid/>
        <h3 className="tile_head">Bank Account Verification</h3>
        <p>Know your customer: Verify bank account and holder name instantly before sending money.</p>
        {/* <Link href="/"/> */}
        </div>
        </Col>
        <Col md={3}  sm={4} xs={12}>
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
        <Col md={3}  sm={4} xs={12}>
        <div className="main_product w-100">
        <Image src="/products/payment-gateway.png" fluid/>
        <h3 className="tile_head">Payment Gateway</h3>
        <p>Collect local and international payments with a simple integration. Receive money within 2 days.</p>
        <a href="#">
          Learn More
        </a>
        </div>
        </Col>
        <Col md={3}  sm={4} xs={12}>
        <div className="main_product w-100">
        <Image src="/products/payouts.png" fluid/>
        <h3 className="tile_head">Payouts</h3>
        <p>Send money to any bank account, UPI address or PayTM wallet by uploading a file or via an API.</p>
        <a href="#">
          Learn More
        </a>
        </div>
        </Col>
        <Col md={3}  sm={4} xs={12}>
        <div className="main_product w-100">
        <Image src="/products/auto-collect.png" fluid/>
        <h3 className="tile_head">Auto Collect</h3>
        <p>Automatically track customer payments with virtual bank accounts. No more manual reconciliation.</p>
        <a href="#">
          Learn More
        </a>
        </div>
        </Col>
        <Col md={3}  sm={4} xs={12}>
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
const NewsSection = () => <section className="page_section light_bg">
<Container>
  <Row>
    <Col md={12} xs={12}>
    <div className="text-center">
    <h1 className="page_head">
     Cashfree in the News
    </h1>
    </div>
    </Col>
  </Row>
  <Row>
    <Col md={12} xs={12}>
    <div className="news_links">
      <ul className="news_list">
        <li>
        <Image src="/newslogo/yc.png" fluid/>
        </li>
        <li>
        <Image src="/newslogo/tc.png" fluid/>
        </li>
        <li>
        <Image src="/newslogo/ta.png" fluid/>
        </li>
        <li>
        <Image src="/newslogo/ph.png" fluid/>
        </li>
        <li>
        <Image src="/newslogo/et.png" fluid/>
        </li>
        <li>
        <Image src="/newslogo/ys.png" fluid/>
        </li>
      </ul>
    </div>
    </Col>
  </Row>

  
</Container>
</section>;



const CtaSection = () => <section className="page_section">
    <Container>
      <Row>
        <Col md={12} xs={12}>
        <div className="text-center">
        <h2 className="page_head">
        Talk to our Payment Experts
        </h2>
        <p>Have a complex payment flow or require payment related advice ?</p>
        <a href="#" className="btn-primary">
          Get In Touch
        </a>
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
        <Col md={12} xs={12}>
        <div className="text-center faqs">
          kjhjj
        </div>
        </Col>
      </Row>
    </Container>
  </section>;







const Home = () => (
<>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800|Open+Sans:300,400,600,700,800&display=swap" rel="stylesheet"></link>
    </Head>
     <Banner/>
     <Competition/>
     <Products/>
     <NewsSection/>
     <Faqs/>
     <CtaSection/>
     <Footer/>
     <style jsx>{`
     
     .banner_slide {
        margin: 50px 0;
      }
      
    `}
     </style>
  </>
)

export default Home
