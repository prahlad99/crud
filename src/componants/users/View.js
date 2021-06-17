import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom';
const User =()=>{
    const [user,setUser]=useState({
        name: "",
        username: "",
        email: "",
        phone: ""   
    });
    const {id}=useParams();
    useEffect(()=>{
        loaduser();
    },[])
    const loaduser=async ()=>{
        const res=await axios.get(`http://localhost:3010/users/${id}`)
    setUser(res.data)
    }
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to='/'>back to home</Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr/>
            <ul className ="list-group ">
              
                <li className="list-group-item">name: {user.name}</li>
                <li className="list-group-item">username: {user.username}</li>
                <li className="list-group-item">email: {user.email}</li>
                
                <li className="list-group-item">mobile number: {user.phone}</li>
                     
                  
            
            
            </ul>
        </div>
       
    );
};
export default User;