import React from "react";

const Member=({member})=>{
    return(
        <div className="member">
            <div className="image-container">
            <img src={member.imageUrl} alt={member.name} />
            </div >
            <div className="info">
            <h3>{member.name}</h3>
            <p>{member.title}</p>
            </div>
        </div>
    );
}

export default Member;