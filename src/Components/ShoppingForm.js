import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem, updateItem, editingItem, setEditingItem }) => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemNumber, setItemNumber] = useState('');

    useEffect(() => {
        if (editingItem) {
            setItemName(editingItem.name);
            setItemPrice(editingItem.price);
            setItemNumber(editingItem.number);
        }
    }, [editingItem]);

    const handleAddOrUpdateButton = () => {
        if (!itemName || !itemPrice || !itemNumber || itemNumber <= 0) {
            toast.error("Please fill  all Input! && check item number greater than 0!");
            return;
        }
        if (editingItem) {
            updateItem(editingItem.id, {
                name: itemName,
                price: itemPrice,
                number: itemNumber
            });
            setEditingItem(null);
        } else {
            addItem({
                name: itemName,
                price: itemPrice,
                number: itemNumber
            });
        }
        setItemName('');
        setItemPrice('');
        setItemNumber('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddOrUpdateButton();
    };

    return (
        <div className="input-side">
            <h2>{editingItem ? 'EDIT ITEM' : 'ADD ITEM'}</h2>
            <form className="add-item-box" onSubmit={handleSubmit}>
                <div className="input-part">
                    <label>Item Name</label>
                    <input
                        value={itemName}
                        onChange={(event) => setItemName(event.target.value)}
                        className="add-item-input "
                        placeholder="Enter Item Name"
                    />
                </div>

                <div className="input-part">
                    <label>Price</label>
                    <input
                        type="number"
                        value={itemPrice}
                        onChange={(event) => setItemPrice(event.target.value)}
                        className="add-item-input"
                        placeholder="Enter Item Price"
                    />
                </div>

                <div className="input-part">
                    <label>Item Number</label>
                    <input
                        type="number"
                        value={itemNumber}
                        onChange={(event) => setItemNumber(event.target.value)}
                        className="add-item-input"
                        placeholder="Enter N-of-Items"
                        
                    />
                </div>
                <button type="submit">
                    {editingItem ? `EDIT ITEM` : `ADD ITEM`}
                </button>
            </form>
        </div>
    );
};

export default Form;
