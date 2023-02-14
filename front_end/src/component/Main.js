import React, { useState, useEffect } from 'react';
import axios from "axios";


function Main() {
    const [accounts, setAccounts] = useState([])
    const [loading, setLoading] = useState([])

    const ConfigURL = 'http://127.0.0.1:8000/api/'
   

   
      const handleCallAccounts =()=>{
        axios.get(`${ConfigURL}accounts/`).then(response => {  
            setAccounts(response.data)
        }).catch(error => {
            throw error;
        });
    }
    
      useEffect(() => {
        handleCallAccounts();
      }, []);
      
      

    return (
        <>
      
        <ul>{accounts? accounts.map((item, index) =>
      <li key={index}>
        Full Name: {item.last_name},  {item.first_name},    
        Email: {item.email}
      </li>
    ):null}</ul>
               
        </>
    )
}
export default Main;