import React, { FC } from 'react'
import { InputProps } from '../../types'

const Input: FC<InputProps> = ({ key, label, type, id, name }) => {
  return (
    <div key={key}>
      <label htmlFor="name" className='text-slate-600'>{label}</label>
      <input type={type} id={id} name={name} className='p-3 rounded-md w-full border' />
    </div>
  )
}

export default Input
