import React from "react";

export function InputSearch(props: { type: string; children: any}) {
  const { type, children} = props;

  return (
    <div className="input-group">
        <input className="form-control" type={type} placeholder="
         Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
        {children}
    </div>
  );
}