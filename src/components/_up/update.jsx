import React, {useState} from "react";


const initialState = {
  name:"",
  alias:""
};

export default function Update({setItems}){
    const [fields, setFields] = useState(initialState);

    function handle(evt){
       const {name, value} = evt.target;

       setFields({
          ...fields,
          [name]:value
       });
    }

    function doUpdate(){
        const {name, alias} = fields;
        setItems(cache => [...cache.map(i=>i.name == name?{name, alias}:i)]);
        setFields({name:"", alias:""});
    }

    const {name, alias} = fields;
    return(
        <div>
            <h1>update</h1>
            <input placeholder="name" name="name" value={name} onChange={handle} />
            <input placeholder="alias" name="alias" value={alias} onChange={handle} />
            <br/>
            <button onClick={doUpdate}>update</button>
        </div>
    )
}