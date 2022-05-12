import React from 'react';
import './InventoryFeature.css';
import { Accordion } from 'react-bootstrap';

const InventoryFeature = () => {
    return (
        <div className="inventoryFeature">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-4">
                        <h1 className="heading-1">What Is The Inventory Feature On This Platform</h1>
                        <p className="blog my-5">The inventory system is a feature designed to control and manage warehouse products in real time</p>
                        <button className="common-btn mb-5">Learn More</button>
                    </div>
                    <div className="col-md-7 my-sm-5 my-md-0">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className="accordions">
                                <Accordion.Header>Can I view product reports in the warehouse in real-time? </Accordion.Header>
                                <Accordion.Body>
                                    Yes, of course, you can. The inventory management system on this platform can be monitored in real-time anytime and anywhere and this system has also been integrated with a mobile application so that it can easily control products in the warehouse.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className="accordions">
                                <Accordion.Header>Can you manage and manage product prices? </Accordion.Header>
                                <Accordion.Body>
                                    The inventory management system on this platform makes you able to manage product prices in real-time.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="accordions">
                                <Accordion.Header>Can this platform be integrated with the mobile application? </Accordion.Header>
                                <Accordion.Body>
                                    This platform can be integrated with the mobile application. Mobile application is available for both IOS and Android.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className="accordions">
                                <Accordion.Header>What are your advantages if you upgrade to premium?</Accordion.Header>
                                <Accordion.Body>
                                    The premium package advantage is the best value for your money. It's only $199 per month and you will get: Unlimited update, unlimited admin, custom interface, add list marketplace, unlimited storage, unlimited product stock list.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryFeature;