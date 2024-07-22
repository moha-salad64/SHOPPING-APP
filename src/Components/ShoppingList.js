import React from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

const FormList = ({ items, handleRemoveItem, setEditingItem }) => {
    return (
        <div className='container'>
            <div className='main-container'>
                <h1>Shopping List</h1>
                <div className='item-list'>
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <div key={item.id} className='item-container'>
                                <div className='item-name'>
                                    <span>Item-Name: {item.name}</span>
                                    <span>Price: ${item.price}</span>
                                    <span>N-Of-Item: {item.number}</span>
                                </div>
                                <div>
                                    <button onClick={() => handleRemoveItem(index)} className='remove-item'>
                                        <FaTrash />
                                    </button>
                                    <button onClick={() => setEditingItem(item)} className='edit-item'>
                                        <FaPencilAlt />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No Items Found</p>
                    )}
                </div>
                <div>
                    {items.length > 0 && (
                        <div className='total-item'>
                            Total Items: {items.length}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormList;
