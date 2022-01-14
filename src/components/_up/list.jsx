import React from "react";


export default function List({ items }) {

    return (
        <div>
            {items.map((item, idx) => {
                return (
                    <li key={idx}>{item.name} - {item.alias}</li>
                )
            })}
        </div>
    )
}