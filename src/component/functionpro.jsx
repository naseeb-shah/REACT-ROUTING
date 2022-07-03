import { useNavigate } from "react-router-dom"




export default function Prs({props,key}){

 const path = useNavigate()
 const Goto =()=>{
    path(`product/${props.id}`)
 }


    const mystyle={
        display :"flex",
        flexwrap:"newwrap",
        justifyContent: "space-between"

    }
    return (
        <>

        <flex style={mystyle}>
        <p>Product Name :{props.title}</p>
        
        <p>Product Name :{props.price}</p>
        <button onClick={Goto} >See Product</button>

        </flex>
        </>
    )

}