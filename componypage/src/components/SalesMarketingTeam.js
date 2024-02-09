
import React from "react";
import Member from "./Member";

const SalesMarketingTeam=()=>{
    const SalesMMembers=[
        {name:"abc",title: "...",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"},
        {name:"def",title: "...",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"},
        {name:"ghi",title: "...",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"},
        {name:"jkl",title: "...",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"},
        {name:"jkl",title: "...",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"},
        {name:"jkl",title: "...",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"}
    ];

    return (
        <div className="team">
            <h2>Sales/Marketing Team</h2>
            <div className="members">
                {SalesMMembers.map((member,index)=>(
                    <Member key={index} member={member}/>
                ))}
            </div>
        </div>
    );
}
export default SalesMarketingTeam;