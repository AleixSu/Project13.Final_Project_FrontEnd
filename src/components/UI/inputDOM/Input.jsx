import React from 'react'

const Input = ({
  id,
  labelText,
  type = 'text',
  className = '',
  placeholder = '',
  required = false,
  register,
  errors,
  accept
}) => {
  const rules = {
    ...(required && { required: 'This field is required' })
  }

  return (
    <div className={className}>
      <label htmlFor={id}>{labelText}</label>
      <input
        {...register(id, rules)}
        type={type}
        className={id}
        id={id}
        placeholder={placeholder}
        accept={accept}
      />
      {errors?.[id] && <p className='formError'>{errors[id].message}</p>}
    </div>
  )
}

export default Input
