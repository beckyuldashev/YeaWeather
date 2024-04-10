import { ComponentProps } from 'react';
import cl from './styles.module.css';

const Input = (props: ComponentProps<'input'>) => {
  return <input {...props} className={`${cl.input} ${props.className}`} />;
};

export default Input;
