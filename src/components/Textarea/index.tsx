import React from 'react';

import { Container } from './styles';

interface IProps {
  label: string;
}

const Textarea: React.FC<JSX.IntrinsicElements['textarea'] & IProps> = ({
  label,
  id,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={id}>
        <span>{label}</span>
        <textarea id={id} {...rest} />
      </label>
    </Container>
  );
};

export default Textarea;
