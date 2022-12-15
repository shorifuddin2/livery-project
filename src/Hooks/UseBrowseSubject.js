import { useEffect, useState } from "react";

const UseBrowseSubject = () =>{
    const [myProducts, setProducts] = useState([]);

useEffect(() =>{
     fetch('browseStudent.json')
    .then(res =>res.json())
    .then(data => setProducts(data));
},[])
return [myProducts, setProducts];
}
export default UseBrowseSubject;