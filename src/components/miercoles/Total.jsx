import React from "react";


export default function Total({store}){
   
    return(
        <div>
            <h3>total items: {store.length}</h3>
        </div>
    )
}