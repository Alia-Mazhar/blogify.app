import React from 'react';

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-6 py-2 rounded-full ${textColor} ${className} hover:bg-opacity-90 transition duration-200 ease-in-out`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
