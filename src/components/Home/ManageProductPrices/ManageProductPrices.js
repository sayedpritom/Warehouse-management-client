import React from 'react';
import './ManageProductPrices.css';
import manageProduct from '../../../images/manage.png';


const ManageProductPrices = () => {
    return (
        <div className="manageProductPrices">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <h1 className="heading-1 text-left">Manage Product Prices <br /> With Management <br /> System</h1>
                        <p className="blog my-5">
                            This inventory system can manage and control products, one of which can regulate product prices ranging from capital to sales costs and also income and can find out product stock in the warehouse so that you can control your products more quickly, regularly, and efficiently in managing your business.
                        </p>
                        <button className="common-btn">Learn More</button>
                    </div>
                    <div className="col-lg-5 my-5 my-lg-0">
                        <div className="manageProduct">
                            <img src={manageProduct} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProductPrices;