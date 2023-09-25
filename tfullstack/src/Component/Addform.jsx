import React, { useState } from 'react';
import "../Style/Addform.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Addform = () => {


  const[userData,setUserData]=useState({name:"",price:"",image:""})
 const router = useNavigate();

const handleChange=(event) =>{
  setUserData({...userData,[event.target.name]:event.target.value})
}


const handelSubmit=async(event)=>{
event.preventDefault();
if(userData.name && userData.price && userData.image){
try {
  const response=await axios.post("http://localhost:2000/anu/addProduct",{
    name:userData.name,
    price:userData.price,
    image:userData.image

  });
  if(response.data.success){
    alert(response.data.message)
  }
} catch (error) {
  alert(error.response.data.message)
}
}else{
  alert("All fields are required.")
}
}
  return (
    <div className='screen-form'>
        <h1 onClick={()=>router('/multiplepage')}>Form Dteails</h1>
        <form onSubmit={handelSubmit}>
            <div className='form-Addproduct'>
                  <div><input name="name" type="text" placeholder="productname" onChange={handleChange} /></div>
                  <div><input name="price" type="text" placeholder="productprice" onChange={handleChange} /></div>
                  <div><input name="image" type="text" placeholder="productimage" onChange={handleChange} /></div>
                <div><input type="submit" value ="AddProduct"/></div>

            </div>
        </form>


    </div>
  )
}

export default Addform