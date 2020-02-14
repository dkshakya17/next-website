import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import Link from 'next/link'


  const SubsFaqs = () =>
  <Accordion defaultActiveKey="0">
              <Card>
              <Accordion.Toggle as={Card.Header} eventKey='0'>
              <h5 className="faq_head">
              What is a subscription?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                    <div className="faq_content">
                        <p>When you want to bill your customer for continued usage of your product or service, instead of raising a payment request each time, you can provide an option to your user to authorize automatic deduction of billed amount from his bank/Debit/Credit card as the case may be. For this user needs to give authorization to you. This arrangement is called subscription.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='1'>
              <h5 className="faq_head">
              What is subscription management software?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Subscription management starts from creating plans that have one or more people who want to avail the service and pay for the usage on a recurring basis.</p>

                        <p>It involves creating plans, defining pricing model and then adding users and generating billing based on the defined pricing model and actual consumption.</p>

                        <p>Companies of all sizes face the question of whether to build or buy a billing solution. Cashfree Subscription Management Software powers you to enable recurring payment schedule, control the billing cycle and get instant alerts on subscription activity. All you have to do is to link a plan to the customer and Cashfree takes care of the rest.</p>

                        <p>The service is available as a Dashboard feature and as API.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='2'>
              <h5 className="faq_head">
              Can Cashfree subscription work with other payment gateway service providers as well?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='2'>
                <Card.Body>
                    <div className="faq_content">
                        <p>No, Cashfree's Subscription Management Software is not configurable with other payment gateways.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='3'>
              <h5 className="faq_head">
              How do recurring payment on Credit Cards work in India?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='3'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Credit cards provided by the popular card networks MasterCard and Visa support auto-deduction of recurring payment. For this the card holder needs to authorize the payment to the specified merchant which can be done through a normal Two-Factor Authentication or 3D Secure flow.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='4'>
              <h5 className="faq_head">
              How do recurring payment on Debit Cards work in India?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='4'>
                <Card.Body>
                    <div className="faq_content">
                     <p>Currently, not all banks support auto-deduction of payments. Auto-deduction for recurring payment are allowed on Mastercard and Visa network cards issued by following banks:</p>

                    <ul>
                    <li>Kotak Mahindra Bank</li>
                    <li>Citibank</li>
                    <li>Canara Bank</li>
                    <li>Standard Chartered Bank</li>
                    <li>ICICI Bank</li>
                    </ul>
                    <p>Similar to Credit cards, Debit card holders also need to authorize the payment to the specified merchant which can be done through a normal Two-Factor Authentication or 3D Secure flow.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='5'>
              <h5 className="faq_head">
              What is the two-factor authentication (2FA) and how does it work in case of recurring payments?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='5'>
                <Card.Body>
                    <div className="faq_content">
                        <p>A card holder when authenticating the merchant to deduct recurring payments, needs to do a one-time transaction which is also the first transaction. To ensure the authenticity of user and account, an extra layer of security is added which involves passing the transaction request following a 2FA process.</p>
                        <p>In case of recurring payments, as the user does the 2FA, the auto-deduction is enabled.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='6'>
              <h5 className="faq_head">
              Which payment instruments can be used for making recurring payments?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='6'>
                <Card.Body>
                    <div className="faq_content">
                        <p> Credit card, Debit cards and Nach or E-Mandate are the widely used instruments for recurring payments.</p>
                        <p><b>Credit cards :</b> MasterCard and Visa network cards-issued by any bank in India.</p>
                        <p><b>Debit cards:</b> Mastercard and Visa network cards-issued by ICICI Bank, Kotak Mahindra Bank, Citibank and Canara Bank.</p>
                        <p><b>Nach or E mandate :</b> A paperless authentication feature introduced by NPCI. The registration can be done through netbanking or Debit cards.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='7'>
              <h5 className="faq_head">
              Can I cancel a plan or subscription?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='7'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Yes, you can cancel a plan or subscription. However once canceled, it can’t be restored, you need to create a new plan or subscription</p>  
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='8'>
              <h5 className="faq_head">
              Can I edit a plan or subscription?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='8'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Yes, editing a plan or subscription is possible. You can directly change the plan/subscription details from the Cashfree Subscription Management software dashboard, however the changes that you make happen for future billing and do not take effect from retrospective effect.</p>  
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='9'>
              <h5 className="faq_head">
              We provide one subscription-multiple users model. Can We use Cashfree Subscriptions for subscription management?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='9'>
                <Card.Body>
                    <div className="faq_content">
                       <p>Yes, Using Cashfree you can generate a subscription and through your internal system tag as many users as you wish to the subscription. Given the payment address will be single, cashfree will do the billing for that address.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='10'>
              <h5 className="faq_head">
              Are current accounts supported for Cashfree Subscriptions?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='10'>
                <Card.Body>
                    <div className="faq_content">
                        <p>No, Cashfree Subscriptions does not support current accounts.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            
           </Accordion>;

export default SubsFaqs; 
