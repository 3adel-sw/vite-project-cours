// File: App.tsx

import "./App.css";
import { useState } from "react";

import Form from "./assets/components/form/Form";

import Header from "./assets/components/header/Header";

import Products from "./assets/components/products/Products";
import Button from "./assets/components/Button";
// fills Bootstrap CSS from node_modules
import "./assets/bootstrap.min.css";

import "./assets/components/products/Products.module.css";

const App = () => {
  const [username, setUsername] = useState("Adel");
  const [password, setPassword] = useState("2025");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };
  return (
    <>
      <h1>Hello React</h1>
      <form className="m-2 " onSubmit={handleSubmit}>
        <label htmlFor="username" className="m-2">
          UserName
        </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
        />
        <label className="m-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          className="m-2" // code style
        />
        <button type="submit" className="btn btn-primary m-2">
          logen
        </button>
      </form>
    </>
  );
};

// const App = () => {
//   const [user, setUser] = useState({
//     fistName: "Adel",
//     lastName: "Mahmoud",
//   });
//   return (
//     <>
//       <h1>
//         Hello {user.fistName} {user.lastName}
//       </h1>
//       <button
//         type="button"
//         onClick={() =>
//           setUser((next) => {
//             return { ...next, lastName: "Melegy" }; // to change lastName
//             // return { ...next, fistName: "Melegy" }; // to change fistName
//           })
//         }
//       >
//         Change lastName
//       </button>
//     </>
//   );
// };

// const App = () => {
//   const [input, setinpit] = useState("");
//   return (
//     <>
//       <h1>Hello React</h1>
//       <input
//         type="text"
//         placeholder="Enter Your Name"    // 043469
//         value={input}
//         // onChange={(e) => console.log(e.target.value)}
//         onChange={(e) => setinpit(e.target.value)}
//       />
//       <p>Your Name Is {input}</p>
//     </>
//   );
// };

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
// th is is a comment in JSX Setion 18
