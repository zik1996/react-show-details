import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function Home(){
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories")
        .then(res=>{
            setCategories(res.data)
        })
    },[])
    return(
        <div>
            <h1>Home</h1>
            <ul>
                {
                    categories.map(category =>
                        <Link to={`products/${category}`}><li key={category}>{category.toUpperCase()}</li></Link>
                    )
                }
            </ul>
        </div>
    )
}