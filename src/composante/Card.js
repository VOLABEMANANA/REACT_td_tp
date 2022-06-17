import React from "react";
export function Card(props:{children:any ;libel:String}){
    const {children,libel} = props;
    return(
<div className="card mb-4">
    <div className="card-header">
        <i className="fas fa-table me-1"></i>
        {libel}
    </div>
    <div className="card-body">
        {children}
    </div>
</div>)
}