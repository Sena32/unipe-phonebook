import React from 'react'
import './form.css'

const TextField = ({erros, label, type='text', name, value, handleChange, ...props}) => (
  <label className="text-field">
    <span>{label}</span>
    <input
      type={type} 
      placeholder={label}
      name={name}
      onChange={handleChange}
      value={value}
      {...props}
    />
    {erros &&
      <div className="erros">O Campo {label} é Obrigatório</div>
    }
  </label>
)

export default TextField