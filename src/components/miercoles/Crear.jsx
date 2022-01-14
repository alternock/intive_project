import React, { useState } from "react";


const initialState = {
    email: "",
    name: "",
    age: ""
};

export default function Crear({ setStore }) {
    const [inputs, setInputs] = useState(initialState)

    function handle(evt) {
        const { name, value } = evt.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    }

    function fnCrear(){
        const {email, name, age} = inputs;
        setStore(prevState => [...prevState, {email, name, age}]);
    }

    const { email, name, age } = inputs;
    return (
        <div>
            <section>
                <label>email</label>
                <input name="email" value={email} onChange={(handle)} />
            </section>
            <section>
                <label>name</label>
                <input name="name" value={name} onChange={handle} />
            </section>
            <section>
                <label>age</label>
                <input name="age" value={age} onChange={handle} />
            </section>
            <br />
            <button onClick={fnCrear}>crear</button>
        </div>
    )
}