import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import Link from 'next/link'


  const PayoutsFaqs = () =>
  <Accordion defaultActiveKey="0">
              <Card>
              <Accordion.Toggle as={Card.Header} eventKey='0'>
              <h5 className="faq_head">
              How is Payouts different from using banks for bulk transfers ?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Bulk transfers via bank account happen by uploading a spreadsheet on the banking portal or manually adding every beneficiary before transferring. Cashfree automates bulk transfers fully via APIs AND offers a much simpler alternative to uploading files on a bank portal.</p>
                        <p>Unlike banks, where a single error in a payment file can block all the bulk payments, using Cashfree, even if there are invalid records in a file, valid transfers go through. Reconciliation for failed and invalid transfers is automated so you always know which transfer failed out of hundreds of payments, and why. At Cashfree, new beneficiary addition and activation is instant.</p>
                        <p>Cashfree also allows you to send money to any PayTM account or UPI address in addition to bank accounts, even on holidays.</p>
                        <p>Lastly, all of this can be automated and built into your product or internal systems using our powerful APIs.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='1'>
              <h5 className="faq_head">
              Do I need to be a registered business ?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Yes, we need you to be a business. If you are not yet registered as a business but plan to start soon, it is possible to get access to a test account and explore the API. We can also set up an account with limits on payout volume after understanding your business.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='2'>
              <h5 className="faq_head">
              How can I get started ? What documents are needed ?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='2'>
                <Card.Body>
                    <div className="faq_content">
                        <p>We require a cancelled cheque, proof of business registration, PAN card of business and business owners.</p>
                        <p>To get started, you can contact us and request to be called back. We will reach out, understand your business and get you started. You can also Sign Up here and share the required details. Your account manager will contact you. Meanwhile, you can also look at the API doc and try things using test credentials.</p>
                        </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='3'>
              <h5 className="faq_head">
              Is it simpler to send mass payments via bulk file uploads or via APIs ?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='3'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Using bulk file uploads or manual transfers requires no technical expertise and is the quickest way to get started. Integrating the API can take a day or two depending on the complexity of integration. Many businesses start by using the bulk file upload or manual transfer option, and gradually automate operations by integrating the API.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='4'>
              <h5 className="faq_head">
              How long does it take to transfer funds ?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='4'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Transfers to bank accounts happen instantly or within a few minutes, depending on your business requirement. Transfers for amounts in excess of Rs 2,00,000 are restricted by banking hours and can take longer. A payout to UPI-BHIM ID or PayTM wallet is instant.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='5'>
              <h5 className="faq_head">
              Can I transfer funds on Sundays and bank holidays ?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='5'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Yes, it is possible to make bulk payments even on Sundays and bank holidays.</p>
                       
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='6'>
              <h5 className="faq_head">
              What happens in case the account details are incorrect ?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='6'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Transfers to incorrect account details fail instantly. For certain banks, it may take upto 24 hours to receive a confirmation of failure.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='7'>
              <h5 className="faq_head">
              Do you support all banks and bank accounts ?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='7'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Yes, you can send money to any active savings or current bank account in India. However, NRE and NRO bank accounts are not supported.</p>  
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='8'>
              <h5 className="faq_head">
              Do you support payouts to and from other countries ?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='8'>
                <Card.Body>
                    <div className="faq_content">
                        <p>It is possible to send a mass payout to India from another country. The purpose of the payment must be known while setting up the account.</p>  
                        <p>An Indian business can also send a payout to other countries. However, there are restrictions around the volume of payments and the purpose of payments. Get in touch with us to learn more.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            
           </Accordion>;

export default PayoutsFaqs; 
