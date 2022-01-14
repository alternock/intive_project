import React, {useState} from "react";
//utils
import utils from "../utils/utils";


const fieldsState = {
    username:"",
    name:"",
    email:""
};

export default function AddUser(){
    const [fields, setFields] = useState(fieldsState);
      
    const handle = evt =>{
       const {name, value} = evt.target;

       setFields({
           ...fields,
           [name]:value
       });
    }

    const doAddUser = () =>{
        const users = utils.getItem("users");
        users.push(fields);
        utils.setItem("users",users);
        alert("add user...");
    }

    const {username, name, email} = fields;
    return (
      <div>
          <section>
              <label>- username</label>
              <input name="username" value={username} onChange={handle}/>
          </section>
          <section>
              <label>- name</label>
              <input name="name" value={name} onChange={handle}/>
          </section>
          <section>
              <label>- email</label>
              <input name="email" value={email} onChange={handle}/>
          </section>
          <section>
              <button onClick={doAddUser}>add user</button>
          </section>
      </div>
    )
}
