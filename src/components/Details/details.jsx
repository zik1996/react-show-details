import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Products } from "../Products/products";

export function Details(){
    let params = useParams();
    const [products, setProducts] = useState({id:0, title:"", price:"", description:"", category:"", image:"", rating:{rate:0, count:0}})

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>{
            setProducts(res.data)
        })
    },[params.id])
    return(
        <div>
            <h1>Details</h1>
            <div className="row">
                <div className="col-8">
                    <img src={products.image} width="400" height="300" alt="" />
                </div>
                <div className="col-4">
                    <dl>
                        <dt>Title</dt>
                        <dd>{products.title}</dd>
                        <dt>Price</dt>
                        <dd>{products.price}</dd>
                        <dt>Rating</dt>
                        <dd><span className="bi bi-star-fill text-success"></span> {products.rating.rate} [{products.rating.count}] Reviews</dd>
                        <dt><Link>Description</Link></dt>
                    </dl>
                </div>
            </div>
            <Link to={`/products/${products.category}`}>Back to products</Link>
        </div>
    )
}