import React from "react";
import Member from "./Member";

const DevelopmentTeam=()=>{
    const DevelopMembers=[
        {name:"abc",title: "React developer",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"},
        {name:"def",title: "SEO engineer",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"},
        {name:"ghi",title: "Fullstack developer",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"},
        {name:"jkl",title: "Angular developer",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"}
    ];

    return (
        <div className="team">
            <h2>Development Team</h2>
            <div className="members">
                {DevelopMembers.map((member,index)=>(
                    <Member key={index} member={member}/>
                ))}
            </div>
        </div>
    );
}
export default DevelopmentTeam;