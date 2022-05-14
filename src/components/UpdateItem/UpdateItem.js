import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateItem.css';

const UpdateItem = () => {
    const { id } = useParams();

    const [item, setItem] = useState({});
    const [restock, setRestock] = useState(0);
    const [quantity, setQuantity] = useState(0);


    const handleDelivered = () => {
        setQuantity(quantity - 1)
    }

    const handleOnChange = (event) => {
        setRestock(parseInt(event.target.value))
    }

    const handleOnUpdate = () => {
        setQuantity(quantity + restock);
        const newQuantity = quantity + restock;
        const updatedItem = { ...item, quantity: newQuantity }
        setRestock(0)

        fetch(`https://secure-waters-74032.herokuapp.com/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(response => response.json())
        .then(data => {
            console.log("success", data)
            alert("Item Successfully updated!")
        })

    }

    useEffect(() => {
        fetch(`https://secure-waters-74032.herokuapp.com/item/${id}`)
            .then(response => response.json())
            .then(data => {
                setItem(data);
                setQuantity(data.quantity)
            })
    }, [])


    return (
        <div className="container my-5">
            <div className="updateItem">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="item-image">
                            <div>
                                <img className="img-fluid" src={item.img} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="updateItemInfo">
                            <h5 className="item-name">{item.name}</h5>
                            <p>${item.price}</p>
                            <p>Stock: {quantity}</p>
                            <p>Re-stock: <input type="number" onChange={handleOnChange} placeholder="Enter Amount" value={restock === 0 ? "" : restock} ></input> </p>
                            <p>Supplier: {item.supplier}</p>
                            <p className="blog ">{item.description}</p>
                            <button className="common-btn me-3" onClick={handleDelivered}>Delivered</button>
                            <button className="common-btn" onClick={handleOnUpdate}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;