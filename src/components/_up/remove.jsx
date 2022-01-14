import React, {useState} from "react";


const initialState = {item:""};
export default function Remove({ setItems }) {
    const [field, setField] = useState(initialState);     
    
    function handle(evt){
      const {value} = evt.target;
      
      setField({item:value});
    }

    function doRemove(){
        setItems(cache =>[...cache.filter(i=>i.name !== field.item)]);
        setField({item:""});
    }

    const {item} = field;
    return (
        <div>
            <h1>remove</h1>
            <input name="item" value={item} onChange={handle}/>   
            <br/>
            <button onClick={doRemove}>remove</button>
        </div>
    )
}