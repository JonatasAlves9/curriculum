import React from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement>{
    children: React.JSX.Element
}

export const Body = ({children, ...rest}: IProps) => {
    return (
        <div {...rest} >
            {children}
        </div>
    )
}
