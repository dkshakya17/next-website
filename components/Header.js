import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'



const Header = () => (
  <Navbar collapseOnSelect expand="lg">
    <Container>
      <Link href="/"><Navbar.Brand><Image src="/logo.svg" /></Navbar.Brand></Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Products" id="collasible-product-dropdown" className="megamenu-dropdown">
            <Row className="megamenu m-0">
              <Col md={4} xs={12} className="ulDivMenu">
                <h5>Collections</h5>
                <Link href="/payment-gateway-india">
                  <a className="dropdown-products">
                    <div className="separate">Payment Gateway
                                    <div>
                        <small className="subText">Accept online payments</small>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/recurring-payment">
                  <a className="dropdown-products">
                    <div className="separate">
                      Subscription <span className="early-access">Early Access</span>
                      <div>
                        <small className="subText">Add recurring payments to your business</small>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/auto-collect">
                  <a className="dropdown-products">
                    <div className="separate">Auto Collect
                                        <div>
                        <small className="subText">Reconcile IMPS/NEFT/UPI payments</small>
                      </div>
                    </div>
                  </a>
                </Link>

              </Col>
              <Col md={4} xs={12} className="ulDivMenu">
                <h5>Disbursals</h5>
                <Link href="/payouts">
                  <a className="dropdown-products">
                    <div className="separate">Payouts
                                    <div>
                        <small className="subText">Send money to bank accounts, UPI, Paytm</small>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/cashgram">
                  <a className="dropdown-products">
                    <div className="separate">Cashgram
                                      <div>
                        <small className="subText">Weblink to send money to users</small>
                      </div>
                    </div>
                  </a>
                </Link>

                <Link href="/nodal-account-marketplace-settlements">
                  <a className="dropdown-products">
                    <div className="separate">Marketplace Settlement
                                    <div>
                        <small className="subText">Settle commissions with vendors</small>
                      </div>
                    </div>
                  </a>
                </Link>

              </Col>
              <Col md={4} xs={12} className="ulDivMenu">
                <h5>Others</h5>
                <Link href="/bank-account-verification">
                <a className="dropdown-products">
                  <div className="separate">
                    Bank Account Verification
                                    </div>
                  <div><small className="subText">API to check account validity and holder name</small></div>
                </a>
                </Link>

                <a className="dropdown-products" href="/instant-refunds">
                  <div className="separate">Instant Refunds <span className="early-access">Early Access</span>
                  </div>
                  <div><small className="subText">Payment gateway refunds processed instantly</small></div>
                </a>
                <a className="dropdown-products" href="/upi-payments-stack">
                  <div className="separate"> UPI Stack
                                    </div>
                  <div><small className="subText"> Collect and Disburse UPI Payments</small></div>
                </a>
              </Col>
            </Row>
          </NavDropdown>
          <NavDropdown title="Resources" id="collasible-nav-dropdown">
            <Link href="/resources/preauthorization">
              <a className="dropdown-item">Preauthorization Guide</a>
            </Link>
            <Link href="/resources/merchant-discount-rate">
              <a className="dropdown-item">Merchant Discount Rate</a>
            </Link>
            <Link href="/resources/nach-mandate">
              <a className="dropdown-item">NACH Mandate</a>
            </Link>
            <Link href="/resources/api-banking-india">
              <a className="dropdown-item">API Banking</a>
            </Link>
          </NavDropdown>
          <a className="nav-link" href="https://docs.cashfree.com/docs/" target="_blank">
            Documentation
      </a>
          <Link href="/pricing">
            <a className="nav-link">Pricing</a>
          </Link>
          <Link href="/contact-us">
            <a className="nav-link">Support</a>
          </Link>
          <Link href="/careers">
            <a className="nav-link">Careers</a>
          </Link>

        </Nav>
        <Nav className="flex-row">
          <Nav.Link href="https://merchant.cashfree.com/merchant/sign-up" className="nav_signup_btn btn" target="_blank">Create Account</Nav.Link>
          <Nav.Link href="https://merchant.cashfree.com/merchant/login" className="nav_login_btn btn" target="_blank">
            Login
      </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <style jsx>{`
.dropdown-toggle:after{
  display:none;
}
`}</style>

  </Navbar>
);

export default Header;