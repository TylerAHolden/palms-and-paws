import CarouselBase from './CarouselBase';
import React from 'react';
import { styled } from 'goober';

type Props = {};

const Container = styled('div')`
  padding-top: calc(var(--page-side-padding) * 2);
  padding-bottom: calc(var(--page-side-padding) * 2);
`;

const Slide = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: auto;
  background: var(--green);
  border-radius: var(--border-radius);\
  margin: 0 10px;
  padding: 40px 30px;
  height: 380px;
  &.embla__slide {
    min-width: auto;
  }

  @media (max-width: 900px) {
    &.embla__slide {
    }
  }
  @media (max-width: 600px) {
  padding: 30px 20px;
    
    &.embla__slide {
    }
  }
  h4 {
    white-space: nowrap;
    font-style: italic;
    padding-bottom: 20px;
    min-width: 260px;
  }
  * {
    color: white;
  }
`;

const ITEMS = [
  <>
    <h4>Others-oriented Leadership</h4>
    <p>
      We intentionally help others grow and succeed intellectually, emotionally,
      personally, and professionally.
    </p>
  </>,
  <>
    <h4>Results with Compassion</h4>
    <p>
      We are driven to achieve the best possible outcome, in a deeply caring
      environment.
    </p>
  </>,
  <>
    <h4>Connected Leadership</h4>
    <p>We lead by inspiring, engaging and understanding.</p>
  </>,
  <>
    <h4>Innovation Driving Action</h4>
    <p>
      We are Dreamers and Doers. We see opportunities, and we act on our
      instincts.
    </p>
  </>,
  <>
    <h4>Collaborative Ambition</h4>
    <p>We believe success is best delivered through a single unified vision.</p>
  </>,
  <>
    <h4>Limitless Potential</h4>
    <p>
      We continue to learn, improve and grow, realizing ever-greater results.
    </p>
  </>,
  <>
    <h4>Fun</h4>
    <p>Our pets know how we’re feeling. We make this as fun as possible.</p>
  </>,
];

export const CultureValuesSlider: React.FC<Props> = () => {
  return (
    <Container>
      <CarouselBase autoplay showArrows showDots={false} inViewThreshold={4}>
        {ITEMS.map((item, i) => (
          <Slide className='embla__slide' key={i}>
            {item}
          </Slide>
        ))}
      </CarouselBase>
    </Container>
  );
};
