import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Router from 'next/router'
import Image from 'react-bootstrap/Image'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
import AutoCollectFaq from '../components/faqs/AutocollectFaqs'
import { NextSeo } from 'next-seo'
import '../styles/custom-theme.scss'
import CtaSection from '../components/CtaSection'



const Banner = () => (
  <>
  <section className="hero_section">
    <Container>
      <Row>
        <Col md={6} xs={12} className="center_content">
        <div className="banner_cont">
         <h4  className="banner_subhead white">AutoCollect</h4>
        <h1 className="banner_head white">
        Cash Management Services 2.0
        </h1>
        <p>Match inbound payments to customers automatically using virtual account and virtual UPI IDs.</p>
        </div>
        <a onClick={() => Router.push('/contact-sales')} className="btn-primary">
                    Get Started
        </a>
        </Col>
        <Col md={6} xs={12}>
          <div className="banner_img">
          <Image src="/images/autocollect/autocollect_banner_bg.png"  fluid/>
          <Image src="/images/autocollect/autocollect_banner.gif" className="autocollect_bg"  fluid/>
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


const Services = () => (
    <section className="page_section">
    <Container>
      <Row>
        <Col md={12} xs={12}>
        <div className="text-center">
        <h2 className="page_head">
        Advanced cash management services for all
        </h2>
        </div>
        </Col>
      </Row>
  
      <Row>
        <Col md={4}  sm={4} xs={12}>
        <div className="subs_offer w-100">
        <div className="feature_cont"><h3 className="tile_head">Unique Virtual account for each payer</h3>
        <p>Use a unique account and virtual UPI ID for each payer. Opt for fully numeric or branded virtual a/c numbers or UPI IDs-easy to remember, easy to share.</p></div>
        </div>
        </Col>
        <Col md={4}  sm={4} xs={12}>
        <div className="subs_offer w-100">
        <div className="feature_cont"><h3 className="tile_head">All bank and UPI transfers</h3>
        <p>Accept payments via IMPS, RTGS, NEFT, and cheques. Create virtual UPI IDs for fast and simple payment collection from any UPI App.</p></div>
        </div>
        </Col>
        <Col md={4}  sm={4} xs={12}>
        <div className="subs_offer w-100">
        <div className="feature_cont"><h3 className="tile_head">Auto bank reconciliation</h3>
        <p>Freedom from manual reconciliation: Know who paid and when</p></div>
        </div>
        </Col>
      </Row>
    </Container>
  </section>
  )


  function Cases() {
    return [
      { src:'/images/autocollect/b.png', head:'B2B retailer distributor payments',text:'E Distributors use Auto Collect cash management services to reconcile inbound bank transfers received from 20,000 plus retailers. Since transactions are reconciled instantly, retailers are able to purchase inventory faster and free up working capital.' },
      { src:'/images/autocollect/l.png', head:'Loan repayments',text:'Lenders use AutoCollect cash management services to collect repayments for short term loans from consumers and businesses. Bank transfers are preferred since it is the least expensive and fastest way to move money. The lender receives the money within the same day. Instead of reconciling bank statements manually  to track each incoming payment from a user, a payment is updated automatically.' },
      { src:'/images/autocollect/s.png', head:'Bill and fee payments',text:'Schools and educational institutes, use AutoCollect cash management services to receive fee payments. Every student is assigned a unique virtual UPI ID based on the roll no. For ex - cashid.rollnumber@icicibank Payments into a virtual UPI ID are reconciled instantly on receipt. Similarly  utility bill payments  for phone, internet and DTH are be collected by creating virtual UPI IDs based on phone numbers. For ex - cashid.phonenumber@icicibank AutoCollect enables payment collection without the user having to visit the billers app or website to make a payment.' }

    ];
  }
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 320 },
      items: 1,
    },
  };


  const HowItWorks = () => (
    <>
    <section className="page_section">
      <Container>
        <Row>
          <Col md={12} xs={12}>
          <div className="text-center mb-5">
          <h2 className="page_head">
          See how does it work?
          </h2>
          </div>
          </Col>
        </Row>
      </Container>
       <Container className="auto_collect">
      
      <Row>
        <Col md={4} xs={12}>
        <div className="ecol-bxwrap">
            <h5 className="merchant">Merchant</h5>
            <h2>01. Create virtual account</h2>
            <p>Create a unique mapping of virtual account or Virtual UPI ID assigned to every payer/user. <a href="https://docs.cashfree.com/docs/cac/guide/#create-virtual-account-request">REST APIs</a> available to create accounts automatically, in real-time.</p>
        </div>
        </Col>
      </Row>
      <Row>
      <Col md={{ span: 4, offset: 8 }}>
        <div class="ecol-bxwrap">
            <h5 class="customer">Customer</h5>
            <h2>02. Notify user</h2>
            <p>Share the account for payment for every user via email/SMS/WhatsApp or notify through your App.</p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col md={4} xs={12}>
        <div class="ecol-bxwrap">
            <h5 class="customer">Customer</h5>
            <h2>03. User pays</h2>
            <p>Payer pays to the assigned account using any UPI App like Google Pay, BHIM, Paytm, Whatsapp OR through their online net banking account.</p>
        </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 8 }}>
        <div class="ecol-bxwrap ecol-bxwraplst">
            <h5 class="merchant">Merchant</h5>
            <h2>04. Reconciliation notification</h2>
            <p>Once the payment is received -- immediately, or within 2 hours for NEFT transfers -- you are instantly notified about the transaction and payment details via a <a href="https://docs.cashfree.com/docs/cac/guide/#webhook">webhook</a>. The user's payment is thus acknowledged.</p>
        </div>
        </Col>
      </Row>
      <div class="invoice"></div>
      <div class="bank-strip"></div>
      <div class="notification"></div>
      <div class="invoice-upi-card"></div>
      <div class="upi-card"></div>
      <div class="upi-card-shadow"></div>
      <div class="upi-gif">
          <img alt="cash management service using virtual account, virtual bank account and virtual UPI ID" class="lazy upigif" src="./images/autocollect/paymentmode.gif"/>
      </div>
    </Container>
    <style> {`
    .auto_collect{
        outline: none;
        background-image: url(./images/autocollect/bg.jpg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: relative;
        padding: 20px 0;
    }
    .merchant {
      color: #00b7b1;
      background: #b8efed;
      padding: 6px 8px;
      display: inline-block;
      text-transform: uppercase;
    }
    .ecol-bxwrap p {
      color: #717983;
      font-size: 20px;
    }
    .ecol-bxwrap h2 {
      margin: 0;
      margin-left: -48px;
      margin-bottom: 20px;
      color: #6a5594;
      font-weight: bold;
      text-transform: uppercase;
  }
    .customer {
      color: #f5b900;
      background: #f0dda2;
      padding: 6px 8px;
      display: inline-block;
      text-transform: uppercase;
    }
    .ecol-bxwrap {
          margin: 120px 0;
          margin-left: 20px;
      }
      .ecol-bxwrap h5 {
        padding: 6px 8px;
        display: inline-block;
        font-size: 14px;
        text-transform: uppercase;
    }
    .upi-gif {
      position: absolute;
      top: 56%;
      left: 47%;
      width: 485px;
    }
    .invoice {
      background-image: url(./images/autocollect/invoice.png);
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      height: 100%;
      width: 325px;
      top: 38%;
      left: 28%;
    }
    .invoice-slide-out{
      animation: slide-1 1s forwards;
    }
    .invoice-slide-in{
        animation: slide-2 1s forwards;
    }
    @-webkit-keyframes slide-1 {
        0%{
            top: 35%;
            left: 31%;
        }
        100% { 
            top: 40%;
            left: 44%; 
        }
    }
    
    @keyframes slide-1 {
        0%{
            top: 35%;
            left: 31%;
        }
        100% { top: 40%;
            left: 44%; }
    }
    @-webkit-keyframes slide-2 {
        0%{
            top: 40%;
            left: 44%;
        }
        100% { 
            top: 35%;
            left: 31%;
        }
    }
    
    @keyframes slide-2 {
        0%{
            top: 40%;
            left: 44%;
        }
        100% { 
            top: 35%;
            left: 31%;
        }
    }
    .bank-strip {
      background-image: url(./images/autocollect/bank-statement-strip.png);
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      height: 100%;
      width: 300px;
      top: 86%;
      left: 15%;
  }
  .bank-strip-up{
    animation: bank-up 0.5s forwards;
    }
    .bank-strip-down{
        animation: bank-down 0.5s forwards;
    }
    @-webkit-keyframes bank-up {
        0%{
            width: 300px;
            top: 86%;
            left: 23%;
        }
        100% { 
            width: 340px;
            top: 85%;
            left: 22%; 
        }
    }

    @keyframes bank-up {
        0%{
            width: 300px;
            top: 86%;
            left: 23%;
        }
        100% {
            width: 340px;
            top: 85%;
            left: 22%; 
        }
    }


    @-webkit-keyframes bank-down {
        0%{
            width: 340px;
            top: 85%;
            left: 22%; 
        }
        100% { 
            width: 300px;
            top: 86%;
            left: 23%;
        }
    }

    @keyframes bank-down {
        0%{
            width: 340px;
            top: 85%;
            left: 22%; 
        }
        100% {  
            width: 300px;
            top: 86%;
            left: 23%;
        }
    }
  .notification {
    background-image: url(./images/autocollect/notification.png);
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    height: 100%;
    width: 94px;
    top: 81%;
    left: 30%;
  }
  .notification-up{
    animation: up 0.5s forwards;
    }
    .notification-down{
        animation: down 0.5s forwards;
    }

    @-webkit-keyframes up {
        0%{
            width: 94px;
            top: 83%;
            left: 36%;
        }
        100% { 
            width: 105px;
            top: 81%;
            left: 35%; 
        }
    }

    @keyframes up {
        0%{
            width: 94px;
            top: 83%;
            left: 36%;
        }
        100% {
            width: 105px;
            top: 81%;
            left: 35%; 
        }
    }


    @-webkit-keyframes down {
        0%{
            width: 105px;
            top: 81%;
            left: 35%; 
        }
        100% { 
            width: 94px;
            top: 83%;
            left: 36%; 
        }
    }

    @keyframes down {
        0%{
            width: 105px;
            top: 81%;
            left: 35%; 
        }
        100% {  
            width: 94px;
            top: 83%;
            left: 36%; 
        }
    }
  .invoice-upi-card {
    background-image: url(./images/autocollect/upi-invoice-card.png);
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    height: 100%;
    width: 319px;
    top: 30%;
    left: 8%;
}
.upi-card {
  background-image: url(./images/autocollect/upi-card-flat.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  height: 100%;
  width: 225px;
  top: 3%;
  left: 60%;
}
.upi-card-up{
  animation: upi-up 0.5s forwards;
}
.upi-card-down{
  animation: upi-down 0.5s forwards;
}


@-webkit-keyframes upi-up {
  0%{
      width: 225px;
      top: 4%;
      left: 65%;
  }
  100% { 
      width: 250px;
      top: 0%;
      left: 65%;    
  }
}

@keyframes upi-up {
  0%{
      width: 225px;
      top: 4%;
      left: 65%;
  }
  100% {
      width: 250px;
      top: 0%;
      left: 65%;     
  }
}


@-webkit-keyframes upi-down {
  0%{
      width: 250px;
      top: 0%;
      left: 65%;
   
  }
  100% { 
      width: 225px;
      top: 4%;
      left: 65%;
  }
}

@keyframes upi-down {
  0%{
      width: 250px;
      top: 0%;
      left: 65%;
  
  }
  100% {  
      width: 225px;
      top: 4%;
      left: 65%;
  }
}

.upi-card-shadow {
  background-image: url(./images/autocollect/upi-card-shadow.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  height: 100%;
  width: 225px;
  top: 3%;
    left: 58%;
}
@media only screen and (max-width:767px) and (min-width:320px){
  .invoice,.bank-strip,.notification,.invoice-upi-card,.upi-card-shadow,.upi-card,.upi-gif{
    display:none !important;
  }
  .auto_collect{
    background:none;
    padding: 0 15px;
  }
  .ecol-bxwrap,.ecol-bxwrap h2{
    margin:0px !important;
    font-size: 1.5rem;
    margin-bottom: 20px !important;
  }
  .ecol-bxwrap p{
    font-size:1rem;
  }

}
    
    `}
    </style>
  </section>
  
  </>
  )
  const UseCase = () => (
    <>
    <section className="page_section">
       <Container>
      <Row>
        <Col md={12} xs={12}>
        <div className="text-center">
        <h2 className="page_head">
        Use Case
        </h2>
        </div>
        </Col>
      </Row>
    </Container>
   <Carousel responsive={responsive}
     arrows={true}
     infinite={false}
     centerMode={true}
     slidesToSlide={1}
     autoPlay={false}
     ssr={true}
     removeArrowOnDeviceType={["mobile"]}
     itemClass="use_case"
    >
      {Cases().map(slide => (
               <div className="usecase_box row m-0">
               <div className="img-box col-md-4 col-xs-12 pull-left">
                   <img className="lazy upigif"  src={slide.src}/>
               </div>
               <div className="cont-box col-md-8 col-xs-12  pull-right">
                   <h3>{slide.head}</h3>
                   <p>{slide.text}</p>
               </div>
               
           </div>   
              ))}  
    </Carousel>
  </section>
    <style> {`
      .react-multiple-carousel__arrow{
        outline: none;
    }
    .react-multiple-carousel__arrow--left::before {
        content: "<";
    }
    .react-multiple-carousel__arrow--right::before {
        content: ">";
    }
    
    `}
    </style>
  </>
  )


