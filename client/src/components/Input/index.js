import React from 'react';

const Input = ({
    label = '',
    name = '',
    type = '',
    className = '',
    inputClassNames='',
    isRequired = true,
    placeholder = '',
    value='',
    onChange=()=>{},
}) => {
    const divClassName = className === '' ? 'w-1/2' : className;
    const inputClassName = inputClassNames === '' ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5' : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 '+inputClassNames;
    return (
        <div className={divClassName}>
            <label htmlFor={name} className='text-sm font-medium text-gray-800'>
                {label}
            </label>
            <input
                type={type}
                id={name}
                className={inputClassName}
                placeholder={placeholder}
                required={isRequired}
                value={value}
                onChange={onChange}
                style={{ outline: 'none' }}
            />
        </div>
    );
};

export default Input;
