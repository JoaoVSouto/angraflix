import styled from 'styled-components';

interface IContainerProps {
  categoryColor?: string;
}

export const Container = styled.ul<IContainerProps>`
  padding: 0;
  margin: 0;

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    transform: initial;

    &:before {
      font-size: 40px;
      color: ${({ categoryColor }) => categoryColor || 'red'};
    }
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;

  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;
