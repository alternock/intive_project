import React, {
    useState,
    useEffect
} from "react";
//utils
import {
    _parse,
    _stringify,
    _local,
    _localSerialization
} from "../utils/utils";
//http client
import fetchPlaceholder from "../httpClient/http_client";
//endpoints
import usersEndpoint from "../endpoints/users_endpoints";


//state
const usersState = [];

export default function useGetUsers() {
    const [users, setUsers] = useState(usersState);
    let localUsers;


    useEffect(() => {
        let notExistsUsers = !_local.getItem("users") ? true : false;

        if (notExistsUsers) {
            const fetchUsers = async () => {
                try {
                    const {
                        data
                    } = await fetchPlaceholder.get(usersEndpoint.getUsers);
                    _localSerialization.setItem("users", data);
                    localUsers = _localSerialization.getItem("users");
                    setUsers(localUsers);
                } catch (err) {
                    console.log(err);
                }
            }
            //start functions
            fetchUsers();
        } else {
            localUsers = _localSerialization.getItem("users");
            setUsers(localUsers);
        }
    }, []);

    
    return {
        users,
        setUsers
    }
}