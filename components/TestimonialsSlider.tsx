import CarouselBase from './CarouselBase';
import React from 'react';
import { styled } from 'goober';

type Props = {};

const Container = styled('div')`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    padding-bottom: 20px;
  }
`;

const Slide = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: var(--page-side-padding);
  padding-right: var(--page-side-padding);
  * {
    text-align: center;
    max-width: 700px;
  }
`;

const Testimonials = [
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Lorem ipsum dolor sit amet.
    </p>
  </>,
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Lorem ipsum dolor sit amet.
    </p>
  </>,
];

export const TestimonialsSlider: React.FC<Props> = () => {
  return (
    <Container>
      <h3>Testimonials</h3>
      <CarouselBase autoplay>
        {Testimonials.map((Testimonial, i) => (
          <Slide className='embla__slide' key={i}>
            {Testimonial}
          </Slide>
        ))}
      </CarouselBase>
    </Container>
  );
};
