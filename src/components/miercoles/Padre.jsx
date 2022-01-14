import React, { useState, Fragment } from "react";
//components
import Total from "./Total";
import Lista from "./Lista";
import Crear from "./Crear";


const initialState = [
    {email:"foo@foo.com", name:"foo", age:20},
    {email:"bar@bar.com", name:"bar", age:23},
    {email:"hux@hux.com", name:"hux", age:30},
    {email:"rm@rm.com", name:"rm", age:18}
];

export default function Padre(){
    const [store, setStore] = useState(initialState);

    return(
        <Fragment>
          <Total store={store} />
          {"*".repeat(20)}
          <Lista store={store}/>;
          {"*".repeat(20)}
          <Crear setStore={setStore}/>
          {"*".repeat(20)}
        </Fragment>
    )
}

