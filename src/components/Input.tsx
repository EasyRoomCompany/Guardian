import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Estilo do componente
   */
  style?: React.CSSProperties;
  /**
   * Typo de imput a ser implementado
   */
  type?: string;
  /**
   * Placeholder do input
   */
  placeholder?: string;
}

/**
 * Componente capaz de gerar um input padrão escolhendo seu tipo com base nas propriedades.
 */
const Input: React.FC<InputProps> = ({ style, type, placeholder, ...rest }) => {
  return (
    <input
      style={style}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
