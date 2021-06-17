import axios from "axios";
import  {useHistory,useParams} from 'react-router-dom'
import React ,{useState,useEffect} from "react";
const EditUser=()=>{

    let history=useHistory();
    const{id}=useParams();
    // use of useparams hook this is generally pass the data of url using id fetch the data
    
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
    useEffect(()=>{
        loadUser()},[]
    );
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3010/users/${id}`,user)
    history.push("/")
    };
    const loadUser=async()=>{
        const result =await axios.get(`http://localhost:3010/users/${id}`)
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Edit user</h2>
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
                   
                <button className="btn btn-warning btn-block">update user</button>

                </form>
            </div>
        </div>
    );
};
export default EditUser ;