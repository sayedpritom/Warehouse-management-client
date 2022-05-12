import React from 'react';
import './Advantages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="container">
                <h1 className="advantages-title text-center">Advantages Of Using a <br /> Warehouse Inventory System</h1>
                <div className="row mt-5">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="cards">
                            <div className="advantage-icons">
                                <FontAwesomeIcon icon={faBarsProgress}/>
                            </div>
                            <h4 className="my-4">Easy To Manage Products</h4>
                            <p className="blog">Product management with various features such as financial reports, product stock, and transactions so that you can  control all the products in your business</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="cards">
                            <div className="advantage-icons">
                                <FontAwesomeIcon icon={faCalendarCheck}/>
                            </div>
                            <h4 className="my-4">Reduce All Manual Work Efficiently</h4>
                            <p className="blog">With an integrated inventory system, you can reduce work manually and speed up completing work, thereby reducing common errors when recording</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="cards">
                            <div className="advantage-icons">
                                <FontAwesomeIcon icon={faMobileScreenButton}/>
                            </div>
                            <h4 className="my-4">System Integrated Mobile Application </h4>
                            <p className="blog">All features on this platform have been integrated with the mobile application so that you can work faster and more efficiently so can control more than one device</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;