import { useEffect, useState } from "react";

const UseTrendingProduct = () =>{
    const [myProducts, setProducts] = useState([]);

useEffect(() =>{
     fetch('trendingProduct.json')
    .then(res =>res.json())
    .then(data => setProducts(data));
},[])
return [myProducts, setProducts];
}
export default UseTrendingProduct;