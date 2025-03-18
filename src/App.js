import "./App.css" 
import Head from "./components/Header";
import Product from "./components/Products"
import Footer from "./components/Footer"
import { BrowserRouter,Route,Routes } from "react-router-dom"
function App() {
  //let name="John"
  return (
    // <>
    //   <h1>Hello {props.name}. I'm are {props.age}</h1>
    //   <p>This is a me.</p>
    // </>
    <div>
      <Head />

      <Product/>
      <Footer/>
    </div>
  );
}
export default App;