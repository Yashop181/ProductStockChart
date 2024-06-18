import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [stock, setStock] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = { name, stock };

    axios.post('http://localhost:8000/products/add', product)
      .then(res => console.log(res.data));

    setName('');
    setStock(0);
  };

  return (
    <div>
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Stock: </label>
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
