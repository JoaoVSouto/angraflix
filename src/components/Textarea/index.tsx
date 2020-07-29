import React from 'react';

interface IProps {
  label: string;
}

const Textarea: React.FC<JSX.IntrinsicElements['textarea'] & IProps> = ({
  label,
  id,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <textarea id={id} {...rest} />
      </label>
    </div>
  );
};

export default Textarea;
