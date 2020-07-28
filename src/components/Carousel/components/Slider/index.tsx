import React from 'react';
import SlickSlider from 'react-slick';

import { Container } from './styles';

export { SliderItem } from './styles';

const Slider: React.FC = ({ children }) => {
  return (
    <Container>
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
