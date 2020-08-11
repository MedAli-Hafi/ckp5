import React from 'react';
import './App.css';
import ProductTable from './component/ProductTable';
function App() {
  
  const products = [
    {
      name: "iPhone X",
      price: 999,
      category: "Electronics"
    },

    {
      name: "Galaxy A30s",
      price: 650,
      category: "Electronics"
    },
    {
      name: "huawei y8p",
      price: 770,
      category: "Electronics"
    },
    {
      name: "jeans",
      price: 80,
      category: "Clothes"
    },
    {
      name: "shoes",
      price: 150,
      category: "Clothes"
    },
    {
      name: "t shirt",
      price: 34,
      category: "Clothes"
    },
  ]
  return (
    <div >
    <ProductTable   people={products} />
    </div>
  );
}

export default App;
