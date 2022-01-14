import React, { useState, useEffect } from "react";
import axios from "axios";


const initialState = {
    email: "",
    name: "",
    role: ""
};

const roleState = ["admin", "dev", "ui", "ux"];

export default function GeneralForm() {
    const [inputs, setInputs] = useState(initialState);
    const [roles, setRoles] = useState(roleState)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            try {
                const { data: { payload } } = await axios.get("http://localhost:5000/users");
                setUsers(payload);
            } catch (err) {
                console.log(err);
            }
        }

        getUsers();
    }, []);

    const handle = (evt) => {
        const { name, value } = evt.target;

        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const doAdd = async () => {
        try {
            await axios.post("http://localhost:5000/user", inputs);
        } catch (err) {
            console.log(err);
        }
        window.location.reload(true);
    }

    const { email, name, role } = inputs;
    return (
        <div>
            <h3>general form</h3>
            <section>
                <p>email {email}</p>
                <input placeholder="email" name="email" value={email} onChange={handle} />
            </section>
            <section>
                <p>name {name}</p>
                <input placeholder="name" name="name" value={name} onChange={handle} />
            </section>
            <section>
                <p>role {role}</p>
                <select name="role" value={role} onChange={handle}>
                    {roles.map((r, idx) => <option key={idx} value={r}>{r}</option>)}
                </select>
            </section>
            <section>
                <button onClick={doAdd}>add</button>
            </section>
            {"=".repeat(10)}
            <h3>users</h3>
            {users.map((u, i) => <li key={i}>{u.email} | {u.name} | {u.role} </li>)}
            {"=".repeat(10)}
        </div>
    )
}