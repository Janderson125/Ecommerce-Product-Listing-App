import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "High-quality wireless headphones with noise cancellation.",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1512499617640-c2f999348e59?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Coffee Mug",
      price: 12.99,
      description: "Ceramic mug with a cool design to brighten your mornings.",
      category: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Yoga Mat",
      price: 25.0,
      description: "Eco-friendly non-slip yoga mat for all your fitness needs.",
      category: "Fitness",
      image:
        "https://images.unsplash.com/photo-1590080877777-66c90d48b5f2?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 199.99,
      description: "Stay connected and track your fitness with this smart watch.",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=60",
    },
  ]);

  return (
    <div className="app-container">
      <header>
        <h1>Simple E-Commerce Store</h1>
      </header>
      <ProductList products={products} />
      <footer>
        <p>© 2025 My E-Commerce Store</p>
      </footer>
    </div>
  );
};

export default App;
