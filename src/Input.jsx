import React from 'react';


function Input({ values, id, label, name, type, onChange, onBlur, placeholder, required, touched, error, className })
{
let errorClass = "border-blue-500 ";
if (touched && error)
{
    errorClass="border-red-800"
}
    return (
        <div>
            <label className='sr-only' htmlFor={ id }>{label}</label>
            <input value={values} id={ id } name={ name } type={ type } onChange={ onChange } onBlur={ onBlur } placeholder={ placeholder } required={ required } className={"w-full rounded-md outline-none"+" "+errorClass+" "+className} />
            { touched && error && (<div className='text-xs text-red-800'>{error}</div>)}
        </div>    
    );
}

export default Input;