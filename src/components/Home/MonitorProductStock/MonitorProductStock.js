import React from 'react';
import './MonitorProductStock.css';
import monitorProduct from '../../../images/monitor.png';

const MonitorProductStock = () => {
    return (
        <div className="monitorProductStock">
            <div className="container">
                <div className="row justify-content-between flex-lg-row-reverse">
                    <div className="col-lg-5">
                        <h1 className="heading-1 text-left">Monitor Product Stock <br/> And Transactions</h1>
                        <p className="blog my-5">
                        This inventory system can manage and control purchase transactions from various marketplaces but you set in the system in real-time, not only that. This system can find out the stock of products available in the warehouse and manage the purchase and sale prices of the products you set. 
                        </p>
                        <button className="common-btn">Learn More</button>
                    </div>
                    <div className="col-lg-5 my-5 my-lg-0">
                        <div className="manageProduct">
                            <img src={monitorProduct} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonitorProductStock;