import React, { useState } from "react";
//utils 
import { _localSerialization } from "../utils/utils";
//atomics
import Input from "../atomics/input";


//state
const formState = { username: "", name: "" };

export default function AddUser() {
    const [fields, setFields] = useState(formState);


    const handleInput = (evt) => {
        const { name, value } = evt.target;

        setFields({
            ...fields,
            [name]: value
        });
    }

    const doSave = () => {
        let localUsers = _localSerialization.getItem("users");
        
        localUsers.push(fields);
        _localSerialization.setItem("users", localUsers);
        alert("success...");
        window.location.reload(true);
    }

    const { username, name } = fields;
    return (
        <div>
            <section>
                <label>username</label>
                <Input name="username" value={username} onChange={handleInput}/>
            </section>
            <section>
                <label>name</label>
                <Input name="name" value={name} onChange={handleInput} />
            </section>
            <div>
                <button onClick={doSave}>save user</button>
            </div>
        </div>
    )
}