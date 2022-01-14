import React, { useState } from "react";


const initialState = {name:"", alias:""};

export default function Add({ setItems }) {
  const [field, setField] = useState(initialState);


  function handle(evt) {
    const { name, value } = evt.target;
    setField({
      ...field,
      [name]:value
     });
  }

  function doAdd() {
    setItems(cache => [...cache, {name:field.name, alias:field.alias}]);
  }

  const {name, alias} = field;
  return (
    <div>
      <label>add</label>
      <input placeholder="name" name="name" value={name} onChange={handle} />
      <input placeholder="alias" name="alias" value={alias} onChange={handle} />
      <br />
      <button onClick={doAdd}>add</button>
    </div>
  )
}