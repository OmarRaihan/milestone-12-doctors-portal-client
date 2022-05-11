import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn border-0 uppercase font-bold bg-gradient-to-r from-teal-500 to-emerald-500 shadow-xl">{children}</button>
        </div>
    );
};

export default PrimaryButton;