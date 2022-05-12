import React from 'react';
import './Packages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark  } from '@fortawesome/free-solid-svg-icons';

const Packages = () => {
    return (
        <div  className="packages-container">
            <div className="container">
                <div className="row justify-content-between my-5">
                    <div className="col-md-6">
                        <h1 className="heading-1">Start Now With A Package Price Offer For Your Business</h1>
                    </div>
                    <div className="col-md-5">
                        <p className="blog">Package options are available to optimize your needs. So you can choose the best package</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="packages">
                            <h4 className="text-center package-headings">Basic</h4>
                            <p className="blog text-center">Popular</p>
                            <div className="perMonthPrice text-white text-center">
                                <h3 className="text-white">$159</h3>
                                <p>Per Month</p>
                            </div>
                            <ul>
                                <li><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Unlimited update features</span></li>
                                <li><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Unlimited admin</span></li>
                                <li><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Custom interface</span></li>
                                
                                <li className="unavailable"><FontAwesomeIcon icon={faCircleXmark} className="me-3" /> <span className="specs">Add List MarketPlace</span></li>
                                <li className="unavailable"><FontAwesomeIcon icon={faCircleXmark} className="me-3" /> <span className="specs">Unlimited Storage</span></li>
                                <li className="unavailable"><FontAwesomeIcon icon={faCircleXmark} className="me-3" /> <span className="specs">Unlimited Product List</span></li>
                            </ul>
                            <button>Choose Package</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="packages">
                            <h4 className="text-center package-headings">Professional</h4>
                            <p className="blog text-center">Recommended</p>
                            <div className="perMonthPrice text-white text-center">
                                <h3 className="text-white">$199</h3>
                                <p>Per Month</p>
                            </div>
                            <ul>
                                <li><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Unlimited update features</span></li>
                                <li><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Unlimited admin</span></li>
                                <li><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Custom interface</span></li>
                                
                                <li className=""><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Add List MarketPlace</span></li>
                                <li className=""><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Unlimited Storage</span></li>
                                <li className="unavailable"><FontAwesomeIcon icon={faCircleXmark} className="me-3" /> <span className="specs">Unlimited Product List</span></li>
                            </ul>
                            <button>Choose Package</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="packages">
                            <h4 className="text-center package-headings">Ultimate</h4>
                            <p className="blog text-center">Best Value</p>
                            <div className="perMonthPrice text-white text-center">
                                <h3 className="text-white">$249</h3>
                                <p>Per Month</p>
                            </div>
                            <ul>
                                <li><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Unlimited update features</span></li>
                                <li><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Unlimited admin</span></li>
                                <li><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Custom interface</span></li>
                                
                                <li className=""><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Add List MarketPlace</span></li>
                                <li className=""><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Unlimited Storage</span></li>
                                <li className=""><FontAwesomeIcon icon={faCircleCheck} className="me-3" /> <span className="specs">Unlimited Product List</span></li>
                            </ul>
                            <button>Choose Package</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;