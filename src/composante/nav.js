import React from "react";
export function Nav(props:{reference1:string; reference2:string; reference3:string; labelRef1:string; labelRef2:string; labelRef3:string}){
    const {labelRef1,labelRef2,labelRef3,reference1,reference2,reference3}=props;
    return(
        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
        <nav className="sb-sidenav-menu-nested nav">
            <a className="nav-link" href={reference1}>{labelRef1}</a>
            <a className="nav-link" href={reference2}>{labelRef2}</a>
            <a className="nav-link" href={reference3}>{labelRef3}</a>
        </nav>
       </div>
    )
}