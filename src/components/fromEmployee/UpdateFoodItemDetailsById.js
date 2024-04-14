import React, { useState } from 'react';
import { getFoodItemById, updateFoodItemById } from '../Services/FoodItemServices';

const GetFoodDetailsById = () => {
    const [formData, setFormData] = useState({ itemId: '' });
    const [foodItem, setFoodItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedItem, setEditedItem] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGetDetails = async () => {
        // Check if itemId is empty
        if (!formData.itemId.trim()) {
            setError('Please enter a valid Food Item ID');
            setFoodItem(null); // Reset food item state
            return;
        }
        setLoading(true);
        try {
            const response = await getFoodItemById(formData.itemId);
            if (response.data) {
                setFoodItem(response.data);
                setEditedItem(response.data); // Initialize edited item with fetched data
                setError(null);
            } else {
                setFoodItem(null);
                setError(`Food item with ID ${formData.itemId} not found`);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError(`Food item with ID ${formData.itemId} not found`);
            }
            setFoodItem(null); // Reset food item state
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            await updateFoodItemById(foodItem.itemId, editedItem);
            setFoodItem(editedItem); // Update foodItem state with edited data
            setIsEditing(false);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        // Reset editedItem back to original foodItem data
        setEditedItem(foodItem);
    };

    const handleInputChange = (e) => {
        setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
    };

    return (
        <div className='container'>
            <h4 className='text-center'>Food Item Details</h4>
            <input 
                type="text" 
                name="itemId" 
                value={formData.itemId} 
                onChange={handleChange}  
                style={{ width: '250px' , marginBottom: "10px" }} 
                placeholder='Enter Food Item ID'
            /><br/>
            <button onClick={handleGetDetails} className="btn btn-primary">Get Details</button>
            {loading && <div className="text-center">Loading... <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>}
            {error && <div className="text-danger">Error: {error}</div>}
            {foodItem && (
                <>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Item ID</th>
                                <th>Item Name</th>
                                <th>Item Cost</th>
                                <th>Central GST</th>
                                <th>State GST</th>
                                <th>Chef Name</th>
                                <th>Ingredients</th>
                                <th>Preparation Process</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{foodItem.itemId}</td>
                                <td>{isEditing ? <input type="text" name="itemName" value={editedItem.itemName} onChange={handleInputChange} /> : foodItem.itemName}</td>
                                <td>{isEditing ? <input type="text" name="itemCost" value={editedItem.itemCost} onChange={handleInputChange} /> : foodItem.itemCost}</td>
                                <td>{isEditing ? <input type="text" name="centralGST" value={editedItem.centralGST} onChange={handleInputChange} /> : foodItem.centralGST}</td>
                                <td>{isEditing ? <input type="text" name="stateGST" value={editedItem.stateGST} onChange={handleInputChange} /> : foodItem.stateGST}</td>
                                <td>{isEditing ? <input type="text" name="chefName" value={editedItem.chefName} onChange={handleInputChange} /> : foodItem.chefName}</td>
                                <td>{isEditing ? <input type="text" name="ingredients" value={editedItem.ingredients} onChange={handleInputChange} /> : foodItem.ingredients}</td>
                                <td>{isEditing ? <input type="text" name="preparationProcess" value={editedItem.preparationProcess} onChange={handleInputChange} /> : foodItem.preparationProcess}</td>
                                <td>{isEditing ? <input type="text" name="rating" value={editedItem.rating} onChange={handleInputChange} /> : foodItem.rating}</td>
                            </tr>
                        </tbody>
                    </table>
                    {isEditing ? (
                        <div>
                            <button onClick={handleSubmit} className="btn btn-primary" style={{ marginRight: '10px' }}>Submit</button>
                            <button onClick={handleCancelEdit} className="btn btn-secondary">Cancel</button>
                        </div>
                    ) : (
                        <button onClick={handleEdit} className="btn btn-primary">Edit</button>
                    )}
                </>
            )}
        </div>
    );
};

export default GetFoodDetailsById;

