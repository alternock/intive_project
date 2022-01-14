import React, {useState} from "react";


export default function Form(){
    const [checked, setChecked] = useState(false);
    const [radio, setRadio] = useState("");
    const [options, setOptions] = useState(["down", "medium", "top"]);
    const [lista, setLista] = useState("");

    const handleCheck = (evt) =>{
        setChecked(evt.target.checked);
    }
    
    const handleRadio = (evt) =>{
        setRadio(evt.target.value);
    }

    const handleSelected = (evt) =>{
        setLista(evt.target.value);
    }

    return(
        <div>
           <h3>#checked {checked?"true":"false"}</h3>
           <input type="checkbox" checked={checked} onChange={handleCheck}/>           

           <h3>#radio {radio}</h3>
           <input type="radio" name="planet"  value="venus" onChange={handleRadio}/>
           <input type="radio" name="planet"  value="tierra" onChange={handleRadio}/>
           <input type="radio" name="planet"  value="martes" onChange={handleRadio}/>

           <h3>#selected {lista}</h3>
           <select name="lista" value={lista} onChange={handleSelected}>
              {options.map((option, idx)=><option key={idx} value={option}>{option}</option>)}
           </select>
        </div>
    )
}