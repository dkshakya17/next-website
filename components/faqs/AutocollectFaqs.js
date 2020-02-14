import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import Link from 'next/link'


  const AutoCollectFaq = () =>
  <Accordion defaultActiveKey="0">
              <Card>
              <Accordion.Toggle as={Card.Header} eventKey='0'>
              <h5 className="faq_head">
              Is Autocollect same as cash management services provided by banks?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Cashfree Autocollect helps not only collect incoming bank transfers and UPI payments but also track and automatically reconcile payments. Also Cashfree Autocollect uses Virtual account and Virtual UPI IDs to collect payments, while most banks do not provide this facility.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='1'>
              <h5 className="faq_head">
              What is a Virtual Account?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                    <div className="faq_content">
                       <p>Virtual Account is a pass through account linked to a real bank account. The account is used to improve inward payments reconciliations. When a business receives payments from multiple sources and over a period of time, it gets difficult to track-who paid and which reason. This is usually reconciled manually by matching reference numbers in the bank statements with screenshots provided by a payer. By creating multiple virtual accounts mapped to the same account, it becomes possible to reconcile different incoming transactions into a bank account. With Cashfree autocollect- cash management services, you can generate any number of virtual accounts or UPI IDs for each payer or invoice and share a/c details while receiving payments. For repeated customers you can use a dedicated virtual account or UPI ID.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='2'>
              <h5 className="faq_head">
              Can I hold money in a Virtual account?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='2'>
                <Card.Body>
                    <div className="faq_content">
                        <p>No, it is not possible to hold money in the account. The payment so received eventually passes to the linked real bank account. The virtual account here is used only for payments reconciliation.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='3'>
              <h5 className="faq_head">
              Some banks provide virtual bank account service, does cashfree have any advantage over such accounts?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='3'>
                <Card.Body>
                    <div className="faq_content">
                        <p>For most banks, Virtual account payments can be received only using NEFT or RTGS; IMPS payments fail. The payments are not instant and restricted by banking hours. Using Cashfree cash management services solution, funds can be remitted to the virtual account through all bank transfer modes including UPI, IMPS, NEFT, RTGS and even Cheques. Cashfree also helps you create Virtual UPI IDs to accept payments through any UPI app such as WhatsApp or Google Pay. Moreover, for banks, reconciliation of payments happens through files sent over email, which is a once a day reconciliation process. For Cashfree, payment confirmation can be received through an API which is a real-time system update for receipt of funds. Cashfree also supports fully numeric virtual accounts unlike many banks which work on all bank interfaces -- alpha-numeric bank accounts provided by banks do not work on many of the older bank interfaces, especially on mobile.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='4'>
              <h5 className="faq_head">
              Can I use the cash management services for outward payments as well?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='4'>
                <Card.Body>
                    <div className="faq_content">
                        <p>No, however for automating outward payments you can use Cashfree Payouts. It is bulk disbursal solution that helps you send money to any UPI-BHIM ID, Paytm wallet, debit card or bank account. With inbuilt bank account verification feature, you can verify the bank account details and ensure that payments hit the right account. Checkout Payouts here.</p>
                    </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='5'>
              <h5 className="faq_head">
              Is any KYC required for creating a virtual account?
              </h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='5'>
                <Card.Body>
                    <div className="faq_content">
                        <p>No there is no KYC required for creating the account. You can create any number of virtual accounts and virtual UPI IDs using cashfree cash management services.</p>
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

export default AutoCollectFaq; 
