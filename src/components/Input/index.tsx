import React from 'react';

import { Container } from './styles';

interface IProps {
  label: string;
}

const Input: React.FC<JSX.IntrinsicElements['input'] & IProps> = ({
  label,
  id,
  children,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={id}>
        <input id={id} {...rest} />
        <span>{label}</span>
      </label>
      {children}
    </Container>
  );
};

export default Input;
