import React from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

const FormList = ({ items, handleRemoveItem, setEditingItem }) => {
    return (
        <div className='container mx-auto p-4'>
            <div className='main-container'>
                <h1 className='text-2xl font-bold mb-4'>Shopping List</h1>
                {items.length > 0 ? (
                    <table className='min-w-full table-auto border-collapse border border-gray-300'>
                        <thead>
                            <tr className='bg-gray-200'>
                                <th className='border border-gray-300 px-4 py-2'>Item Name</th>
                                <th className='border border-gray-300 px-4 py-2'>Price</th>
                                <th className='border border-gray-300 px-4 py-2'>Number of Items</th>
                                <th className='border border-gray-300 px-4 py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={item.id} className='bg-white'>
                                    <td className='border border-gray-300 px-4 py-2'>{item.name}</td>
                                    <td className='border border-gray-300 px-4 py-2'>${item.price}</td>
                                    <td className='border border-gray-300 px-4 py-2'>{item.number}</td>
                                    <td className='border border-gray-300 px-4 py-2'>
                                        <button
                                            onClick={() => handleRemoveItem(index)}
                                            className='text-red-500 hover:text-red-700 mr-3'
                                        >
                                            <FaTrash />
                                        </button>
                                        <button
                                            onClick={() => setEditingItem(item)}
                                            className='text-blue-500 hover:text-blue-700' 
                                        >
                                            <FaPencilAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className='text-center text-gray-500'>No Items Found</p>
                )}
                {items.length > 0 && (
                    <div className='total-item mt-4'>
                        <p className='text-lg font-semibold'>Total Items: {items.length}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FormList;
