import React, {Fragment} from "react";


export default function Input({
    name,
    value,
    onChange
}){
  return(
    <Fragment>
        <input 
            name = {name}
            value = {value}
            onChange={onChange} 
        />
    </Fragment>
  )
}