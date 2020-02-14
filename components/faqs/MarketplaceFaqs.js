import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import Link from 'next/link'


const MarketplaceFaqs = () =>
    <Accordion defaultActiveKey="0">
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
                <h5 className="faq_head">
                    Do I have to use Cashfree payment gateway to use Marketplace Settlements?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
                <Card.Body>
                    <div className="faq_content">
                        <p>It is strongly recommended to <Link href="https://docs.cashfree.com/docs/ces/guide/#pg-integration"><a target="_blank">integrate Cashfree payment gateway for collections along with Marketplace Settlements</a></Link>. This ensures payments are assigned to vendors automatically and settled faster. It is also easier to handle refunds. However, vendor settlements can be carried out for transactions captured through any other medium like cash on delivery or an alternate payment provider.  </p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='1'>
                <h5 className="faq_head">
                    How can I use Marketplace Settlements if I have a webstore on Shopify, Magento, WooCommerce, Martjack, Opencart etc?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
                <Card.Body>
                    <div className="faq_content">
                        <p>All the payments completed via Cashfree payment gateway on your webstore will be available for disbursal via Cashfree's nodal account. These transactions need to be <a href="https://docs.cashfree.com/docs/ces/guide/#add-transaction" target="_blank">assigned to a vendor's ledger</a>  - either manually or via the API. As you add transactions on Shopify, Magento or another platform, these will get assigned to your vendors and payment will be settled automatically.</p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='2'>
                <h5 className="faq_head">
                    Do I need a percentage vendor commission structure to split payments?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
                <Card.Body>
                    <div className="faq_content">
                        <p>To split payments you can choose to have a pre-defined percentage for a vendor. It is also possible to specify the vendor commission as a percentage or fixed sum while <a href="https://docs.cashfree.com/docs/ces/guide/#add-transaction" target="_blank"> adding a  transaction</a> and assigning it to a vendor.</p>

                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='3'>
                <h5 className="faq_head">
                    Can I adjust refunds before splitting payments to vendor ?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='3'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Refunds can be managed by  <a href="http://help.cashfree.com/en/articles/1957862-what-are-the-documents-required-at-the-time-of-sign-up" target="_blank"> adjusting the vendor ledger balance</a>. This will ensure the refund amount is adjusted from subsequent vendor settlements.</p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='4'>
                <h5 className="faq_head">
                    Do I need to have a nodal account to use Marketplace Settlements?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='4'>
                <Card.Body>
                    <div className="faq_content">
                        <p>No. Marketplace Settlements lets you run a marketplace using a split payment gateway without having to open and operate a nodal account. Marketplace Settlements runs on Cashfree's managed nodal account and doesn't need you to worry about auditing and compliance.</p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='5'>
                <h5 className="faq_head">
                    How is vendor settlement managaged when there are multiple vendors linked to one transaction?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='5'>
                <Card.Body>
                    <div className="faq_content">
                        <p>At the time of <a href="https://docs.cashfree.com/docs/ces/guide/#add-transaction" target="_blank"> adding a  transaction</a>, you can assign the appropriate percentage of commission or set numeric commission amount. You can also  <a href="https://docs.cashfree.com/docs/ces/guide/#attach-vendor" tagret="_blank">add additional vendors to an existing transaction</a> .</p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='6'>
                <h5 className="faq_head">
                    Can I change the vendor assigned to a transaction?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='6'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Yes. Just like vendors can be attached to a transaction, vendors can also be removed from an  <a href="https://docs.cashfree.com/docs/ces/guide/#detach-vendor" target="_blank"> existing transaction</a> . It is also possible to transfer the ledger balance of one vendor to another vendor.</p>

                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='7'>
                <h5 className="faq_head">
                Can I have different payout schedules for different vendors?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='7'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Yes, this is possible by modifying your account preferences. By default, pending vendor balances get settled automatically daily as per the regular settlement schedule. It is possible to disable automatic settlements and manaually make a settlement request for a particular vendor by mentioning the unique vendor id against the transfer amount. Cashfree checks for available vendor balance and if it's sufficient, we trigger the transfer to the recipients bank account. This process is synchronous i.e. you will receive the transfer status in the same API call. <a href="https://docs.cashfree.com/docs/ces/guide/#get-vendor-transfers">List of settlements can be retrieved here</a>.</p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='8'>
                <h5 className="faq_head">
                Do new vendors get added instantly?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='8'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Yes, your account preferences can be setup to allow vendors to be added automatically with zero lag time. Please consult your account manager or email us at care@cashfree.com to adjust your vendor activation period.</p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='9'>
                <h5 className="faq_head">
                Where is the money kept for marketplace settlement?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='9'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Cashfree maintains centralized nodal accounts with our banking partners, a part of that will be maintained specifically for you. You need not worry about complying with the regulations as Cashfree takes care of it on your behalf.</p>
                       
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='10'>
                <h5 className="faq_head">
                What happens if a payment fails?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='10'>
                <Card.Body>
                    <div className="faq_content">
                        <p>With our stable Payouts system, and intelligent rerouting algorithms, we ensure high transaction success rates. If in case payment fail due incorrect bank account detail, the money will be reversed to your account automatically and you will be notified. When you share correct bank account details we will trigger the payment again.</p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='11'>
                <h5 className="faq_head">
                What if payment is made to the wrong vendor?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='11'>
                <Card.Body>
                    <div className="faq_content">
                        <p>In such a case, you need to report the issue to us , you can drop a mail at care@cashfree.com. Our team will adjust the appropriate amount in the next settlement cycle.</p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='12'>
                <h5 className="faq_head">
                How do I track the vendor payments?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='12'>
                <Card.Body>
                    <div className="faq_content">
                        <p>Using Cashfree advanced dashboard, you will be able to see status of vendor payment for any specific time period, you also get a account statement showing inwards payments through integrated Cashfree split payment gateway and details of outward payments via Cashfree marketplace settlement platform. If the sales are cash on delivery or you are using any other payment collection services , you can upload the transaction details and obtain a consolidated report of inward & outward payments.</p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey='12'>
                <h5 className="faq_head">
                How is the reporting handled?
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='12'>
                <Card.Body>
                    <div className="faq_content">
                        <p> We give you a daily consolidated report of split payments covering all outward payments at the end of the day.</p>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
       
       
    </Accordion>;

export default MarketplaceFaqs; 