const ManagementServices = () => (
    <>
  <section className="page_section auto_bg">
  <Container>
    <Row>
        <Col md={12} xs={12}>
        <div className="text-center">
        <h2 className="page_head mb-5">
        Power up your cash management services
        </h2>
        </div>
        </Col>
    </Row>
    <Row>
        <Col md={10} xs={12}>
          <Row>
          <Col md={5} xs={12}>
          <div className="autocollect_box">
              <h2>Multiple Settlement <br/>Accounts</h2>
              <p>Every virtual account can be mapped to it's own settlement account. Helps manage your cash better.</p>
          </div>
          <div className="autocollect_box">
              <h2>Faster Settlements</h2>
              <p>Receive money in less than 3 hours* into your bank account.</p>
          </div>
          </Col>
          <Col md={5} xs={12} className="pt-2">
          <div className="autocollect_box">
              <h2>Activation Control</h2>
              <p>Create Virtual Account in real time. Deactivate an account any time you wish. Transfers initiated to a disabled virtual account get rejected.</p>
          </div>
          <div className="autocollect_box">
              <h2>Customise Notifications</h2>
              <p>Choose different set of email addresses and phone numbers for every new virtual account</p>
          </div>
          </Col>
          </Row>
        </Col>
    </Row>
  </Container>
</section>
<section className="page_section">
  <Container>
    <Row>
        <Col md={12}  sm={12} xs={12}>
            <div className="cming_soon_box subs_diduknow for_dev">
            <div className="row">
                <div className="col-md-2 col-sm-2 col-xs-12">
                <p className="box_head">
                For <br/> Developers
                </p>
                </div>
                <div className="col-md-7 col-sm-8 col-xs-12 d-flex align-items-center">
                <p>Checkout the Cash Management Services API documentation.</p>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12 text-center d-flex align-items-center">
                <a href="https://docs.cashfree.com/docs/cac/guide/" target="_blank" className="btn-white">View More</a>
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
 .auto_bg {
     background-image: url(../images/autocollect/curv_bg.jpg);
     background-repeat: no-repeat;
     background-size: cover;
  }
  .autocollect_box h2 {
    color: #6a5594;
    font-weight: bold;
    margin: 0;
    font-size: 24px;
    margin-bottom:10px;
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
        <AutoCollectFaq/>
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
       <h4 className="blue">Link Auto Collect to Cashfree's Payment Disbursal products</h4>
      </div>
      </Col>
      <Col md={4}  sm={4} xs={12}>
      <div className="link_card w-100">
        <div className="link-payment-item">
          <Image src="/images/productcard1.svg"  fluid/>
          <p><b>Payouts</b>  - Send money to any bank account, UPI address or PayTM wallet by uploading a file or via an API.</p>
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


const AutoCollect = () => (
  <div>
     <NextSeo
      title="Virtual Account: Automatically reconcile inbound payments | Cashfree"
      keywords="payment gateway india,best payment gateway,best payment gateway india,payment gateway integration,payment gateway integration India,international payment gateway"
      description="Automatically track customer payments with virtual accounts and virtual UPI IDs. No more manual reconciliation."
      />
     <Header/>
     <Banner/>
     <Services/>
     <HowItWorks/>
     <UseCase/>
     <ManagementServices/>
     <Faqs/>
     <CtaSection/>
     <ProductCards/>
     <Footer/>
  </div>
)

export default AutoCollect
