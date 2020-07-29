import styled from 'styled-components';
import { readableColor } from 'polished';

import { Button } from '../../../components/Button';

export const Categories = styled.div`
  margin-top: 16px;
  max-width: 400px;

  h3 {
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0;
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 800px) {
    max-width: unset;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: var(--primary);
  border: 0;
  color: var(--white);
  margin-top: 24px;
`;

interface ICategoryProps {
  categoryColor?: string;
  animationDelay: number;
}

export const Category = styled.p<ICategoryProps>`
  background-color: ${({ categoryColor }) => categoryColor || 'var(--primary)'};
  color: ${({ categoryColor }) =>
    readableColor(categoryColor || 'var(--primary)')};
  margin: 8px 0;
  padding: 16px 8px;
  border-radius: 4px;
  opacity: 0;
  transform: translateX(-30%);
  animation: slideIn 0.3s ease-out
    ${({ animationDelay }) => `${animationDelay}ms`} forwards;

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
