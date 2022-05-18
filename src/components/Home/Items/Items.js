import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css';

const Items = (props) => {
    const { _id, name, description, price, img, quantity, supplier } = props.item;
    console.log(props.item)
    return (
        <div className="col-md-6 col-lg-4">
            <div className="item">
                <div className="item-image">
                    <div>
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                </div>
                <div className="item-info">
                    <h5 className="item-name">{name}</h5>
                    <p>${price}</p>
                    <p>Stock: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p className="blog item-description">{description}</p>
                    <Link to={`/inventory/${_id}`}><button className="common-btn">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Items;