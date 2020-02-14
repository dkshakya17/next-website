import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import Link from 'next/link'


  const HomeFaqs = () =>
  <Accordion defaultActiveKey="0">
              <Card>
              <Accordion.Toggle as={Card.Header} eventKey='0'>
              <h5 className="faq_head">
                  Why should I choose Cashfree?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Cashfree is a full stack payments solution. It helps Indian businesses accept and send money and is used by 15000 businesses for vendor payouts, wage payouts, bulk refunds etc.</p>
                        <p>Cashfree is next generation payment gateway that is easy to integrate and supports instant refunds. Cashfree is also India’s leading API banking platform that lets businesses send money round-the-clock and instantly to bank accounts and cards with a simple API that can be integrated with their product, instead of uploading complicated files on their corporate banking portal.</p>
                        <p>Cashfree also offers a split payment solution for marketplaces, a Bank Account Verification API and Auto Collect -- a virtual account solution to match inbound payments to customers.</p>
                        <p>Cashfree is integrated with major platforms like Shopify, Wix, Paypal, Amazon Pay, Google Pay and Ola.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='1'>
              <h5 className="faq_head">
              How is Cashfree payment gateway different from other payment gateways in India?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Cashfree offers the highest number of payment modes in India via a single integration -- including Pay Later, Paytm, Cardless EMI and even recurring subscription payments. Cashfree is the only payment gateway that offers instant refunds versus the industry standard of 5-7 working days -- this ensures Cashfree merchants are able to delight their customers while running business operations smoothly.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='2'>
              <h5 className="faq_head">
              Can I start accepting international payments instantly?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='2'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Yes, it is possible to enable international payments on Cashfree's payment gateway -- talk to us and help us understand your business for quick activation. If you have a Paypal account, <a href="https://blog.cashfree.com/paypal-integration/" target="_blank">connect Paypal to Cashfree </a> and start offering Paypal as a checkout option on the payment page instantly.</p>

                        </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='3'>
              <h5 className="faq_head">
              What is Payouts?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='3'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Payouts is a very simple and fast way for a business to make outward payments in bulk. For example, a marketplace can payout its vendors instantly, in an automated manner via an API or uploading a simple Excel file on the dashboard. Payouts is used by delivery companies to pay wages to their delivery partners instantly, lending companies for instant loan disbursals and e-commerce companies to process refunds quickly for cash on delivery orders.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='4'>
              <h5 className="faq_head">
              Can I get a tailored pricing for my business?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='4'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Yes, we do provide tailored pricing depending on the nature of your business and volume of transactions. For more details, contact us or visit the Pricing page.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='5'>
              <h5 className="faq_head">
              How long does it take to approve my account?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='5'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Once your documents are submitted for review, you should get approved and hear from us in 24 hours. Please reach us over chat or email support@cashfree.com to request a quicker approval and we can try and expedite.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='6'>
              <h5 className="faq_head">
              How to get started on Cashfree?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='6'>
                <Card.Body>
                    <div className="faq_content">
                        <p>We do 100% paperless onboarding for merchants on Cashfree. Following are the steps for integration</p>
                        <ul>
                            <li> 1. <a href="https://merchant.cashfree.com/merchant/sign-up" target="_blank">Signup on Cashfree</a></li>
                            <li>2. Update your business profile and upload scanned copies of business documents</li>
                            <li>3. Choose the product you are interested in. You can try out the products yourself. Login and switch to Test Account.   <a href="https://docs.cashfree.com/docs/" target="_blank">Check integration documentation</a>.</li>
                            <li>4. Our Payment expert will call you in the next 24 hours, share your business requirement and we will help you pick the right set of features.</li>
                            <li>5. Once account is verified, our Product team will help you with the integration.</li>
                            <p>Refer <a href="http://help.cashfree.com/en/collections/350039-how-to-get-started" target="_blank">here</a>  for quick account activation</p>

                        </ul>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
           </Accordion>;

export default HomeFaqs; 
