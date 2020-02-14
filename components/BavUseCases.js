import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function cases() {
    return [
        { src: '/images/bankverification/zomato.png', head: "First-of-its kind on-demand wage payout solution", logosrc: '/images/bankverification/zomatologo.png', content: "Zomato ensures quick and correct on-boarding of riders using Cashfree’s API." },
        { src: '/images/bankverification/forex.png', head: "Instant verification of money exchangers for Bookmyforex", logosrc: '/images/bankverification/forexlogo.png', content: "The foreign currency exchange platform uses Cashfree for instant bank verification of money exchangers. As a platform facilitating 1600 crores+ currency exchange transactions, accuracy and speed while verifying account is a business prerequisite." },
        { src: '/images/bankverification/zilra.png', head: "No cheque bank a/c verification for Zilra.", logosrc: '/images/bankverification/zilralogo.png ', content: "Cross-border payments processor Zilra no more needs scanned copies of cancelled cheques. It now uses Cashfree to verify the a/c credentials in a paperless manner for onboarding freelancer partners." },
        { src: '/images/bankverification/signzy.png', head: "Reliable E-KYC for Signzy", logosrc: '/images/bankverification/signzylogo.png', content: "Signzy trusts Cashfree for reliable and real-time verification of bank account number as a part of its KYC suite." }
    ];
}

function BavUseCases() {
    return (
        <Carousel className="casestudy_slider testimonial_slider" indicators={false}>
            {cases().map(slide => (
                <Carousel.Item>

                    <Row>
                        <Col md={6} xs={12}>
                            <div className="illus_sec product_img">
                                <div className="illus_img product_img_bg">
                                </div>
                                <Image src={slide.src} fluid />
                            </div>
                        </Col>
                        <Col md={6} xs={12}>

                            <div className="content_testi">
                                <Image src={slide.logosrc} fluid className="mb-2 pl-3" />
                                <div className="case_head mb-2 pl-3">
                                    <h3 className="m-0">{slide.head}</h3>
                                </div>
                                <p className="p-3">{slide.content}</p>

                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
export default BavUseCases;
