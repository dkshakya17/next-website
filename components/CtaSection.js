import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CtaSection = () => <section className="page_section">
  <Container>
    <Row>
      <Col md={12} xs={12}>
        <div className="text-center">
          <h2 className="blue">
            Talk to our Payment Experts
          </h2>
          <h5 className="p-3">Have a complex payment flow or require payment related advice ?</h5>
          <a onClick={() => Router.push('/contact-sales')} className="btn-primary">
                Get In Touch
            </a>
        </div>
      </Col>
    </Row>
  </Container>
</section>;

export default CtaSection