import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function TestimonialSlides() {
    return [
      { src:'/clients/cred.png', alt:'Cred' },
      { src:'/clients/delhibery.png', alt:'delhibery' },
      { src:'/clients/dunzo.png', alt:'dunzo' },
      { src:'/clients/exxo.png', alt:'exxo' },
      { src:'/clients/xiaomi.png', alt:'xiaomi' },
      { src:'/clients/zomato.png', alt:'zomato' }
    ];
  }

function Testimonial(props) {
    return (
        <Carousel className="testimonial_slider" indicators={false}>
         {TestimonialSlides().map(slide => (
              <Carousel.Item>
                  <Row>
                      <Col md={6} xs={12}>
                        <div className="illus_sec product_img">
                                <div className="illus_img product_img_bg">
                                </div>
                                <Image src="/images/testimonials/harshal.jpg" fluid/>
                            </div>
                        </Col>
                        <Col md={6} xs={12}>
                            <div  className="content_testi">
                            <Image src="/images/testimonials/gonoise.png" fluid/>
                            <p> Cashfree is a fantastic product. They have the best rates in the market. At ProfitBooks, we have integrated Cashfree for the users of our billing system and they love it. Best part about Cashfree is the friendly service and regular updates to the offering.</p>  
                            <div  className="user_det">
                            <Image src="/images/testimonials/harshal.jpg" fluid/>
                                    <div  className="testi_pro">
                                        <h2>Harshal Katre</h2>
                                          <p>Founder @ Profit Books </p>
                                    </div>
                            </div>
                        </div>
                    </Col>
                 </Row>
              </Carousel.Item>     
              ))} 
        </Carousel>
    );
  }
  export default Testimonial;
