import React, { useContext, useEffect, useState } from 'react';
import "../Style/Cart.css";
import axios from "axios";
import { AuthContext } from './Context/AuthContext';

const Cart = () => {
    const[addCart,setAddCart]=useState([]);
    const{state}=useContext(AuthContext)
    useEffect(()=>{
        console.log(state);
        async function getCartProducts(){
            try {
                const response=await axios.post("http://localhost:2000/anu/getCartProducts",{userId:state?.user?._id});
                if(response.data.success){
                    setAddCart(response?.data?.cartProducts);

                }
            } catch (error) {
                alert(error.response.data.message);
                
            }
        }getCartProducts();
    },[state])
    console.log(addCart);
  return (
    <div>
            <div className="screen-cart">
        {/* <div id="navbar">
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
            <div id="nb3">
                <div>
                    <i class="fa-solid fa-store"></i>
                    <p>STORES</p>
                </div>
                <div>
                    <i class="fa-regular fa-user"></i>
                    <p>ACCOUNT</p>
                </div>
                <div>
                    <i class="fa-regular fa-heart"></i>
                    <p>WISHLIST</p>
                </div>
                <div>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>CART</p>
                </div>
            </div>
    
            
    
        </div> */}
        <div id="navbar2">
            <div>
                <p>ALL JEWELLRY</p>
                <p>GOLD</p>
                <p>DIAMOND</p>
                <p>EARRINGS</p>
                <p>RINGS</p>
                <p>MIA</p>
                <p>COLLECTION</p>
                <p>RIVAAH</p>
                <p>GOLDEN HARVEST</p>
                <p>CORpORATE GIFTING</p>
                <p>MORE</p>
            </div>
        </div>
        <div id="cart">
            <h4>Encircle points :<span>000</span></h4>
            <p>Redeem Encircle points & avail discount</p>
        </div>
   {addCart?.length ?    <div id="cart1">
    {addCart.map((addCart)=>(
        <>
            <div  id="leftcart">
                <div>
                    <div id="productimage">
                         <img src={addCart.image}/> 
                    </div>
                    <div>
                        <p >{addCart.name}</p>
                        <p>511618JGRABA002EA007682</p>
                        <p id="productprice"><span><del></del></span></p>
                        <p><span><i class="fa-thin fa-square"></i></span>Add Gift Message</p>
                    </div>

                </div>

                <div>
                    <div>
                        <img src={addCart.image}/>
                    </div>
                    <div>
                        <p>{addCart.name}</p>
                        <p>51D3B1JDHABA402BA000024</p>
                        <p>Rs {addCart.price} <span><del>RS {addCart.price}</del></span></p>
                        <p><span><i class="fa-thin fa-square"></i></span>Add Gift Message</p>
                    </div>

                </div> 

                <div>
                    <div>
                    <img src={addCart.image}/>
                    </div>
                    <div>
                        <p>{addCart.name}</p>
                        <p>51D3B1JDHABA402BA000024</p>
                        <p>Rs {addCart.price} <span><del>RS {addCart.price}</del></span></p>
                        <p><span><i class="fa-thin fa-square"></i></span>Add Gift Message</p>
                    </div>

                </div>



            </div>

            
            <div id="rightcart">
                <div id="right1-cart">
                    <div>
                        <fieldset>
                            <legend>Country</legend>
                            <p>IN</p>
                            <i class="fa-solid fa-angle-down"></i>
                        </fieldset>
                    </div>
                    <div>
                        <p>pincode</p>
                        <p>Check</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div><p>Enter Code</p></div>
                        <div><p>View promo Codes</p></div>
                    </div>
                    <div>
                        <input type="number" placeholder="Enter Coupon Code"/>
                        <button>Aply</button>
                    </div>
                    <p>ORDER SUMMARY</p>
                    <div>
                        <div>
                            <p>Sub Total</p>
                            <p>Discount</p>
                            <p>Delivery Charge</p>
                            <h1>TOTAL<span>(Incl of all taxes)</span></h1>
                        </div>
                        <div>
                            <p>Rs{addCart.price}</p>
                        <p>Rs.0</p>
                        <p>FREE</p>
                        <h1>Rs.{addCart.price}</h1>
                        </div>
                    </div>
                </div>
            </div>
            </>
            ))}
        </div>:<div>loading...</div>}
        </div>
        <div id="footer-cart">
            <div>
                <div>
                    <h4>Useful Links</h4>
                    <p>Delivery Information</p>
                    <p>International Shiping</p>
                    <p>payment Options</p>
                    <p>Track Your Order</p>
                    <p>Returns</p>
                    <p>Find a store</p>
                    
                </div>
                <div>
                    <h4>Information</h4>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Offers & Contest Details</p>
                    <p>Help & FAQS</p>
                    <p>About Tanishq</p>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <p>Write to Us</p>
                    <p>Refunds & Cancellation </p>
                    <p>Chat with Us</p>

                </div>
                <div>
                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3727ec18/images/footer/appstore-d.png"/>
                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3727ec18/images/footer/appstore-d.png"/>

                </div>
            </div>
            </div>


    </div>
    

    
  )
}

export default Cart;