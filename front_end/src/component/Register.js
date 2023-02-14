import React, { useState } from 'react';
import axios from "axios";

function Register () {
const [username, setUserName] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const ConfigURL = 'http://127.0.0.1:8000/api/'
   

let handleSubmit = async (e) => {
    e.preventDefault();



    try {
      
      const res = await axios.post(`${ConfigURL}register/`, {
        username:username,
        password: password,
        first_name: firstName,
        last_name: lastName,
        email: email }, {
        headers: {
          'content-type': 'application/json'
        }
      });
      

      if (res.status === 201) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setUserName("");
        alert("User created successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
    return <div>
        <form onSubmit={handleSubmit}>
            <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="username">User Name</label>
                    <input className="form__input" type="text" id="username" placeholder="Username" value={username}
                        onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="first_name">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" id="firstName" placeholder="First Name" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"  value={lastName}
                    onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
            
            </div>
            <div class="footer">
                <button type="submit">Register</button>
            </div>
        </div>  
        </form>
            
    </div>
}
export default Register;