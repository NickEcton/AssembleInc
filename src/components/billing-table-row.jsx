import React from 'react';

export default function TableRow(props) {
    return (
        <div className="row">
            <div>{props.title}</div>
            <input style={{flex: "2"}} placeholder={props.placeholder}></input>
        </div>
    )
}