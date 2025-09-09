import React from "react";

function Button({ children, type='button', bgColor='blue-600', textColor='white', className='', ...props}) {
    return (
        <button
            type={type}
            className={`px-4 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;