import React from "react";
//hooks
import useGetUsers from "../hooks/get_users.hook";


export default function Users() {
    const { users } = useGetUsers();

    const cbGetUsers = (user, idx) => <li key={idx}>{user.username} - {user.name}</li>


    return (
        <div>
            <h1>Users</h1>
            {users.map(cbGetUsers)}
        </div>
    )
}