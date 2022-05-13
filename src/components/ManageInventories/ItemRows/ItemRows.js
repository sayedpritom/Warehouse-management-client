import React from 'react';
import './ItemRows.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';



const ItemRows = (props) => {
    const { _id, img, name, price, quantity, supplier } = props.item;



    return (
        <div className="">
            <div className="row itemRows my-3 align-items-center flex-wrap">
                <div className="col-2 col-lg-1">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-3 col-lg-4">
                    <p>{name}</p>
                </div>
                <div className="col-2">
                    <p>{quantity}</p>
                </div>
                <div className="col-2">
                    <p>{price}</p>
                </div>
                <div className="col-2">
                    <p>{supplier}</p>
                </div>
                <div className="col-1">
                    <button onClick={() => props.handleDelete(_id)} className="remove-btn"><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </div>
        </div>
    );
};

export default ItemRows;