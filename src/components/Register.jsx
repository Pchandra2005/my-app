import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css"
export default function Register() {
  const[details,setDetails] = useState([]);
  const[detail,setDetail] = useState({});
  const handleSubmit = () => {
    const userExist = details.find(
      (value) => value.name == detail.name || value.email == detail.name
    );
    if(userExist){
      alert("user already exists");
    }
    else{
      setDetails([...details,detail]);
    }
  }
  const handleDelete = (name) =>{
    setDetails(details.filter((value) => value.name != name))
  }
  return (
  // <div>
  //   <h3>Register Form</h3>
  //   <p>
  //     <input type="text" placeholder="Enter Name"></input></p>
  //   <p><input type="text" placeholder="Email Address"></input></p>
  //   <p><input type="passsword" placeholder="New Password"></input></p>
  //   <p><button onClick={}>Submit</button></p>
  //   <p><Link to="../login">Already a member? Login here!</Link></p>
  //   </div>
  <div>
      {/* <h3>Registration Form</h3> */}
      <div className="App-Row">
        <div className="App-Box">
          <h2>Registration Form </h2>
          <p>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setDetail({ ...detail, name: e.target.value })}
            ></input>
          </p>
          <p>
            <input
              type="text"
              placeholder="Enter email"
              onChange={(e) =>
                setDetail({ ...detail, email: e.target.value })
              }
            ></input>
          </p>
          <p>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setDetail({ ...detail, password: e.target.value })}
            ></input>
          </p>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <ol className="App-Box">
          {details.map((value, index) => (
            <li key={index}>
              {value.name}|{value.email}|{value.password}-
              <button onClick={() => handleDelete(value.name)}>Delete</button>
             </li>
          ))}
        </ol>
        {/* <p><Link to="../login">Already a member? Login here!</Link></p> */}
      </div>
      <p><Link to="../login">Already a member? Login here!</Link></p>
    </div>
)
}