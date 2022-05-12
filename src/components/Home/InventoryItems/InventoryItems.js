import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';

const InventoryItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/items')
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
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;