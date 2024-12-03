import React, { useState } from 'react';
import './OnlineOrderForm.css';

const OnlineOrderForm = () => {
  const [orderData, setOrderData] = useState({
    name: '',
    items: [],
    contact: '',
    specialRequests: '',
  });

  const menuItems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 7 },
    { id: 3, name: 'Pasta', price: 8 },
  ];

  const handleChange = ({ target: { name, value } }) => {
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleItemChange = (itemId) => {
    setOrderData((prevData) => ({
      ...prevData,
      items: prevData.items.includes(itemId)
        ? prevData.items.filter((id) => id !== itemId)
        : [...prevData.items, itemId],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Show a confirmation modal (not implemented in this code snippet)
    // Make the API request
    console.log('Order submitted', orderData);
  };

  return (
    <form className="online-order-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your Name"
        value={orderData.name}
        onChange={handleChange}
        required
      />

      <label>Menu Items:</label>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              id={`item-${item.id}`}
              name="items"
              value={item.id}
              checked={orderData.items.includes(item.id)}
              onChange={() => handleItemChange(item.id)}
            />
            <label htmlFor={`item-${item.id}`}>
              {item.name} - ${item.price}
            </label>
          </div>
        ))}
      </div>

      <label htmlFor="contact">Contact Number:</label>
      <input
        id="contact"
        type="tel"
        name="contact"
        placeholder="Your Contact Number"
        value={orderData.contact}
        onChange={handleChange}
        required
      />

      <label htmlFor="specialRequests">Special Requests:</label>
      <textarea
        id="specialRequests"
        name="specialRequests"
        placeholder="Any special requests?"
        value={orderData.specialRequests}
        onChange={handleChange}
      />

      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OnlineOrderForm;
