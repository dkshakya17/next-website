import React from 'react'
import Header from '../components/Header'
import Router from 'next/router'
import Footer from '../components/Footer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Link from 'next/link'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { NextSeo } from 'next-seo'
import '../styles/custom-theme.scss'
import SubsFaqs from '../components/faqs/SubsFaqs'

const Banner = () => (
  <>
  <section className="hero_section subscription_banner">
    <Container>
      <Row>
        <Col md={7} xs={12} className="center_content">
        <div className="banner_cont">
        <h1 className="banner_head white">
        Add Recurring Payments to your business.
        </h1>
        <p>Automate your recurring payments with Cashfree Subscriptions</p>
        <p className="text_box"><b className="yellow">Coming Soon</b> UPI recurring payments and Prepaid Payment Instruments (PPIs), including wallets.</p>
        </div>
        <a onClick={() => Router.push('/contact-sales')} className="btn-primary">
                    Get Started
        </a>
        </Col>
       

      </Row>
      <Row>
        <Col md={12} xs={12} className="m-auto">
        <div className="new_subs_modes">
        <h4>Powering Recurring Payments</h4>
        <div className="logo_list">
        <img src="/images/subscription/credit.png" className="img-responsive" alt=""/>
        <img src="/images/subscription/debit.png" className="img-responsive" alt=""/>
        <img src="/images/subscription/nach.png" className="img-responsive" alt=""/>
        </div>
        </div>
        </Col>
        </Row>
    </Container>
  </section>
  <style> {`
  .subscription_banner {
    background-image: url(./images/subscription/subs_banner_bg.svg);
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 400px;
  }
`}
</style>
</>
)

const SubsBlock = () => (
  <>
  <section className="page_section">
  <Container>
    <Row>
      <Col md={12} xs={12}>
      <div className="text-center">
      <h2 className="page_head">
      Do More with Cashfree Subscriptions
      </h2>
      </div>
      </Col>
    </Row>

    <Row>
      <Col md={4}  sm={4} xs={12}>
      <div className="main_product subs_icon_block w-100">
      <div className="card_img"><Image src="/images/subscription/code.svg"  fluid/></div>
      <h4 className="tile_head">Start without writing code</h4>
      <p>Use our dashboard to create plans and add users via a link. Share over email, SMS or Whatsapp.</p>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="main_product subs_icon_block w-100">
      <div className="card_img"><Image src="/images/subscription/trial.svg"  fluid/></div>
      <h3 className="tile_head">Trial Period</h3>
      <p>Offer trial period option and link to subscription plan. Charge as per plan at the end of the trial.</p>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="main_product subs_icon_block w-100">
      <div className="card_img"><Image src="/images/subscription/upfront.svg"  fluid/></div>
      <h3 className="tile_head">Upfront Charge</h3>
      <p>Charge your customers a one time fee at start of service along with recurring payment.</p>
      </div>
      </Col>
    </Row>
    <Row>
      <Col md={4}  sm={4} xs={12}>
      <div className="main_product subs_icon_block w-100">
      <div className="card_img"><Image src="/images/subscription/webhook.svg"  fluid/></div>
      <h4 className="tile_head">Webhook Support</h4>
      <p>Automatically notify new subscriptions, payments, or cancellations.</p>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="main_product subs_icon_block w-100">
      <div className="card_img"><Image src="/images/subscription/analysis.svg"  fluid/></div>
      <h3 className="tile_head">Advanced Analytics</h3>
      <p>Stay on top of every subscription details-Plans and Users using Dashboard or pull details via API.</p>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="main_product subs_icon_block w-100">
      <div className="card_img"><Image src="/images/subscription/support.svg"  fluid/></div>
      <h3 className="tile_head">Multi-user Support</h3>
      <p>Add your team members for managing subscribers. Define roles & permissions.</p>
      </div>
      </Col>
    </Row>
    <Row>
    <Col md={12}  sm={12} xs={12}>
    <div className="cming_soon_box subs_diduknow">
      <div className="row">
        <div className="col-md-2 col-sm-2 col-xs-12">
        <p className="box_head">
         Did you know
        </p>
        </div>
        <div className="col-md-6 col-sm-8 col-xs-12">
        <p>Cashfree validates if a card supports subscriptions or recurring payments during registration to ensure higher success rate</p>
        </div>
      </div>
    </div>
    </Col>
    </Row>
  </Container>
</section>
<style> {`
  .subs_diduknow {
    background-image: url(./images/subscription/mike.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center right;
}
.subs_icon_block .card_img img {
  max-width: 50px;
}
`}
</style>
</>
)

