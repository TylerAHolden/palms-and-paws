import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import Lightbox, { Render, Slide } from 'yet-another-react-lightbox';

import CarouselBase from './CarouselBase';
import { ContainerRect } from 'yet-another-react-lightbox/core';
import Image from 'next/image';
import Image1 from '../public/images/hospital/1.jpg';
import Image2 from '../public/images/hospital/2.jpg';
import Image3 from '../public/images/hospital/3.jpg';
import Image4 from '../public/images/hospital/4.jpg';
import Image5 from '../public/images/hospital/5.jpg';
import Image6 from '../public/images/hospital/6.jpg';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import { styled } from 'goober';
import { useState } from 'react';

const SlideContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: var(--page-side-padding);
  padding-right: var(--page-side-padding);
  aspect-ratio: 1600 / 1850;
  width: 20vw;
  margin: 10px;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 800px) {
    width: 40vw;
  }
  &.embla__slide {
    min-width: 20vw;
    @media (max-width: 800px) {
      min-width: 40vw;
    }
  }
`;

const StyledCarouselBase = styled(CarouselBase)`
  margin-top: -20px;
  margin-bottom: 160px;
  @media (max-width: 800px) {
    margin-bottom: 80px;
  }
`;

const HOSPITAL_IMAGES = [
  {
    src: Image1,
    alt: 'dogs in waiting area of veterinary clinic',
    width: 1600,
    height: 1850,
  },
  {
    src: Image2,
    alt: 'radiology equipment in vet center',
    width: 1600,
    height: 1850,
  },
  {
    src: Image3,
    alt: 'family walking outside of veterinarian clinic',
    width: 1600,
    height: 1850,
  },
  {
    src: Image4,
    alt: 'diagnostic stations inside of new veterinary office',
    width: 1600,
    height: 1850,
  },
  {
    src: Image5,
    alt: 'person with pet dog',
    width: 1600,
    height: 1850,
  },
  {
    src: Image6,
    alt: 'palms and paws veterinary clinic for dogs cats and small animals',
    width: 1600,
    height: 1850,
  },
];

type Props = {};

export const HospitalImagesCarousel: React.FC<Props> = () => {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const [allowClick, setAllowClick] = useState<any>(false);

  const handleEvent = () => {
    setAllowClick(true);
    setTimeout(() => {
      setAllowClick(false);
    }, 100);
  };

  return (
    <>
      <StyledCarouselBase autoplay inViewThreshold={4}>
        {HOSPITAL_IMAGES.map((image, i) => (
          <SlideContainer
            onMouseDown={handleEvent}
            onTouchStart={handleEvent}
            className='embla__slide'
            key={i}
            onClick={() => (allowClick ? setOpenIndex(i) : undefined)}
          >
            <Image src={image.src} alt={image.alt} layout='fill' sizes='40vw' />
          </SlideContainer>
        ))}
      </StyledCarouselBase>
      <Lightbox
        open={openIndex > -1 ? true : false}
        index={openIndex}
        close={() => setOpenIndex(-1)}
        slides={HOSPITAL_IMAGES as any}
        plugins={[Thumbnails]}
        thumbnails={{
          borderRadius: 10,
          height: 115,
          width: 100,
          padding: 0,
        }}
        render={{
          thumbnail: ({
            slide,
            rect,
            render,
            imageFit,
          }: {
            slide: Slide;
            rect: ContainerRect;
            render: Render;
            imageFit: 'contain' | 'cover';
          }) => {
            return (
              <div style={{ position: 'relative', width: 100, height: 115 }}>
                <Image
                  width={100}
                  height={115}
                  src={slide.src}
                  placeholder='blur'
                  alt={slide.alt || ''}
                />
              </div>
            ) as any;
          },
          slide: (image, offset, rect) => {
            const width = Math.round(
              Math.min(
                rect.width,
                (rect.height / (image.height || 1)) * (image.width || 1)
              )
            );
            const height = Math.round(
              Math.min(
                rect.height,
                (rect.width / (image.width || 1)) * (image.height || 1)
              )
            );

            return (
              <div style={{ position: 'relative', width, height }}>
                <Image
                  fill
                  src={image.src}
                  loading='eager'
                  placeholder='blur'
                  alt={image.alt || ''}
                  sizes={
                    typeof window !== 'undefined'
                      ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                      : `${width}px`
                  }
                />
              </div>
            );
          },
        }}
      />
    </>
  );
};
