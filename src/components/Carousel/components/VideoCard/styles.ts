import styled from 'styled-components';

interface IProps {
  url: string;
  categoryColor?: string;
}

export const VideoCardContainer = styled.a<IProps>`
  border: 2px solid ${({ categoryColor }) => categoryColor || 'red'};
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: var(--white);
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;

    + span {
      transform: translateY(0);
    }
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const VideoTitle = styled.span`
  position: absolute;
  top: 16px;
  left: 8px;
  font-size: 32px;
  font-weight: bold;
  transform: translateY(-150%);
  pointer-events: none;
  transition: transform 0.3s;
  max-width: calc(100% - 32px);
  max-height: calc(100% - 32px);
`;
