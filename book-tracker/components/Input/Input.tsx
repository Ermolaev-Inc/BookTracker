import React from 'react';
import s from './InputStyles.module.sass';
import { InputProps } from './InputProps';

export const Input: React.FC<InputProps> = ({
  className = '',
  type = 'text',
  placeholder = 'Login',
  onClick,
  onChange,
  ...props
}) => {
  return (
    <div className={className} onClick={onClick} onChange={onChange} {...props}>
      <input className={s.input} type={type} placeholder={placeholder} />
    </div>
  );
};
