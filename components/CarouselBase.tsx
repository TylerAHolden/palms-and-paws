import React, { useCallback, useEffect, useState } from 'react';

import { CarouselDotButton } from './CarouselDotButton';
import Image from 'next/image';
import { styled } from 'goober';
import useEmblaCarousel from 'embla-carousel-react';
import { useRecursiveTimeout } from '../hooks/useRecursiveTimeout';

type Props = {
  showArrows?: boolean;
  className?: string;
  autoplay?: boolean;
  children?: React.ReactNode;
  inViewThreshold?: number;
  showDots?: boolean;
};

const Container = styled('div')`
  position: relative;
  .embla {
    overflow: hidden;
  }
  .embla__container {
    transition: height 0.2s ease;
    display: flex;
    align-items: flex-start; /* Add this */
  }
  .embla__slide {
    position: relative;
    min-width: 100%;
  }
  .embla__dots {
    display: flex;
    list-style: none;
    justify-content: center;
    padding-top: 10px;
  }
`;

const SlideButton = styled('button')`
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: relative;
  z-index: 1;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  transition: opacity 0.15s ease;
  margin: 10px;
  @media (max-width: 900px) {
    margin: 10px 0;
  }
  &:hover {
    opacity: 1;
  }
  transform: rotate(180deg);
  &.prev {
    transform: rotate(0deg);
  }
  &:disabled {
    cursor: default;
    opacity: 0.05;
  }
`;

const SlideButtonsContainer = styled('div')`
  position: absolute;
  top: -110px;
  right: calc(((100vw - 1300px) / 2));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -20px;
  @media (max-width: 1390px) {
    right: var(--page-side-padding);
  }
  @media (max-width: 900px) {
    margin-right: -10px;
    top: -90px;
  }
`;

const CarouselBase: React.FC<Props> = ({
  children,
  showArrows,
  className,
  autoplay: _autoplay = true,
  inViewThreshold = 1,
  showDots = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    inViewThreshold,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  const { play, stop } = useRecursiveTimeout(autoplay, 3000);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    stop();
  }, [emblaApi, stop]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    stop();
  }, [emblaApi, stop]);

  const scrollTo = useCallback(
    (index: any) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      stop();
    },
    [emblaApi, stop]
  );

  useEffect(() => {
    if (_autoplay) {
      play();
    }
  }, [_autoplay, play]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('pointerDown', stop);
  }, [emblaApi, setScrollSnaps, onSelect, stop]);

  return (
    <Container className={className}>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>{children}</div>
        {showArrows && (
          <SlideButtonsContainer>
            <SlideButton onClick={scrollPrev} className='prev'>
              <Image
                src='/svg/SliderArrow_black.svg'
                alt='Previous'
                width={39}
                height={39}
              />
            </SlideButton>
            <SlideButton onClick={scrollNext}>
              <Image
                src='/svg/SliderArrow_black.svg'
                alt='Next'
                width={39}
                height={39}
              />
            </SlideButton>
          </SlideButtonsContainer>
        )}
      </div>
      {showDots && (
        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <CarouselDotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default CarouselBase;
