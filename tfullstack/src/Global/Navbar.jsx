import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../Component/Context/AuthContext'

const Navbar = () => {
    const {state,dispatch}=useContext(AuthContext); 
    const username = state?.user?.name;
    const router=useNavigate();
    const Logout=()=>{
        dispatch({
            type:"LOGOUT"
        })
    }

  return (
<div id="navbar">
        <div id="nb">
            <div>             
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIvMR55RXNIxhyJbtIomYn-IWTJng7WDhlQ&usqp=CAU"/>
              </div>
        </div>
        <div id="nb2">
            <div>
                <input type="search" placeholder="Search for Gold Jewellery,Diamond Jewellery and more.."/>
            </div>
            
        </div>
        {state?.user?.role==="seller" ?
        <div id="nb3">
        <div>
            <i class="fa-solid fa-store"></i>
            <p>Add Product</p>
        </div>
       
      

        <div>
            <i class="fa-regular fa-heart"></i>
            <p>Update Product</p>
        </div>
        <div>
            <i class="fa-solid fa-cart-shopping"></i>
            <p >Delete Product</p>
        </div> 
        <div>
            <i class="fa-regular fa-user"></i>
            {username?<p>{username}</p>:<p onClick={()=>router('/login')}>LOGIN</p>}
       
        </div>
       
    </div> :
    <div id="nb3">
    <div>
        <i class="fa-solid fa-store"></i>
        <p>STORES</p>
    </div>
   
  

    <div>
        <i class="fa-regular fa-heart"></i>
        <p onClick={()=>router('/register')}>Register</p>
    </div>
    <div>
        <i class="fa-solid fa-cart-shopping"></i>
        <p onClick={()=>router('/cart')} >CART</p>
    </div> 
    <div>
        <i class="fa-regular fa-user"></i>
        {username?<p>{username}</p>:<p onClick={()=>router('/login')}>LOGIN</p>}
   
    </div>
   
</div> }

        <div id="switch">
            <div style={{alignSelf:'center'}}>
             {username?<button onClick={Logout}>LOGOUT</button>:<button></button>}
             {/* <p onClick={()=>router('/login')}>Login</p> */}
            </div>
            </div>

        

    </div>  

   
  )
    

    }


export default Navbar