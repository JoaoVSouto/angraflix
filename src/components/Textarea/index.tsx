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
        <textarea id={id} {...rest} />
        <span>{label}</span>
      </label>
    </Container>
  );
};

export default Textarea;
