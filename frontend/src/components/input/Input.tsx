import React, { FC } from 'react'
import { InputProps } from '../../types'

const Input: FC<InputProps> = ({ key, label, type, id, name, value, error, onChange, style, placeHolder }) => {
  return (
    <div key={key}>
      <label htmlFor="name" className='text-slate-600'>{label}</label>
      <input type={type} id={id} name={name} value={value} onChange={onChange} className='p-3 rounded-md w-full border' style={style} placeholder={placeHolder} />
      <div className="text-red-500 italic text-sm">{error}</div>
    </div>
  )
}

export default Input
