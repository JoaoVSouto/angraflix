import React from 'react';

import { Container } from './styles';

interface IProps {
  label: string;
  hideBehind?: boolean;
}

const Input: React.FC<JSX.IntrinsicElements['input'] & IProps> = ({
  label,
  hideBehind,
  id,
  children,
  ...rest
}) => {
  return (
    <Container hideBehind={hideBehind}>
      <label htmlFor={id}>
        <input id={id} {...rest} />
        <span>{label}</span>
      </label>
      {children}
    </Container>
  );
};

export default Input;
