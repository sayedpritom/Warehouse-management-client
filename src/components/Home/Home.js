import React from 'react';
import Banner from './Banner/Banner';
import glowLeft from '../../images/header-glow-left.png';
import glowRight from '../../images/header-glow-right.png';
import './Home.css';
import Companies from './Companies/Companies';
import Advantages from './Advantages/Advantages';
import ManageProductPrices from './ManageProductPrices/ManageProductPrices';
import MonitorProductStock from './MonitorProductStock/MonitorProductStock';
import Packages from './Packages/Packages';
import InventoryFeature from './InventoryFeature/InventoryFeature';
import Footer from './Footer/Footer';
import HeaderForHomePage from '../HeaderForHomePage/HeaderForHomePage';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div className="home">
            <div className="header-banner-container-0" style={{ backgroundImage: `url(${glowRight}) ` }} >
                <div className="header-banner-container" style={{ backgroundImage: `url(${glowLeft}) ` }}>
                    <HeaderForHomePage ohHomePage={true}></HeaderForHomePage>
                    <Banner></Banner>
                </div>
            </div>
                <Companies></Companies>
                <InventoryItems></InventoryItems>
                <Advantages></Advantages>
                <ManageProductPrices></ManageProductPrices>
                <MonitorProductStock></MonitorProductStock>
                <Packages></Packages>
                <InventoryFeature></InventoryFeature>
                <Footer></Footer>
        </div>
    );
};

export default Home;