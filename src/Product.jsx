import React, { useState } from "react";

const Product = ({ products, setProductDetail }) => {
    return <>
        <div class="container py-3">
            <header>
                <div className="dflex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                    <h1 className="display-4 font-weight-normal">Product List</h1>
                </div>
            </header>
            <main>
                <div className="row row-cols-1 row-row-cols-md-3 mb-3 text-accent">
                    {/* Product List Started */}
                    {
// products.map((product)=>(
//     <p>{product.name}</p>
// ))

                        products.map((product) =>(
                            <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">{product.name}</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title"> ${product.price}.00 </h1>
                                        <ul className="list-list-unstyled mt-3 mb-4">
                                            <li>Category: {product.category}</li>
                                            <li>Category: {product.price}</li>
                                            <li>Category: {product.description}</li>
                                        </ul>
                                        <button type="button" onClick={()=>setProductDetail(product)} class="w-100 btn btn-lg btn-primary">View Detail</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                    {/* Product List Item  */}
                </div>
            </main>
        </div>

    </>

};

export default Product;