import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function cases() {
    return [
      { src:'/images/payouts/grab_testimonial.png',head:"First-of-its kind on-demand wage payout solution", logosrc:'/images/payouts/grab_logo.png', content:"10,000 Grab delivery partners carrying out thousands of deliveries daily, use Cashfree Payouts to withdraw earnings to their bank account, whenever they want, instantly. The delivery partners just need to open their Partner App and request a payout of their daily earnings.Paying wages faster leads to Partner happiness and best in industry Partner retention rate for Grab." },
      { src:'/images/payouts/nykaa_testimonial.png',head:"Instant refund processing solution for cash on delivery orders", logosrc:'/images/payouts/nykaa_logo.png', content:"Nykaa uses Payouts to send speedy refunds to customers. Once the customer requests a refund, the operations team creates and sends a Cashgram link. The customer can request a payout by sharing bank account, UPI-BHIM ID or PayTM account.Once approved by the operations team, money is transferred instantly to the customer's preferred account." },
      { src:'/images/payouts/rummy_testimonial.png',head:"Real-time player cashouts on gaming websites", logosrc:'/images/payouts/rummycircle_logo.png', content:"With just the click of a 'Withdraw' button, players on RummyCircle are able to receive their winnings in their bank accounts, instantly.By offering API driven Payouts 24x7, RummyCircle is able to offer the best gaming experience to players which greatly enhances engagement and revenue." }
    ];
  }

function CaseStudy() {
    return (
        <Carousel className="casestudy_slider testimonial_slider" indicators={false}>
         {cases().map(slide => (
              <Carousel.Item>
                {/* <Row>
                      <Col md={12} xs={12} className="w-100">
                       
                        </Col>
                 </Row> */}
                  <Row>
                      <Col md={6} xs={12}>
                        <div className="illus_sec product_img">
                                <div className="illus_img product_img_bg">
                                </div>
                                <Image src={slide.src} fluid/>
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                           <div className="case_head mb-2 pl-3">
                             <h3 className="m-0">{slide.head}</h3>  
                          </div>
                            <div  className="content_testi">
                            <Image src={slide.logosrc} fluid/>
                            <p>{slide.content}</p>  
                           
                        </div>
                    </Col>
                 </Row>
              </Carousel.Item>     
              ))} 
        </Carousel>
    );
  }
  export default CaseStudy;
