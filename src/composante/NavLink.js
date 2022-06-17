import React from "react";
export function Navlink(props:{ClassName:string;Link:string,label:string}){
    const {ClassName,Link,label}=props;
    return(
        <a className="nav-link" href={Link}>
            <div className="sb-nav-link-icon"><i className={ClassName}></i></div>
             {label}
        </a>
    )
}

