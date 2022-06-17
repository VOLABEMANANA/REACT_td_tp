import React from "react";
export function Tablebody(props: { label1: string; label2: string; label3: string; label4: string; label5: string; label6: string }){
    const{label1,label2,label3,label4,label5,label6}=props;
return(
    <tr>
        <td>{label1}</td>
        <td>{label2}</td>
        <td>{label3}</td>
        <td>{label4}</td>
        <td>{label5}</td>
        <td>{label6}</td>
    </tr>
)
}