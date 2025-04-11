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
  const [input, setinpit] = useState("");
  return (
    <>
      <h1>Hello React</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        // onChange={(e) => console.log(e.target.value)}
        onChange={(e) => setinpit(e.target.value)}
      />
      <p>Your Name Is {input}</p>
    </>
  );
};

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Hello Word </h1>
//       <div className="count">
//         <span className="num">{count}</span>
//       </div>
//       <button type="button" onClick={() => setCount((count) => count + 1)}>
//         Increment
//       </button>
//       <button type="button" onClick={() => setCount((count) => count - 1)}>
//         Decrement
//       </button>
//       <button type="button" onClick={() => setCount(0)}>
//         Reset
//       </button>
//     </>
//   );
// };

// const App = () => {
//   const products = [
//     {
//       title: "Pizza",
//       price: 12.99,
//       description: "Delicious pizza with tomato sauce and cheese",
//       image: "https://example.com/pizza.jpg",
//       desc: "This is a Pizza",
//       rate: 4,
//     },
//     {
//       title: "Laptop",
//       price: 500.99,
//       description: "Delicious Laptop with tomato sauce and cheese",
//       image: "https://example.com/Laptop.jpg",
//       desc: "This is a Laptop",
//       rate: 5,
//     },
//     {
//       title: "Mobile",
//       price: 350.99,
//       description: "Delicious Mobile with tomato sauce and cheese",
//       image: "https://example.com/Mobile.jpg",
//       desc: "This is a Mobile",
//       rate: 7,
//     },
//   ];

//   return (
//     <>
//       <Header />

//       <Form />
//       <Products products={products} />
//       <Button onClick={() => console.log("click me button")}>
//         <span>Click Me </span>
//       </Button>
//       <Button onClick={() => console.log("click me again")}>
//         <span>Click Me Again </span>
//       </Button>
//     </>
//   );
// };
export default App;
// th is is a comment in JSX Setion 17
