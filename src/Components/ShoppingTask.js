import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import ShoppingForm from './ShoppingForm'
import ShoppingList from './ShoppingList';
import { toast } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';

const Testshop = () => {
    const [items, setItems] = useState([]);
    const [user, setUser] = useState(null);
    const [editingItem, setEditingItem] = useState(null);

    const addItem = async (item) => {
        try {
            const ItemStore = await addDoc(collection(db, "ShoppItem"), {
                ...item,
                userID: user.uid,
            });
            setItems([...items, {
                ...item,
                id: ItemStore,
                userID: user.uid
            }]);
            toast.success('New Item Inserted!');
        } catch (error) {
            toast.error(error.message);
        } finally {
            fetchItems(user.uid);
        }

    };

    const updateItem = async (itemId, updatedData) => {
        try {
            await updateDoc(doc(db, "ShoppItem", itemId), updatedData);
            toast.success('Item Updated!');
            setItems(items.map(item => item.id === itemId ? { ...item, ...updatedData } : item));
        } catch (error) {
            toast.error('Error updating item!');
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);
                await fetchItems(user.uid);
            } else {
                setUser(null);
                setItems([]);
            }
        });
        return () => unsubscribe();
    }, []);

    const fetchItems = async (userID) => {
        try {
            const q = query(collection(db, "ShoppItem"), where("userID", "==", userID));
            const querySnapshot = await getDocs(q);
            const itemList = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setItems(itemList);
            console.log(itemList);
        } catch (error) {
            toast.error('Error fetching items!');
            console.log('Fetching items error', error);
        }
    };

    const handleRemoveItem = async (itemIndex) => {
        const itemId = items[itemIndex].id;
        const newItems = items.filter((_, index) => index !== itemIndex);
        setItems(newItems);
        try {
            toast.loading('Deleting....');
            await deleteDoc(doc(db, "ShoppItem", itemId));
            toast.dismiss();
            toast.success('Item Removed!');
        } catch (error) {
            toast.error('Error removing item!');
        } finally {
            fetchItems(user.uid);
        }
    };

    return (
        <div className='app-background'>


            <ShoppingForm
                addItem={addItem}
                updateItem={updateItem}
                editingItem={editingItem}
                setEditingItem={setEditingItem}
            />

            <ShoppingList
                items={items}
                handleRemoveItem={handleRemoveItem}
                handleUpdateItem={updateItem}
                setEditingItem={setEditingItem}
            />
        </div>
    );
};

export default Testshop;
