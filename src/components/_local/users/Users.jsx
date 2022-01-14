import React from "react";
import useGetUsers from "../hooks/get_users.hook";


export default function Users() {
    const {users} = useGetUsers();
    
    console.log(users);
    return (
        <div>
            <h3>users</h3>
            {users.map((user, idx)=><li key={idx}>{user.username} -NAME: {user.name} -@: {user.email}</li>)}
        </div>
    )
}