import React, { useEffect, useState } from 'react';
import ItemRows from './ItemRows/ItemRows';
import './ManageInventories.css';
import { Link, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const ManageInventories = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/myItems") {
            fetch(`http://localhost:5001/manageInventories/${user?.email}`)
                .then(response => response.json())
                .then(data => setItems(data))
        } else {
            fetch("http://localhost:5001/manageInventories")
                .then(response => response.json())
                .then(data => setItems(data))
        }
    }, [user, location.pathname])


    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
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
    }

    return (
        <div className="manageInventories">
            <div className="container">
                <div className="d-flex my-5 justify-content-between flex-wrap">
                    <h3>Total inventory items: {items.length}</h3>
                    <Link to="/addNewItem"><button className="common-btn">Add New Item</button></Link>
                </div>
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