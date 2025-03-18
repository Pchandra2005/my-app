import React from "react"
export default function App1(){
    let a=10
    let b=34
    const mystyle={
        backgroundColor:'pink'
    }
    return(
    
        <div>
            {a+b}
            <p style={{backgroundColor:'beige'}}>Hellowww</p>
            <p className={mystyle}>Goooooood</p>
        </div>
    )
}