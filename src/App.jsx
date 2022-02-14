import logo from './logo.svg';
import './App.css';
import './css/style.css';
import './css/bootstrap.css';
// import './css/responsive.css';
import Preloader from  './Preloader';

import { useEffect, useState } from 'react';
import Product from './Product.jsx';
import ProductDetail from './ProdDetail.jsx';

function App() {
  const [selctedProduct, setSelectedProduct] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [product, setProduct] = useState([
    {
        name: 'Formal Shirt',
        description: 'Product Description',
        price: '50',
        category: 'Man',
    },
    {
        name: 'Casual Shirt',
        description: 'Product Description',
        price: '60',
        category: 'Man',
    },
    {
        name: 'T-shirt',
        description: 'Product Description',
        price: '10',
        category: 'Man',
    },
    {
        name: 'Cap',
        description: 'Product Description',
        price: 10,
        category: 'Man',
    }
  ]);

  const  setProductDetail = (product) =>{
    loaderChange(true);
    setTimeout(()=>{
      setSelectedProduct(product);
      setShowLoader(false);
      loaderChange(false);
    }, 500);
  }
  const loaderChange = (show = false)=>{
    setShowLoader(show);
  };

  useEffect(()=>{
    loaderChange(false);
  }, []);

  return (
    <>  

      {showLoader ?(
        <Preloader />
      ):(
        <>
        {selctedProduct === null?(
        <Product products = {product} setProductDetail = {setProductDetail} />
      ):(
        <ProductDetail 
          selctedProduct= {selctedProduct}
          setProductDetail = {setProductDetail}
        
            /> 
          )
          
        }
        </>

      ) 

}
      
      
      
    </>
  );
}

export default App;
