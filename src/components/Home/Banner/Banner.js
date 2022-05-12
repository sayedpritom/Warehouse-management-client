import React from 'react';
import './Banner.css';
import headerImage from '../../../images/header-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${headerImage})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="banner-texts">
                            <h2 className="banner-title text-white">Warehouse stock <br />
                                management <br />
                                solution</h2>
                            <p className="banner-description">Inventory system to control and manage products in the warehouse in real time and integrated to make it easier to develop your business</p>
                            <div className="d-flex flex-wrap align-items-center">
                                <button className="common-btn me-3 my-3">Free Trial 1 Month</button>
                                <FontAwesomeIcon icon={faCirclePlay} className="me-3" />
                                <p className="m-0">How It Works</p>
                            </div>
                            <div className="my-5 d-flex flex-wrap align-items-center">
                                <div className="me-4">
                                    <h1 className="banner-info text-white">14K</h1>
                                    <p className="banner-description mt-0">Brand Owners</p>
                                </div>
                                <div className="me-4">
                                    <h1 className="banner-info text-white">23K</h1>
                                    <p className="banner-description mt-0">Active Users</p>
                                </div>
                                <div className="me-4">
                                    <h1 className="banner-info text-white">500+</h1>
                                    <p className="banner-description mt-0">Partners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;