import  React, {useState,useEffect}  from "react";
import axios from "axios"
import {Link} from "react-router-dom"
const Home = () => {
    const [users,setUser]=useState([]);
    // useEffect function take dependencies for looping if we don't give blank array then may be it may run infinite time
    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers=async()=>{
        const result= await axios.get("http://localhost:3010/users");
   setUser(result.data.reverse());
    }
    const deleteUser=async id=>{
      await axios.delete(`http://localhost:3010/users/${id}`)
    loadUsers();
    }
    return  (<div className = "container" >
        <div className='Py-4'>
    

  .. <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email id</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>{
    //  map function take three parameter user ,index and one is array  
      users.map((user,index)=>(
       <tr>   <th scope="row">{index + 1}</th>
          <td>{user.name}</td>
<td>{user.username}</td>
<td>{user.email}</td>
<td>
  
    <Link class="btn btn-primary mr-2" to={`/users/View/${user.id}`}>View</Link>
    <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
    <Link class="btn btn-danger " onClick={()=>deleteUser(user.id)}>Delete</Link>
</td>
</tr>
))}
    </tbody>
</table>
            </div>
        </div>);

    
};
// jab export kregey tab hii isko bahr se koi excess kar payega 
export default Home;
