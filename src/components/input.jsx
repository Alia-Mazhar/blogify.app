import React, { useId } from 'react';

const Input = React.forwardRef(function Input(
    {
        label,
        type = 'text',
        className = '',
        ...props
    },
    ref
) {
    const id = useId();
    return (
        <div className='w-full mb-4'>
            {label && (
                <label htmlFor={id} className='block mb-2 text-[#ffffff] text-sm font-medium'>
                    {label}
                </label>
            )}
            <input
                type={type}
                ref={ref}
                id={id}
                className={`px-4 py-2 rounded-full bg-white text-black border border-gray-300 focus:border-[#2A9792] outline-none focus:bg-[#DCF8F2] duration-200 w-full ${className}`}
                {...props}
            />
        </div>
    );
});

export default Input;
