import React from 'react';
import SlickSlider from 'react-slick';

import { Container } from './styles';

export { SliderItem } from './styles';

interface IProps {
  categoryColor?: string;
}

const Slider: React.FC<IProps> = ({ children, categoryColor }) => {
  return (
    <Container categoryColor={categoryColor}>
      <SlickSlider
        dots={false}
        speed={300}
        centerMode={false}
        variableWidth
        adaptiveHeight
      >
        {children}
      </SlickSlider>
    </Container>
  );
};

export default Slider;
