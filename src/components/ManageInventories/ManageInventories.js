import React, { useEffect, useState } from 'react';
import ItemRows from './ItemRows/ItemRows';
import './ManageInventories.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { signOut } from 'firebase/auth';


const ManageInventories = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/myItems") {
            fetch(`https://secure-waters-74032.herokuapp.com/manageInventories/${user?.email}`, {
                headers: {authorization: `Bearer ${localStorage.getItem('accessToken')}`}})
                .then((response) => {
                    // 1. check response.ok
                    if (response.ok) {
                        return response.json();
                    }
                    return Promise.reject(response); // 2. reject instead of throw
                })
                .then(data => {
                    if (data.message !== 'Forbidden Access') {
                        setItems(data)
                    }
                })
                .catch((error) => {
                    if (error.status === 401 || error.status === 403) {
                        signOut(auth)
                        navigate('/login')
                    }
                });

        } else {
            fetch("https://secure-waters-74032.herokuapp.com/manageInventories")
                .then(response => response.json())
                .then(data => setItems(data))
        }

    }, [user, location.pathname])


    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            fetch(`https://secure-waters-74032.herokuapp.com/delete/${id}`, {
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

    console.log(items)

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
                {items.map(item => <ItemRows item={item} key={item._id} handleDelete={handleDelete}></ItemRows>)}
            </div>
        </div>
    );
};

export default ManageInventories;