import React from "react";
export function NavLinkCollapse(props:{Children:any;TargetData:string;ControlsAria:string,label:string}){
    const{Children,TargetData,ControlsAria,label}=props
    return(
        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target={TargetData} aria-expanded="false" aria-controls={ControlsAria}>
            {Children}
                {label}
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
        </a>
    )
}