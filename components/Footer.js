import React, { useState, Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Router from 'next/router'

const Footer = () => (

    <div className="main_footer">
        <Container>
            <Row>
                <Col md={4} xs={12}>
                <div className="cmpny_info">
                <img src="/logo.svg"/>
                <p>Cashfree is a next generation payment gateway that helps Indian businesses both collect and disburse payments via almost 100 payment methods including Visa, MasterCard, Rupay, UPI, IMPS, NEFT, Paytm &amp; other wallets, Pay Later and various EMI options. 15,000+ businesses have processed more than Rs 6000 Crores of payments using Cashfree offerings. Cashfree is backed by Silicon Valley investor Y Combinator and was incubated by Paypal.</p>  
                <ul className="social-logos">
                    <li><a href="https://www.facebook.com/gocashfree/" target="_blank"><img src="/icons/fb.png"/></a></li>
                    <li><a href="https://www.instagram.com/gocashfree/" target="_blank"><img src="/icons/insta.png"/></a></li>
                    <li><a href="https://www.linkedin.com/company/cashfree/?originalSubdomain=in" target="_blank"><img src="/icons/linkedin.png"/></a></li>
                    <li><a href="https://twitter.com/gocashfree" target="_blank"><img src="/icons/twitter.png"/></a></li>
                </ul> 
                </div>  
                </Col>
                <Col md={2} xs={12}>
                <h3>Company</h3>
                <ul className="footmenu">
                    <li><a onClick={() => Router.push('/careers')}>Careers</a></li> 
                    <li><a onClick={() => Router.push('/partner-program')}href="/partner-program">Partner with us</a></li>                    
                    <li><a onClick={() => Router.push('/contact-us')}>Contact us</a></li>
                    <li><a onClick={() => Router.push('/presskit')}>Press Kit</a></li>
                </ul>
                <h3>Legal</h3>
                <ul className="footmenu">
                    <li><a onClick={() => Router.push('/tnc')}>Terms and Condition</a></li>
                    <li><a href="https://cashfree.com/privacypolicy.html">Privacy Policy</a></li>
                </ul>
                <h3>Developers</h3>
                <ul className="footmenu">
                    <li><a href="https://docs.cashfree.com/docs">Documentation</a></li>
                    <li><a href="https://github.com/cashfree">Github</a></li>
                </ul>
                </Col>
                <Col md={3} xs={12}>
                <h3>Products</h3>
                <ul className="footmenu">
                    <li><a onClick={() => Router.push('/payment-gateway-india')}>Payment Gateway</a></li>
                    <li><a onClick={() => Router.push('/auto-collect')}>Auto Collect</a></li>
                    <li><a onClick={() => Router.push('/payouts')}>Payouts</a></li>
                    <li><a onClick={() => Router.push('/marketplace-settlements')}>Marketplace Settlement</a></li>
                </ul>
                <h3>Solutions</h3>
                <ul className="footmenu">
                    <li><a onClick={() => Router.push('/shopify-payment-gateway-india')}>Shopify Payment Gateway</a></li>
                    <li><a onClick={() => Router.push('/woocommerce-payment-gateway-india')}>Woocommerce Payment Gateway</a></li>
                    <li><a onClick={() => Router.push('/magento-payment-gateway-india')}>Magento Payment Gateway</a></li>
                    <li><a href="https://docs.cashfree.com/docs/opencart/guide/">Opencart Payment Gateway</a></li>
                </ul>
                </Col>
                <Col md={3} xs={12}>
                <h3>Knowledge Base</h3>
                
                <ul className="footmenu">
                    <li><a href="http://help.cashfree.com/">Help Center</a></li>
                    <li><a href="https://www.cashfree.com/roundtable">Community for Payment Enthusiasts</a></li>
                </ul>
                <h3>Blog</h3>
                <ul className="footmenu">
                    <li><a href="https://blog.cashfree.com/cod-refunds-cashgram/">Check the future of refunds in India</a></li>
                    <li><a href="https://blog.cashfree.com/enet-hdfc/">Smarter alternative to Enet HDFC &amp; other corporate banking solutions</a></li>
                    <li><a href="https://blog.cashfree.com/how-to-choose-best-payment-gateway-india/">How to choose the best payment gateway in India</a></li>
                    <li><a href="https://blog.cashfree.com/upi-integration/?utm_source=website&amp;utm_medium=content_m&amp;utm_campaign=upi_integration&amp;utm_term=upi%20integration">UPI integration guide</a></li>
                </ul>
                </Col>
            </Row>
            <Row>
            <Col md={12} xs={12}>
            <div className="bootom_footer text-center">
                <p>Cashfree Payments India Private Limited © 2019</p>
            </div>
            </Col>
            </Row>
        </Container>
        <style jsx>{`
        .main_footer{
            background: #7d44f0;
            padding-top: 50px;
        }
        .cmpny_info {
            color:white;
            padding-right: 30px;
        }
        img {
            margin-bottom: 10px;
            max-width: 180px;
        }
        h3{
            font-size: 18px;
            font-weight: 600;
            position: relative;
            width: auto;
            display: inline-block;
            padding-bottom: 0;
           margin: 10px 0;
            color:white;
        }
        p{
            font-weight: 400;
            padding: 5px 0;
            line-height: 22px;
            letter-spacing: .2px;
            font-size: 14px;
            color:rgba(255,255,255,.7);

        }
        a{
         color:rgba(255,255,255,.7);
         font-size: 14px;
         cursor:pointer;
        }
       
        a:hover{
            color:white;
           }
        
        .footmenu {
            list-style: none;
            padding: 10px 0;
        }
        .footmenu li{
         padding:5px 0;
         color:white;
        }
        .social-logos {
            display: inline-flex;
            list-style: none;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            margin: 0;
            padding: 0;
        }
        .social-logos li{
            padding-right:10px;
        }
        .social-logos li img{
            width:30px;
        }
        .bootom_footer {
            color:white;
            border-top: 1px solid #cccccc85;
            padding-top: 10px;
        }
  `}</style>
    </div>
);

export default Footer;