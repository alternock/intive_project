import React, {
    useState,
    useEffect
} from "react";
//fetch
import fetchPlaceholder from "../api/fetch_placeholde";
//utils
import utils from "../utils/utils";


export default function useGetUsers() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        let cacheUsers;

        if (utils.getItem("users")) {
            cacheUsers = utils.getItem("users");
            setUsers(cacheUsers);
        } else {
            async function getData() {
                try {
                    const {
                        data
                    } = await fetchPlaceholder.get("/users");
                    utils.setItem("users", data); 
                    cacheUsers = utils.getItem("users");
                    setUsers(cacheUsers); 
                } catch (err) {
                    console.log(err);
                }
            }
            getData();
        }
    }, []);

    return {
        users
    }
}