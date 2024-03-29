import axios from "axios";
import  {useHistory} from 'react-router-dom'
import React ,{useState} from "react";
const AddUser=()=>{
    let history=useHistory();
    const [user,setUser]=useState({
        name: "",
        username: "",
        email: "",
        phone: ""   
    });
    const {name,username,email,phone}=user;
    const onInputChange=e=>{
        // console.log(e.target.value );
       setUser({...user,[e.target.name]: e.target.value})  
    };
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3010/users",user)
    history.push("/")
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Add a user</h2>
                <form onSubmit={e=>onSubmit(e)}>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={e=>onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your UserName"
                        name="username"
                        value={username}
                        onChange={e=>onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Email id"
                        name="email"
                        value={email}
                        onChange={e=>onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Mobile Number"
                        name="phone"
                        value={phone}
                        onChange={e=>onInputChange(e)}/>
                    </div>
                   
                <button className="btn btn-primary btn-block">Add user</button>

                </form>
            </div>
        </div>
    );
};
export default AddUser ;