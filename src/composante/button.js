import React from "react";
export function Button(propos:{className:string;id:string}){
    const {className,id}=propos;
    return(
        <button className={className} id={id} href="#!">
            <i className="fas fa-bars"></i>
        </button>
    )
}