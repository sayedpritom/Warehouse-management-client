import React from 'react';
import './Companies.css';
import amazon from '../../../images/logos, icons/amazon.png'
import nike from '../../../images/logos, icons/nike.png'
import ebay from '../../../images/logos, icons/ebay.png'
import reebok from '../../../images/logos, icons/reebok.png'

const Companies = () => {
    return (
        <div className="companies">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 text-center mx-auto">
                        <p className="companies-we-work-with">We work with well-known companies</p>
                        <div className="brand-logos">
                            <img src={nike} alt="" />
                            <img src={amazon} alt="" />
                            <img src={reebok} alt="" />
                            <img src={ebay} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companies;