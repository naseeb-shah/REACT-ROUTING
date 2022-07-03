import { useEffect, useState } from "react"

 import Prs from "./functionpro"


 export default function Home(){
const [product,setallpro]=useState([])
const [task ,setask]=useState(false)

    useEffect(()=>{


        fetch('http://localhost:3005/products')
        .then(x=>x.json())
        .then(x=>setallpro(x))


        setask(true)

    },[])
    // console.log(product)
    return(



        <>
        
 <h1>{task?product.map((e,i)=><Prs  props={e} key={i}/>):"Product not awalbel"}</h1>
        
        
        
        
        </>
    )
 }