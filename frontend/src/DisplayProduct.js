import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/products/')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map(product => (
          <li key={product._id}>{product.name} - {product.stock}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayProducts;
