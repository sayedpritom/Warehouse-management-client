import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';

const InventoryItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://secure-waters-74032.herokuapp.com/items')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <div className="items">
                <div className="container">
                    <h1 className="heading-1 text-left my-5">Inventory Items:</h1>
                    <div className="row">
                        {items.map(item => <Items key={item._id} item={item}></Items>)}
                    </div>
                    <Link to='/manageInventories'><button className="common-btn">Manage Inventories</button></Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;