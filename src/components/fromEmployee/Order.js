// Order.js

import React, { useState, useEffect, useCallback } from 'react';
import { getAllItems, deleteItemById } from '../Services/FoodItemServices';
import { addOrder } from '../Services/OrdersServices';

const Order = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [orderId, setOrderId] = useState('');
  const [orderItems, setOrderItems] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
   // eslint-disable-next-line
  const [deletedFoodItem, setDeletedFoodItem] = useState(null);
  const [error, setError] = useState(null);

  const fetchFoodItems = async () => {
    try {
      const response = await getAllItems();
      setFoodItems(response.data);
    } catch (error) {
      console.error('Error fetching food items:', error);
      setError(error);
    }
  };

  const handleAddToOrder = (itemId) => {
    const item = foodItems.find(item => item.itemId === itemId);
    if (item) {
      setOrderItems(prevOrderItems => ({
        ...prevOrderItems,
        [itemId]: { ...item, count: (prevOrderItems[itemId]?.count || 0) + 1 }
      }));
    }
  };

  const handleRemoveFromOrder = (itemId) => {
    setOrderItems(prevOrderItems => {
      const updatedItems = { ...prevOrderItems };
      updatedItems[itemId].count = Math.max((updatedItems[itemId]?.count || 0) - 1, 0);
      return updatedItems;
    });
  };

  const handleDelete = async (foodItemId) => {
    try {
      await deleteItemById(foodItemId);
      setDeletedFoodItem(foodItemId);
      setError(null);
      setFoodItems(foodItems.filter(item => item.itemId !== foodItemId));
    } catch (error) {
      setError(error);
    }
  };

  const generateBill = useCallback(() => {
    let bill = 0;
    Object.values(orderItems).forEach(item => {
      if (item) {
        bill += item.totalCost * item.count;
      }
    });
    setTotalBill(bill);
  }, [orderItems]);

  useEffect(() => {
    fetchFoodItems();
  }, []);

  useEffect(() => {
    generateBill();
  }, [generateBill]);

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        orderId: orderId,
        items: Object.values(orderItems)
      };
      console.log("orderItems", orderItems);
      console.log('orderData :', orderData);
      const response = await addOrder(orderData);
      
      console.log('Order placed successfully:', response);
  
      setOrderId('');
      setOrderItems([]);
      setTotalBill(0);
    } catch (error) {
      console.error('Error placing order:', error);
      setError(error.response?.data?.message || 'An error occurred while placing the order');
    }
  };

  return (
    <div className='container'>
      <div className="text-center">
        <h3>Order ID:</h3>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter Order ID"
        />
      </div>
      <h3>Available Items</h3>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Raw Cost</th>
            <th>Central GST</th>
            <th>State GST</th>
            <th>Total GST</th>
            <th>Total Cost</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((foodItem, index) => (
            <tr key={foodItem.itemId}>
              <td>{foodItem.itemId}</td>
              <td>{foodItem.itemName}</td>
              <td>{foodItem.rawCost}</td>
              <td>{foodItem.centralGST}</td>
              <td>{foodItem.stateGST}</td>
              <td>{foodItem.totalGST}</td>
              <td>{foodItem.totalCost}</td>
              <td>{foodItem.description}</td>
              <td>
                {orderItems[foodItem.itemId] && orderItems[foodItem.itemId].count > 0 ? (
                  <div className="btn-group">
                    <button className="btn btn-sm btn-success" onClick={() => handleRemoveFromOrder(foodItem.itemId)}>-</button>
                    <span className="btn btn-sm btn-light">{orderItems[foodItem.itemId].count}</span>
                    <button className="btn btn-sm btn-success" onClick={() => handleAddToOrder(foodItem.itemId)}>+</button>
                  </div>
                ) : (
                  <button className="btn btn-primary" onClick={() => handleAddToOrder(foodItem.itemId)} style={{ marginRight: '10px' }}>Add</button>
                )}
                <button className="btn btn-danger" onClick={() => handleDelete(foodItem.itemId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
      <div className="text-center mt-3">
        <h6>Total Bill: {totalBill}</h6>
      </div>
      {error && (
        <div className="text-danger">
          {error.response && error.response.status === 404 ?
            `Food item not found` :
            error.message
          }
        </div>
      )}
    </div>
  );
};

export default Order;




















