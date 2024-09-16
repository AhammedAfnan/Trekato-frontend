import React from 'react'

interface FormInputProps {
    id: string;
    label: string;
    placeholder: string;
    type?: string;
}

const FormInput:React.FC<FormInputProps> = ({ id, label, placeholder, type= "text"}) => {
  return (
    <>
        <label htmlFor={id} className='block text-black font-semibold mb-2'>
            {label}
        </label>
        <input 
        type={type} 
        id={id}
        placeholder={placeholder}
        className='w-full border rounded-full p-2 mb-4 ' 
        />
    </>
  )
}

export default FormInput
