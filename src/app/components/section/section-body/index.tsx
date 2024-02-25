import React from "react";

interface IProps {
    children: React.JSX.Element
}

export const Body = ({children}: IProps) => {
    return (
        <div >
            {children}
        </div>
    )
}
