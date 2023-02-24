import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../index.css'
function Viwe(){
    const {productTd} = useParams(0);
    const [product,setProduct]=useState([])
    console.log(productTd);
    useEffect(() => {
        fetch(`http://localhost:9000/products/${productTd}`).then(res => res.json()).then(data => setProduct(data))
    }, [productTd])   
 
    return(
        <>
        <div className="card container card-hight  border-0 mt-5 " >
                    <a href={`/products/${product.id}`}>
                        <div className="image">
                            <img className="" src={product.image} alt={product.title} />
                        </div>
                    </a>
                    <div className="content">
                        <h5 className="header"> Title :- {product.title}</h5>
                        <h5 className="price">price :- {product.price}$</h5>
                        <span className="price">Description :- {product.description}$</span>
                        {/* <p >Rate :-{product.rating.rate}</p> */}
                        {/* <p className="category">Count :-{product.rating.count}</p> */}
                    </div>
                </div>
        </>
    )
}
export default Viwe;