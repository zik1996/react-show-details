import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export function Products(){
    const [products, setProducts] = useState([{id:0, title:"", price:"", description:"", category:"", image:"", rating:{rate:0, count:0}}]);

    let params = useParams();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(res=>{
            setProducts(res.data)
        })
    })
    return(
        <div>
            <h1>{params.category.toUpperCase()}</h1>
            <div className="row">
                <div className="col-2">
                    <div className="d-flex flex-column overflow-auto" style={{height:"500px"}}>
                        {
                            products.map(product=>
                                <div key={product.id} className="card p-2 m-2" style={{width:"130px"}}>
                                    <div className="card-header overflow-auto" style={{height:"100px"}}>
                                        <img src={product.image} alt="this is banner" width="100%" height="80px"/>
                                    </div>
                                    <div className="card-footer text-center">
                                        <Link className="btn btn-primary w-100" to={`details/${product.id}`}>Details</Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col-8">
                    <Outlet />
                </div>
            </div>

            <Link to="/" className="text-decoration-none"><span className="bi bi-chevron-left"></span> Back to Home</Link>
        </div>
    )
}