import React from "react";

export const MemberCard = ({name, role, children}) => {
    return (
        <div className="border-2 m-2 bg-white w-10/12 p-5 rounded-lg drop-shadow-lg hover:border-teal-200">
            <h2 className="pb-2">{name}</h2>
            <p className="pb-5">{role}</p>
            {children}
        </div>
    );
};
