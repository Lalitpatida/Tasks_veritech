import React from "react";
import Member from "./Member";

const LeadershipTeam=()=>{
    const leadershipMembers=[
        {name:"lalit",title: "CEO",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"},
        {name:"lalit",title: "CTO",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"},
        {name:"lalit",title: "CTO",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"},
        {name:"lalit",title: "CTO",imageUrl:"https://cdn-icons-png.flaticon.com/512/4128/4128349.png"}
    ];

    return (
        <div className="team">
            <h2>Leadership/Management Team</h2>
            <div className="members">
                {leadershipMembers.map((member,index)=>(
                    <Member key={index} member={member}/>
                ))}
            </div>
        </div>
    );
}
export default LeadershipTeam;