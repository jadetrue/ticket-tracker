import React from "react";
import {Counter} from "../Counter/Counter";

export const MemberCard = ({name, role}) => {
    return (
        <div className="border-2 m-2 bg-white w-10/12 p-5 rounded-lg drop-shadow-lg">
            <h2 className="pb-2 font-bold">{name}</h2>
            <p className="pb-5 italic">{role}</p>
            <Counter />
        </div>
    );
};

export default MemberCard;
