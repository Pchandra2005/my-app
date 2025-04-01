import "./Header.css";
import { Link } from "react-router-dom";
import { appContext } from "../App";
import { useContext } from "react";
export default function Header() {
  const {user,setUser} = useContext(appContext)
  return (
    <div className="App-Header-Row">
      <h1> React Store</h1>
      <div>
        <Link to="products" className="App-Header-Link" >Home</Link>
        <Link to="cart" className="App-Header-Link">Cart</Link>
        {user.name === "" ? (<Link to="login" className="App-Header-Link">Login</Link>)
        :(<Link to="login" className="App-Header-Link">Logout</Link>)}
        {/* <Link to="login" className="App-Header-Link">Login</Link>
        <Link to="login" className="App-Header-Link">Logout</Link> */}
      </div>
    </div>
  );
}