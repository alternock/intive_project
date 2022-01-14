import React, { useState } from "react";
//utils
import { _localSerialization } from "../utils/utils";


//state
const formState = { username: "", name: "" };

export default function UpdateUser() {
    const [fields, setFields] = useState(formState);

    
    const handleInput= evt => {
        const { name, value } = evt.target;

        setFields({
            ...fields,
            [name]: value
        });
    }

    const doChangeNameOfUser = () => {
        let localUsers = _localSerialization.getItem("users");

        localUsers = localUsers.map(user => user.username == username ? { username, name } : { ...user });
        _localSerialization.setItem("users", localUsers);
        alert("success...");
        window.location.reload(true);
    }

    const { username, name } = fields;
    return (
        <div>
            <h1>update user - search with username</h1>
            <section>
                <label>username</label>
                <input name="username" value={username} onChange={handleInput} />
            </section>
            <section>
                <label>name</label>
                <input name="name" value={name} onChange={handleInput} />
            </section>
            <button onClick={doChangeNameOfUser}>change the name of user</button>
        </div>
    )
}