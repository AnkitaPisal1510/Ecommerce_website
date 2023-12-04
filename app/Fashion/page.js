"use client"
import MyNavbar from '../navbar';
import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        // Filter out electronics products
        const filteredProducts = data.filter(product => product.category !== 'electronics');

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <MyNavbar />
      <div className="container mt-4" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <h1>Clothing and Jewelry</h1>
        {products.map(product => (
          <div className="card" key={product.id} style={{ width: 'calc(25% - 16px)', marginBottom: '16px' }}>
            <img src={product.image} alt={product.name} className="card-img-top" style={{ maxHeight: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Category: {product.category}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetch;
