// File: App.tsx

import "./App.css";
import { useState } from "react";

import Form from "./assets/components/form/Form";

import Header from "./assets/components/header/Header";

import Products from "./assets/components/products/Products";
import Button from "./assets/components/Button";
// fills Bootstrap CSS from node_modules
// import "./assets/bootstrap.min.css";

import "./assets/components/products/Products.module.css";

const App = () => {
  const products = [
    {
      title: "Pizza",
      price: 12.99,
      description: "Delicious pizza with tomato sauce and cheese",
      image: "https://example.com/pizza.jpg",
      desc: "This is a Pizza",
      rate: 4,
    },
    {
      title: "Laptop",
      price: 500.99,
      description: "Delicious Laptop with tomato sauce and cheese",
      image: "https://example.com/Laptop.jpg",
      desc: "This is a Laptop",
      rate: 5,
    },
    {
      title: "Mobile",
      price: 350.99,
      description: "Delicious Mobile with tomato sauce and cheese",
      image: "https://example.com/Mobile.jpg",
      desc: "This is a Mobile",
      rate: 7,
    },
  ];

  return (
    <>
      <Header />

      <Form />
      <Products products={products} />
      <Button onClick={() => console.log("click me button")}>
        <span>Click Me </span>
      </Button>
      <Button onClick={() => console.log("click me again")}>
        <span>Click Me Again </span>
      </Button>
    </>
  );
};
export default App;
// th is is a comment in JSX Setion 16
