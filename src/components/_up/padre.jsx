import React, {useState} from "react";
import List from "./list";
import Add from "./add";
import Remove from "./remove";
import Update from "./update";


const initialState = [
    {name:"foo", alias:"fooziman"},
    {name:"bar", alias:"barziman"},
    {name:"qux", alias:"quxziman"},
    {name:"ware", alias:"wareziman"}
];
export default function Padre(){
    const [data, setData] = useState(initialState);

    return(
        <div>
            <h1>padre</h1>
            <List items={data}/>
            {"*".repeat(20)}
            <Add setItems={setData}/>
            {"*".repeat(20)}
            <Remove setItems={setData}/>
            {"*".repeat(20)}
            <Update setItems={setData}/>
            {"*".repeat(20)}
        </div>
    )
}