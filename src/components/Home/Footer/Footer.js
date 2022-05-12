import React from 'react';
import glowLeft from '../../../images/header-glow-left.png';
import glowRight from '../../../images/header-glow-right.png';
import './Footer.css';
import logo from '../../../images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className="header-banner-container-0" style={{ backgroundImage: `url(${glowRight}) ` }} >
                <div className="header-banner-container" style={{ backgroundImage: `url(${glowLeft}) ` }}>
                    <div className="p-5">
                        <div className="container">
                            <div className="row justify-content-between footer-top">
                                <div className="col-lg-6">
                                    <h3 className="footer-heading text-white">Develop a more controlled business with an inventory management system</h3>
                                </div>
                                <div className="col-lg-2">
                                    <button className="common-btn">Get Started</button>
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col-lg-5">
                                    <div className="footer-logo">
                                        <img src={logo} alt="" srcSet="" />
                                        <p className="blog text-white my-5">
                                            We are a company that innovates to facilitate businesses in the efficient management of their products
                                        </p>
                                        <ul className="social-icons mb-5">
                                            <li><FontAwesomeIcon icon={faYoutube} /></li>
                                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                                            <li><FontAwesomeIcon icon={faTelegram} /></li>
                                            <li><FontAwesomeIcon icon={faLinkedin} /></li>
                                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <h4 className="footer-headings">Company</h4>
                                    <ul className="footer-links">
                                        <li>Email Address</li>
                                        <li>Services</li>
                                        <li>Career</li>
                                        <li>Community</li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                <h4 className="footer-headings">Features</h4>
                                    <ul className="footer-links">
                                        <li>Accountancy</li>
                                        <li>Invoice</li>
                                        <li>Finance Statements</li>
                                        <li>Inventory</li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                <h4 className="footer-headings">Resources</h4>
                                    <ul className="footer-links">
                                        <li>News and Blogs</li>
                                        <li>Social Media</li>
                                        <li>API development</li>
                                        <li>Brochures</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;