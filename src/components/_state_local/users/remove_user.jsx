import React, { useState } from "react";
//atomics
import Input from "../atomics/input";
//utils 
import { _localSerialization } from "../utils/utils";


const formState = { username: "" };

export default function RemoveUser() {
    const [fields, setFields] = useState(formState);


    const handleInput = evt => {
        const { name, value } = evt.target;

        setFields({
            ...fields,
            [name]: value
        });
    }

    const doRemoveUser = () => {
        const {username} = fields;          
        let localUsers = _localSerialization.getItem("users");

        localUsers = localUsers.filter(user => user.username !== username);
        _localSerialization.setItem("users", localUsers);
        alert("success...");
        window.location.reload(true);
    }
    
    const {username} = fields;
    return (
    <div>
        <h1>remove  with the username</h1>
        <Input name="username" value={username} onChange={handleInput}/>
        <div>
            <button onClick={doRemoveUser}>remove user</button>
        </div>
    </div>);
}