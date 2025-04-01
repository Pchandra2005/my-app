import "./Products.css";
import { appContext } from "../App";
import { useContext } from "react";
export default function Product() {
  const {user} = useContext(appContext)
  const products = [
    { id: 1, name: "Product 1", price: "$30" },
    { id: 2, name: "Product 2", price: "$40" },
    { id: 3, name: "Product 3", price: "$50" },
    { id: 4, name: "Product 4", price: "$30" },
    { id: 5, name: "Product 5", price: "$60" },
    { id: 6, name: "Product 6", price: "$20" },
  ];
  return (
    <div>
      <div className="App-Products-row">
        {user.name}
        {products.map((value, index) => (
          <div className="App-Products-box" key={index}>
            <h3>{value.name}</h3>
            <h4>Price:{value.price}</h4>
            <button>Add to Cart</button>
          </div>
   
        ))}
      </div>
    </div>
  );
}