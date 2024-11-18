import React from "react";

export const ShiftBy = ({ x = 0, y = 0, children, ...rest }) => {
    return (
        <div
            {...rest}
            style={{
                transform: `translate(${x}px, ${y}px)`,
            }}
        >
            {children}
        </div>
    );
};
