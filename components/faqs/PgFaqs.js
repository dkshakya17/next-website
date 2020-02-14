import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import Link from 'next/link'


  const PgFaqs = () =>
  <Accordion defaultActiveKey="0">
              <Card>
              <Accordion.Toggle as={Card.Header} eventKey='0'>
              <h5 className="faq_head">
                  Which payments modes do you support?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                    <div className="faq_content">
                        <p>On Cashfree payment gateway you get the widest range of payment options. We support Credit Card, Debit Card, Net Banking, NEFT, IMPS, Paytm and other wallets, UPI via BHIM UPI , Google Pay, PhonePe etc.</p>
                        <p>We also provide multiple bank EMI and cardless EMI options such as Zest Money. With Cashfree payment gateway you can also give your customers Buy Now Pay Later option by using Ola Money Postpaid, ePayLater etc. Our merchants say that Buy Now Pay Later option has increased checkout success rate by 25-30% for high ticket value transactions. For details, visit the <Link href="/payment-gateway-charges/"><a target="_blank">pricing page</a></Link></p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='1'>
              <h5 className="faq_head">
              I sell products to both Indian and international customers, is Cashfree the right payment gateway for me?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Cashfree's domestic and international payment gateway is built for growing businesses. We support 100+ payment modes both domestic and international to help you go global.</p>
                        <p><b>For domestic payments:</b> We support 70+ netbanking options, Credit Card, Debit Card, NEFT, IMPS, Paytm and other wallets, UPI via BHIM UPI , Google Pay, PhonePe etc. We also provide multiple bank EMI and cardless EMI options such as Zest Money, along with Buy Now Pay Later option (Ola Money Postpaid, ePayLater etc.)</p>
                        <p><b>For international customers:</b> On Cashfree payment gateway, you can show your products in the home currency of your customers. We support 30+international currencies. As payments mode we support international cards, Diners Club International and AMEX. Paypal is trusted payment mode across the global, on Cashfree, you can integrate your existing merchant PayPal account and start accepting international payments from day one.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='2'>
              <h5 className="faq_head">
              What are the payment gateway charges?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='2'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Simple and user-friendly: 1.75%. There is Zero Setup fee and we charge no annual maintenance fee. For a detailed breakdown of payment gateway charges by payment mode, visit our <Link href="/payment-gateway-charges/"><a target="_blank">pricing page</a></Link>.</p>

                        </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='3'>
              <h5 className="faq_head">
              Can I sign up as an individual?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='3'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Yes, you can sign up as an individual for payment gateway. Please share your personal address proof instead of the business registration details. Here is the <a href="http://help.cashfree.com/en/articles/1957862-what-are-the-documents-required-at-the-time-of-sign-up" target="_blank">list of documents</a> required for integration.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='4'>
              <h5 className="faq_head">
              How many days does the integration takes?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='4'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Cashfree is the easiest payment gateway solution for any developer. You can do the integration on any website with any stack. We have Simple Payment APIs with detailed documentation and SDKs for all major platforms. With responsive developer support, integrating Cashfree is a smooth experience!</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='5'>
              <h5 className="faq_head">
              In which languages do you have integration kits available?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='5'>
                <Card.Body>
                    <div className="faq_content">
                        <p>We have payment gateway integration in PHP, Java, Python, NodeJS, Ruby and.Net.</p>
                        <ul>
                          <li><a href="https://github.com/cashfree/php-pg-integration" target="_blank">  * Reference doc for integration in PHP</a></li>
                          <li><a href="https://github.com/cashfree/pg-integration-kits/tree/master/java" target="_blank">  * Reference doc for integration in Java</a></li>
                          <li><a href="https://github.com/cashfree/pg-integration-kits/tree/master/python" target="_blank">  * Reference doc for integration in Python</a></li>
                          <li><a href="https://github.com/cashfree/pg-integration-kits/tree/master/nodejs/checkout" target="_blank">  * Reference doc for integration in NodeJS</a></li>
                        </ul>
                        <p>With our ready to use integration kits you will be able to integrate payment gateway in no time. Throughout your onboarding process and account activation, you will have a dedicated manager who will assist you at every stage. Our Product experts will also available for any assistance you may need.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='6'>
              <h5 className="faq_head">
              Can I do payment gateway integration in Android & iOS apps?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='6'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Yes, You can use our library to integrate Cashfree Payment Gateway directly into your Android or iOS app using CashfreeSDK. CashfreeSDK has been designed to offload the complexity of handling and integrating payments in your app.</p>
                        <ul>
                            <li>Follow the link to check out CashfreeSDK  <a href="https://docs.cashfree.com/docs/android/guide/" target="_blank">integration in Android.</a></li>
                            <li>Follow the link to check out CashfreeSDK   <a href="https://docs.cashfree.com/docs/ios/guide/" target="_blank">integration in iOS.</a></li>
                          
                        </ul>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='7'>
              <h5 className="faq_head">
              I want to add Google Pay and other UPI options on the checkout page. How to do that?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='7'>
                <Card.Body>
                    <div className="faq_content">
                        <p>At Cashfree, we provide widest range of UPI integrations including Webflow, intent flow, Google Pay integration and UPI SDK integration. You need to just share your requirement and our UPI payment experts will help you analyze the various UPI modes and recommend the best one as per your business requirement.</p>  
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='8'>
              <h5 className="faq_head">
              Is there any list of banned items for which Cashfree payment gateway services will not be available?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='8'>
                <Card.Body>
                    <div className="faq_content">
                        <p>As a payments company we strive to cater to all businesses, however there are some services and goods, for which we donot provide our payment gateway services. Here is the <a href="https://www.cashfree.com/tnc" target="_blank">list of banned items.</a></p>  
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='9'>
              <h5 className="faq_head">
              What is the procedure for Cashfree payment gateway integration?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='9'>
                <Card.Body>
                    <div className="faq_content">
                        <p>We do 100% paperless onboarding for merchants on Cashfree Payment Gateway. Following are the steps for integration</p>  
                        <ul>
                          <li><a href="https://www.cashfree.com/payment-gateway-india" target="_blank"> Signup on Cashfree</a></li>
                         <li>Update your business profile and upload scanned copies of business documents</li>
                         <li>You can try out the payment gateway yourself. Login and switch to Test Account. <a href="https://docs.cashfree.com/docs/pg.html" target="_blank">Check integration documentation.</a> </li>
                         <li>Our Payment expert will call you in next 24 hours, share your business requirement and we will help you pick the right set of features.</li>
                         <li>Once account is verified, our Product team will help you with the integration.</li>
                        </ul>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='10'>
              <h5 className="faq_head">
              What are the documents required for integration?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='10'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Once you sign-up, to activate your Cashfree merchant account you need to share business details along with scanned copies of the following business documents. Here is the list of documents your need to upload. Here is the <a href="http://help.cashfree.com/en/articles/1957862-what-are-the-documents-required-at-the-time-of-sign-up" target="_blank">list of documents required for integration</a> </p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            
           </Accordion>;

export default PgFaqs; 
