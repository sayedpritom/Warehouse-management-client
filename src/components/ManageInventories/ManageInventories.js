import React, { useEffect, useState } from 'react';
import ItemRows from './ItemRows/ItemRows';
import './ManageInventories.css';

const ManageInventories = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/manageInventories")
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5001/delete/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const remaining = items.filter(item => item._id !== id)
            setItems(remaining);
        })
    }

    return (
        <div className="manageInventories">
            <div className="container">
                <h3 className="my-5">Total inventory items: {items.length}</h3>
                <div className="row inventoryHeader">
                    <div className="col-5">
                        <h6>Product Name</h6>
                    </div>
                    <div className="col-2">
                        <h6>Stock</h6>
                    </div>
                    <div className="col-2">
                        <h6>Price</h6>
                    </div>
                    <div className="col-2">
                        <h6>Supplier</h6>
                    </div>
                </div>
                {items.map(item => <ItemRows item={item} key={item.key} handleDelete={handleDelete}></ItemRows>)}
            </div>
        </div>
    );
};

export default ManageInventories;