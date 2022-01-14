import React, { useState, useEffect } from "react";
//http
import httpAxios from "./client_http";
//api
import usersApi from "../api/users.api";


const inputState = {
    email: "",
    name: "",
    role: ""
};

const roleState = ["ceo", "cto", "cco", "cfo"];
const usersState = [];

export default function General() {
    const [inputs, setInputs] = useState(inputState);
    const [users, setUsers] = useState(usersState);
    const [roles, setRoles] = useState(roleState);


    useEffect(() => {
        async function fnUsers() {
            try {
                const { data: { payload } } = await httpAxios.get(usersApi.GET);
                setUsers(payload);
            } catch (err) {
                console.log(err);
            }
        }
        fnUsers();
    }, []);


    const handle = (e) =>{
       const {name, value} = e.target;

       setInputs({
           ...inputs,
           [name]:value
       }); 
    }

    const doCreate = async () =>{
        try{
            await httpAxios.post(usersApi.POST, inputs);
            alert("success...");
            window.location.reload(true);
        }catch(err){
            console.log(err);
        }
    }


    const {email, name, role} = inputs;
    return (
        <div>
            <p>{email} - {name} - {role}</p>
            <article>
                <input placeholder="email" name="email" value={email} onChange={handle}/>
            </article> 
            <article>
                <input placeholder="name" name="name" value={name} onChange={handle}/>
            </article> 
            <article>
              <select name="role" value={role} onChange={handle}>
                 {roles.map((r, idx)=><option key={idx} value={r}>{r}</option>)}
              </select>
              <section>
                  <button onClick={doCreate}>create</button>
              </section>
            </article> 
            {"#".repeat(10)}
            <h4>users</h4>
            {users.map((u, i)=><li key={i}>{u.email}</li>)}
        </div>
    )
}
