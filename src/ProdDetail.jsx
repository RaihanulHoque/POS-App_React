import React, { useState } from "react";

const ProductDetail = ({selctedProduct, setProductDetail}) => {
    return <>
    <div class="container py-3">
            <header>
                <div className="dflex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                    <h1 className="display-4 font-weight-normal">Product Detail</h1>
                </div>
            </header>
            <main>
                <div className="row row-cols-4 row-row-cols-md-3 mb-3 text-accent">
                <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm align-items-center">
                                <h1>Product Name: {selctedProduct.name}</h1>
                                <h4>Category: {selctedProduct.category}</h4>
                                <h4>Price: {selctedProduct.price}</h4>         
                                <p>Description: {selctedProduct.description}</p>

                                <button type="button" onClick={()=>setProductDetail(null)} class="w-100 btn btn-lg btn-primary">Back to List</button>                    
                            </div>

                        </div>
                
                </div>
            </main>
            </div>
                
                
       
    </>
};

export default ProductDetail;