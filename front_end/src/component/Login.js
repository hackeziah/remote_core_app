import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login () {
    
const [username, setUserName] = useState("");
const [password, setPassword] = useState("");
const ConfigURL = 'http://127.0.0.1:8000/api/'

const navigate = useNavigate();

let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const res = await axios.post(`${ConfigURL}login/`, {
        username:username,
        password: password }, {
        headers: {
          'content-type': 'application/json'
        }
      });
      
      if (res.status === 200) {
        setPassword("");
        setUserName("");
        alert("Successfully Login");
        navigate('/', { replace: true });
      } else {
        alert("Some error occured");
      }
    } catch (err) {
        alert("User Does Not Exist");
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
               
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
            
            </div>
            <div class="footer">
                <button type="submit">Login</button>
            </div>
        </div>  
        </form>
            
    </div>
}

export default Login;