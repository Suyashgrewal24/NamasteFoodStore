import { useRouteError } from "react-router-dom"

const Error = () =>{
    const err = useRouteError()
    console.log(err)

    return(
        <>
         <h1 style={
            {textAlign: "center", marginTop: '100px' , color: "red", fontWeight: "800"}
            }>{err?.data}</h1> 
       <h3>{err?.data?.statusText}</h3> 
       </>
    )
}

export default Error