const PgFeatures = () => (
  <section className="page_section">
  <Container>
    <Row>
      <Col md={12} xs={12}>
      <div className="text-center">
      <h2 className="page_head">
      Payment Gateway Enterprise Features<br/>
      <b className="green">Now Available for All</b>
      </h2>
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



const Offers = () => (
  <section className="page_section">
  <Container>
    <Row>
      <Col md={12} xs={12}>
      <div className="text-center">
      <h2 className="page_head">
      Offer Subscription Plans that Suit
      </h2>
      </div>
      </Col>
    </Row>

    <Row>
      <Col md={4}  sm={4} xs={12}>
      <div className="subs_offer w-100">
      <div className="feature_cont"><h3 className="tile_head">Flexible Billing</h3>
      <p>Bill your customers on-demand or automatically on a periodic basis</p></div>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="subs_offer w-100">
      <div className="feature_cont"><h3 className="tile_head">Easy Integration</h3>
      <p>Use dashboard or integrate our REST APIs with your product to automate</p></div>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="subs_offer w-100">
      <div className="feature_cont"><h3 className="tile_head">NACH / e-mandate</h3>
      <p>Accept recurring payments via <a onClick={() => Router.push('/nach-mandate')}>NACH mandate</a> Debit or Credit card</p></div>
      </div>
      </Col>
    </Row>
  </Container>
</section>
)


const Integration = () => (
  <>
  <section className="page_section light_bg">
  <Container>
    <Row>
      <Col md={12} xs={12}>
      <div className="text-center">
      <h2 className="page_head">
      How to Create Subscription Plans?
      </h2>
      </div>
      </Col>
    </Row>

    <Row>
      <Col md={12}  sm={12} xs={12}>
      <div className="main_product w-100">
      <iframe id="cashgram-video" width="100%" height="560px" src="https://www.youtube.com/embed/63-lKFYiJmY?controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      </Col>
    </Row>
    <Row>
    <Col md={12}  sm={12} xs={12}>
    <div className="cming_soon_box subs_diduknow for_dev">
      <div className="row">
        <div className="col-md-2 col-sm-2 col-xs-12">
        <p className="box_head">
        For <br/> Developers
        </p>
        </div>
        <div className="col-md-7 col-sm-8 col-xs-12">
        <p>Checkout our <a href="https://docs.cashfree.com/docs/sbc/guide/" target="_blank" className="white">API documentation</a> and explore how Cashfree Subscription is the building block that lets you create customized subscription logic and pricing models.</p>
        </div>
        <div className="col-md-3 col-sm-12 col-xs-12 text-center d-flex align-items-center">
        <a  onClick={() => Router.push('/contact-sales')} className="btn-white">Contact Sales</a>
        </div>
      </div>
      
    </div>
    </Col>
    </Row>
  </Container>
</section>
<style> {`
  .subs_diduknow.for_dev {
    background-image: url(./images/subscription/dev.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center right;
}
`}
</style>
</>
)




const Faqs = () => <section className="page_section">
    <Container>
      <Row>
        <Col md={8} xs={12} className="m-auto">
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
        <SubsFaqs/>
        </div>
        </Col>
      </Row>
    </Container>
  </section>;


const PaymentSolution = () => (
  <section className="page_section">
    <Container>
    <Row>
    <Col md={12} xs={12}>
      <div className="text-center">
      <h2 className="page_head">
      A comprehensive recurring payments solution
      </h2>
      </div>
      </Col>
      </Row>
    <Row>
      <Col md={12} xs={12}>
        <div className="solution_tabs">
          <Tabs defaultActiveKey="domestic_mode" id="solution_tabs">
            <Tab eventKey="domestic_mode" title="Domestic Payment Mode">
              
                <div className="solution_tab_content">
                <div className="row">
                    <div className="col-md-5 col-xs-12">
                    <h3>
                    Credit Cards
                    </h3>
                    <p>User can add any credit cards on Mastercard and Visa network-any bank in India. Get one-time authentication.</p>
                    <h3>
                    Debit Cards
                    </h3>
                    <p>Works for Debit cards on Mastercard and Visa network issued by ICICI Bank, Kotak Mahindra Bank, Citibank and Canara Bank. Just one-time authentication and automatically deduct charges as per the billing cycle.</p>
                    <h3>
                    Nach Mandate or E-Mandate
                    </h3>
                    <p>Enable automated recurring transactions over a bank account via <a className="bold_text" href="https://blog.cashfree.com/e-mandate/" target="_blank" rel="noopener noreferrer"> e-Mandate registration</a> through Netbanking all banks or Debit Card.</p>
                    
                    </div>
                    <div className="col-md-7 col-xs-12">
                    <div className="subs_tab_img">
                        <img src="/images/subscription/domestic.svg" className="img-responsive" alt=""/>
                    </div>
                    </div>
                    </div>
                </div>
            </Tab>
          
            <Tab eventKey="international" title="International Cards & Currencies">
               
             
            <div className="solution_tab_content">
                <div className="row">
                <div class="col-md-5 col-xs-12">
                  <h3>
                  International Cards
                  </h3>
                  <p>User can add any credit cards on Mastercard and Visa network-any bank in India. Get one-time authentication and automatically deduct charges as per the billing cycle. Support for Amex cards coming soon.</p>
                  <h3>
                  Multi-currency support
                  </h3>
                  <p>Take your offering across the world. Offer secure payments. Go global with support for 50+ currencies</p>
                  </div>
                    <div className="col-md-7 col-xs-12">
                    <div className="subs_tab_img">
                        <img src="/images/subscription/international.png" className="img-responsive" alt=""/>
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

const RecurringPlan = () => (
  <section className="page_section light_bg">
    <Container>
    <Row>
    <Col md={12} xs={12}>
      <div className="text-center">
      <h2 className="page_head">
      Design Your Custom Recurring Plan
      </h2>
      </div>
      </Col>
      </Row>
    <Row>
    <Col md={4} xs={12}>
    <div class="plan_content alight_left">
        <div class="model">
            <h3 class="clockwise">Fixed Recurring Model</h3>
            <p>For companies that provide a product for a fixed price and charge on a recurring basis</p>
        </div>
        <div class="model">
            <h3 class="straight">Fixed + Overcharge Model</h3>
            <p>Simplify billing where amount includes fixed and variable components.</p>
        </div>
      </div>
    </Col>
    <Col md={4} xs={12}>
    <div class="plan_content">
        <div class="model_img">
           <img src="/images/subscription/model.gif" class="img-responsive" alt=""/>
        </div>
       
      </div>
    </Col>
    <Col md={4} xs={12}>
    <div class="plan_content alight_right">
        <div class="model">
            <h3 class="anticlockwise">Usage Model</h3>
            <p>Companies that provide a product and who want to enable customers to pay for only what they use.</p>
        </div>
      </div>
    </Col>
    </Row>
    <Row>
    <Col md={12} xs={12} className="text-center">
      <a onClick={() => Router.push('/contact-sales')}  class="btn-primary mt-5">Accept Recurring Payments</a>
      </Col>
      </Row>
    </Container>
</section>
)


const SubsProcess = () => (
  <section className="page_section voilet_bg">
    <Container>
    <Row>
    <Col md={12} xs={12}>
      <div className="text-center mb-5">
      <h2 className="page_head white">
      How Does Subscription Management Work?
      </h2>
      </div>
      </Col>
      </Row>
    <Row>
    <Col md={4} xs={12}>
    <div class="subs_box bg_border">
            <img src="/images/subscription/create.svg" class="img-responsive" alt=""/>
            <p className="white"><b>Create a plan</b><br/>Via Dashboard or API</p>
    </div>
    </Col>
    <Col md={4} xs={12}>
    <div class="subs_box bg_border">
            <img src="/images/subscription/add.svg" class="img-responsive" alt=""/>
            <p className="white"><b>Add subscribers </b> <br/> &amp; notify</p>
    </div>
    </Col>
    <Col md={4} xs={12}>
    <div class="subs_box">
            <img src="/images/subscription/auth.svg" class="img-responsive" alt=""/>
            <p className="white"><b>Authenticate </b> <br/> &amp; charge</p>
    </div>
    </Col>
    </Row>
    </Container>
</section>
)


const Subscription = () => (
  <div>
     <NextSeo
      title="Recurring Payment | Subscriptions | NACH for India"
      keywords="payment gateway india,best payment gateway,best payment gateway india,payment gateway integration,payment gateway integration India,international payment gateway"
      description="[Free Demo] Recurring Payment: Manage subscriptions, recurring payments and billing. Create custom plans & accept subscription payments via Credit cards, Debit cards and e Mandate."
      />
     <Header/>
     <Banner/>
     <SubsBlock/>
     <RecurringPlan/>
     <PaymentSolution/>
     <Offers/>
     <SubsProcess/>
     <Integration/>
     <Faqs/>
     <Footer/>
  </div>
)

export default Subscription
