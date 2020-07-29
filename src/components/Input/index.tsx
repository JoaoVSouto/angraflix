import React from 'react';

interface IProps {
  label: string;
}

const Input: React.FC<JSX.IntrinsicElements['input'] & IProps> = ({
  label,
  id,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input id={id} {...rest} />
      </label>
    </div>
  );
};

export default Input;
