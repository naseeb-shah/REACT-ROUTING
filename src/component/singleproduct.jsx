
import { useParams
} from "react-router-dom";
import { useState,useEffect } from "react";
const my={
    marginLeft:"25%",
    widht:"50%",
    
    

}

export default function Singleproduct(){

    let { id } = useParams();
    const [product,setallpro]=useState([])
    const [task ,setask]=useState(false)
    
        useEffect(()=>{
    
    
           fetch(`http://localhost:3005/products/${id}`)
            .then(x=>x.json())
            .then(x=>setallpro(x))
            
    
        },[])
        console.log(product)
setTimeout(()=>setask(true),2000)

const img_url='https://png.pngtree.com/png-vector/20200224/ourmid/pngtree-colorful-loading-icon-png-image_2152960.jpg'


return(

    <>
    <div style={my}>
<h6> {product.brand} {product.title}</h6>
 

<img src={ task?product.images[0]:img_url} />
 <p>{product.description}</p>
 <p> Price  {product.price} $</p>
 </div>
    </>
)



}
