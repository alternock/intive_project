import React from "react";


export default function Lista({store}){
    return(
        <div>
            {store.map((item, idx)=>(<li key={idx}>{item.email} - {item.name} - {item.age}</li>))}
        </div>
    )
 }