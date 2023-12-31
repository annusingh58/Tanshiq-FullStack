import React, { useContext, useEffect, useState } from 'react';
import "../Style/Multiplepage.css"
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';

const Multiplepage = () => {
    const [products, setProducts] = useState([]);
    const { state } = useContext(AuthContext);
    console.log(state);

    const router = useNavigate();
    useEffect(() => {
        async function getAllProducts() {
            try {
                const response = await axios.get("http://localhost:2000/anu/getallproducts");
                if (response) {
                    setProducts(response?.data?.products);
                    console.log(response?.data?.products);
                }
            } catch (error) {
                if (!error.response.data.message) {
                    toast(error.response.data.message)
                }
            }
        }
        getAllProducts();
    }, [])

    return (
        <>
        <div id="screen-multiple">
            {/* <div id="navbar">
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



            </div> */}
            <div id="navbar2">
                <div>
                    <p>ALL JEWELLRY</p>
                    <p>GOLD</p>
                    <p>DIAMOND</p>
                    <p>EARRINGS</p>
                    <p>RINGS</p>
                    <p>MIA</p>
                    <p onClick={()=> router('/addform')}>ADD PRODUCT</p>
                    <p>RIVAAH</p>
                    <p>GOLDEN HARVEST</p>
                    <p>CORPORATE GIFTING</p>
                    <p>MORE</p>
                </div>
            </div>
            <div id="navbar3">
                <div>
                    <p>PRICE<span><i class="fa-solid fa-chevron-down"></i></span></p>
                    <p>JEWELLERY TYPE<span><i class="fa-solid fa-chevron-down"></i></span></p>
                    <p onClick={()=>router('/addfrom')}>PRODUCT<span><i class="fa-solid fa-chevron-down"></i></span></p>
                    <p>GENDER<span><i class="fa-solid fa-chevron-down"></i></span></p>
                    <p>BRAND<span><i class="fa-solid fa-chevron-down"></i></span></p>
                    <p>METAL COLOUR<span><i class="fa-solid fa-chevron-down"></i></span></p>
                    <p>SEE MORE FILTER<span><i class="fa-solid fa-chevron-down"></i></span></p>
                </div>






            </div>

            <div id="body-multiple">
                <div id="body1">
                    <p>Home| <span>jumka Earrings</span></p>
                    <h2>jhumka-Earrings | 116 DESIGNS</h2>
                    <div>
                        <button><span><i class="fa-regular fa-circle-right"></i></span>COMPARE</button>
                        <button>SORT BY : BEST SELLERS<span><i class="fa-solid fa-chevron-down"></i></span></button>
                    </div>
                </div>

                {/* <div id="productsT">

            </div> */}



                {products?.length ? <div id="body2-multiple">
                    {products.map((product) => (
                        <div onClick={() => router(`/single/${product._id}`)}>
                            <div>
                                <img src={product.image} />
                            </div>
                            <div>
                                <h6>{product.name}</h6>
                                <h5>RS {product.price}</h5>
                                <p>women | Earrings</p>
                                <button>Explore Now</button>

                            </div>

                        </div>
                    ))}

                    {/* <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/511618JGRABA00.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Antique Drop Earrings</h6>
                        <h5>RS 63353</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/511618JGVABA00_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Traditional Floral Gold Jhumki Earr...</h6>
                        <h5>RS 69126</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/512216JHEABA00_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Beguiling 22 Karat Gold </h6>
                        <h5>RS 43340</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/511518JCZABA00_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Opulent Gold Jhumka Style Earrings </h6>
                        <h5>RS 46340</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/517C00JJVABACZ_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Splendid Contemporary Jhumkas </h6>
                        <h5>RS 64919</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>

                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51D3B1JDHABA40_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Timeless Ruby and Emerald Jhumk </h6>
                        <h5>RS 77522</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/515090JCYABA00_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Dainty Gold Jhumkas </h6>
                        <h5>RS 77686</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/501719JAZABA09_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Sleek Stunning Gold and Diamond  </h6>
                        <h5>RS 109686</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/511518JDBABA00.jpg?impolicy=pqmed&imwidth=640/"/>
                    </div>
                    <div>
                        <h6>Captivating Yellow Gold Jhumki Earrings
                          </h6>
                        <h5>RS 86686</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51W3KPJDRAEA28_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Nature Inspired Jhumka </h6>
                        <h5>RS 147522</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51W2A2JHCABAP1_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Opulent Lakshmi Jhumka </h6>
                        <h5>RS 104769</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51W2KPJLDABAP1_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Nature Inspired Jhumka </h6>
                        <h5>RS 167522</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51O2JRJBVABAP1_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>
                            Radiant Elephant Jhumkas </h6>
                        <h5>RS 125769</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51W2KPJLDABAP1_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Peacock Jhumka </h6>
                        <h5>RS 104769</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/50W3KPJRKABA28_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Nature  Jhumka </h6>
                        <h5>RS 167522</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51W3KPJESAEA28_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>
                            Radiant  Jhumkas </h6>
                        <h5>RS 65769</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51W2A2JHTABAP1_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>Antique Curved Earrings</h6>
                        <h5>RS 83353</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/511618JGVABA00_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6> Floral Gold Jhumki Earr...</h6>
                        <h5>RS 73126</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div>
                <div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Catalog/512216JHEABA00_1.jpg?impolicy=pqmed&imwidth=640"/>
                    </div>
                    <div>
                        <h6>22 Karat Gold </h6>
                        <h5>RS 25340</h5>
                        <p>women | Earrings</p>
                        <button>Explore Now</button>

                    </div>

                </div> */}


                </div> : <div>loading</div>}

            </div>

            <div id="footer-multiple">
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

        </div>
        </>



    )
}

export default Multiplepage