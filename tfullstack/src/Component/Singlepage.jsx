import React, { useEffect, useState } from 'react';
import "../Style/Single.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AuthProtected from './AuthProtected';

const Singlepage = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        async function getProduct() {
            try {
                const response = await axios.post("http://localhost:2000/anu/getSingleProduct", { id });
                console.log(response);
                if (response) {
                    setProduct(response.data.product);
                }
            } catch (error) {
                alert("error")
            }
        } getProduct();
    }, [id]);
    // console.log(response,"singleproduct")
    return (
        <>
            <AuthProtected>
                <div className='screen-single'>
                    <div id="navbar">
                        <div id="nb">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIvMR55RXNIxhyJbtIomYn-IWTJng7WDhlQ&usqp=CAU" />
                            </div>
                        </div>
                        <div id="nb2">
                            <div>
                                <input type="search" placeholder="Search for Gold Jewellery,Diamond Jewellery and more.." />
                            </div>
                            <div></div>
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



                    </div>
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
                            <p>CORPORATE GIFTING</p>
                            <p>MORE</p>
                        </div>
                    </div>
                    {product ? <div id="home-single">


                        <div id="left">
                            <div>
                                <img src={product.image} />
                            </div>
                            <div>
                                <img src={product.image} />
                            </div>
                        </div>
                        <div id="right">
                            <div><p>51W3KPJDMAEA28 <i class="fa-solid fa-share-nodes"></i></p>
                                <h2>{product.name}</h2>
                            </div>

                            <div>
                                <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                                <p>Write a Review</p>

                            </div>
                            <div>
                                <p>complete your bridal trousseau with the charm of these peacock ruby Jhumkas, crafted in 22 karat yellow gold, studded with diamonds. Stone Clarity: VVS</p>
                                <h2><span> Price</span>  Rs {product.price}</h2>
                                <p>Gold Purity : 22 Karat</p>
                                <p>Not sure what to buy? Checkout our <span>Buying Guides</span></p>

                                <button>Notify Me</button>

                            </div>
                            <div>
                                <p><span><i class="fa-regular fa-gem"></i></span>Purity Guaranteed</p>
                                <p><span><i class="fa-solid fa-arrow-right-arrow-left"></i></span>Easy Return</p>
                                <p><span><i class="fa-thin fa-cube fa-xs"></i></span>Free Shipping across India</p>
                            </div>
                            <div>
                                <h4>Still Confused What to Buy?</h4>
                                <p>Get on live video call with our design experts, or visit your nearest Tanishq store to get an closer look and know more about the product.</p>
                                <button>Talk to an Expert</button>
                            </div>


                        </div>

                    </div> : <div>Loading..</div>}
                    {/* <div id="slide">
        <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishqrt/d1f34107-0514-42d9-9905-ce94f32695d2/desktop/Promises_Banner_DesktopU.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0T6206GQH590V3000-d1f34107-0514-42d9-9905-ce94f32695d2-desktop-ouo1aRI"/>
    </div> */}
                    <div id="product">
                        <h5>Product Details</h5>
                        <p>Peacock motifs, along with a classic design are bound together to form these majestic Jhumkas. Look like a goddess from mythologies when you adorn this pair</p>
                        <h4>Specifications</h4>
                        <div id="ss">
                            <p><span>Gem Stone1:</span> Ruby|Flush|Round</p>
                            <p><span>Quantity:</span>1</p>
                            <p><span>Brand:</span>Tanishq</p>
                            <p><span>Gender:</span>Women</p>
                            <p><span>Collection:</span>Rivaah</p>
                            <h4>More Information</h4>


                        </div>
                        <div id="review">
                            <h4>Review</h4>
                            <div id="star">
                                <p><span><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                                </span>review</p>
                                <button>Write a Review</button>
                                <button>Ask A Question</button>
                            </div>
                        </div>
                        <div id="review1">
                            <h4>REVIEW <span>Question</span></h4>
                            <div id="star">
                                <p><span><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                                </span>review</p>
                                <button>BE THE FIRST TO WRITE A REVIEW</button>

                            </div>
                        </div>


                    </div>
                    <div id="picss">
                        <p>Customers Who Viewed This Also Viewed</p>
                        <div id="body2">
                            <div>
                                <div>
                                    <img src="https://staticimg.titan.co.in/Tanishq/Catalog/514021JDEABAP1_1.jpg?impolicy=pqmed&imwidth=640" />
                                </div>
                                <div>
                                    <h6>Radiant Traditional jhumkas</h6>
                                    <h5>RS 78331</h5>


                                </div>

                            </div>
                            <div>
                                <div>
                                    <img src="https://staticimg.titan.co.in/Tanishq/Catalog/511618JGRABA00.jpg?impolicy=pqmed&imwidth=640" />
                                </div>
                                <div>
                                    <h6>Antique Drop Earrings</h6>
                                    <h5>RS 63353</h5>


                                </div>

                            </div>
                            <div>
                                <div>
                                    <img src="https://staticimg.titan.co.in/Tanishq/Catalog/511618JGVABA00_1.jpg?impolicy=pqmed&imwidth=640" />
                                </div>
                                <div>
                                    <h6>Traditional Floral Gold Jhumki </h6>
                                    <h5>RS 69126</h5>


                                </div>

                            </div>
                            <div>
                                <div>
                                    <img src="https://staticimg.titan.co.in/Tanishq/Catalog/512216JHEABA00_1.jpg?impolicy=pqmed&imwidth=640" />
                                </div>
                                <div>
                                    <h6>Beguiling 22 Karat Gold </h6>
                                    <h5>RS 43340</h5>


                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="footer-single">
                        <div>
                            <div>
                                <h4>Useful Links</h4>
                                <p>Delivery Information</p>
                                <p>International Shipping</p>
                                <p>Payment Options</p>
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
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3727ec18/images/footer/appstore-d.png" />

                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3727ec18/images/footer/appstore-d.png" />
                            </div>
                        </div>
                    </div>
                </div
            </AuthProtected>
        </>
    )
}

export default Singlepage;