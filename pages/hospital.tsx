import {
  HeroContainer,
  HeroImageContainer,
  HeroTextContainer,
} from '../components/Hero';

import CarouselBase from '../components/CarouselBase';
import Image from 'next/image';
import Layout from '../components/Layout';
import { styled } from 'goober';
import { useState } from 'react';

const HospitalHeroImageContainer = styled('div')`
  width: 100%;

  padding-left: var(--page-side-padding);
  padding-right: var(--page-side-padding);
`;

const HospitalInfoTextContainer = styled('div')`
  margin: auto;
  max-width: 1300px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: var(--page-side-padding);
  padding-bottom: calc(var(--page-side-padding) * 2);
  h2 {
    width: 40%;
    flex-shrink: 0;
    margin-right: 40px;
  }
  > div {
    flex: 1;
    flex-shrink: 0;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    h2 {
      width: 100%;
    }
  }
`;

const HospitalHeroImageContainerInner = styled('div')`
  margin: auto;
  max-width: 1300px;
  aspect-ratio: 1356 / 544;
  position: relative;
  background: white;
  img {
    opacity: 0;
    transition: opacity 500ms ease-out;
  }
  &.loaded {
    img {
      opacity: 1;
    }
  }
`;

const StyledHeroImageContainer = styled(HeroImageContainer)`
  border-radius: var(--border-radius);
  img {
    border-radius: var(--border-radius);
  }
  max-width: 600px;
  margin-left: var(--page-side-padding);
`;

const StyledHeroTextContainer = styled(HeroTextContainer)`
  max-width: 600px;
`;

const Caption = styled('p')`
  position: absolute;
  top: -28px;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  z-index: 1;
  color: var(--black);
  font-weight: 700;
  letter-spacing: 0.05em;
  font-size: 21px;
`;

const Slide = styled('div')`
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
    src: '/images/hospital/1.jpg',
    alt: 'dogs in waiting area of veterinary clinic',
  },
  {
    src: '/images/hospital/2.jpg',
    alt: 'radiology equipment in vet center',
  },
  {
    src: '/images/hospital/3.jpg',
    alt: 'family walking outside of veterinarian clinic',
  },
  {
    src: '/images/hospital/4.jpg',
    alt: 'diagnostic stations inside of new veterinary office',
  },
  {
    src: '/images/hospital/5.jpg',
    alt: 'person with pet dog',
  },
  {
    src: '/images/hospital/6.jpg',
    alt: 'palms and paws veterinary clinic for dogs cats and small animals',
  },
];

const title =
  'Introducing the newest and most advanced pet hospital on the Westside.';
const subtitle =
  'Under one roof, we are now able to offer a comprehensive array of medical services for your pets, from regular primary care check-ups and minor health issues to specialized surgical procedures, including internal medicine, cardiology and veterinary dentistry. In a warm, caring and comfortable environment, designed to maximize efficiency and minimize wait times and client inconvenience.';

export default function Hospital() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <Layout title='Hospital' description={`${title} - ${subtitle}`}>
      <HospitalHeroImageContainer>
        <HospitalHeroImageContainerInner
          className={imageIsLoaded ? 'loaded' : ''}
        >
          <Image
            priority
            src='/images/hospital-header.jpg'
            alt='veterinary center and hospital floor plan'
            sizes='
          100vw
        '
            fill
            onLoad={(event) => {
              const target = event.target as any;

              // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
              if (target.src.indexOf('data:image/gif;base64') < 0) {
                setImageIsLoaded(true);
              }
            }}
          />
        </HospitalHeroImageContainerInner>
      </HospitalHeroImageContainer>
      <HospitalHeroImageContainer>
        <HospitalInfoTextContainer>
          <h2>
            Introducing the newest and <i>most advanced</i> pet hospital on the
            Westside.
          </h2>
          <div>
            <p>
              Under one roof, we are now able to offer a comprehensive array of
              medical services for your pets, from regular primary care
              check-ups and minor health issues to surgery, dentistry and more.
              We also have specialist support, where we bring the internal
              medicine, cardiology and veterinary dentistry specialists in
              house. All of this and more is delivered in a warm, caring and
              comfortable environment.
            </p>
            <p>The Palms & Paws primary care veterinary hospital offers:</p>
            <ul>
              <li>
                A 5,600 sq. ft. facility with seven state of the art exam rooms
              </li>
              <li>Four procedure tables</li>
              <li>A sterile operating room</li>
              <li>Isolation exam room for potentially infectious patients</li>
              <li>A full-time staff of 20+ trained professionals</li>
              <li>Urgent care appointments</li>
              <li>Specialist support</li>
            </ul>
          </div>
        </HospitalInfoTextContainer>
      </HospitalHeroImageContainer>
      <StyledCarouselBase autoplay inViewThreshold={4}>
        {HOSPITAL_IMAGES.map((image, i) => (
          <Slide className='embla__slide' key={i}>
            <Image src={image.src} alt={image.alt} layout='fill' sizes='40vw' />
          </Slide>
        ))}
      </StyledCarouselBase>

      <HeroContainer>
        <StyledHeroImageContainer ar='1250 / 1088' className={'loaded'}>
          <Caption>Santa Monica Animal Shelter</Caption>
          <Image
            src='/images/hospital-shelter-image.jpg'
            alt='santa monica animal shelter'
            fill
            sizes='(max-width: 900px) 50vw, 25vw'
          />
        </StyledHeroImageContainer>
        <StyledHeroTextContainer>
          <h1>All animals need love.</h1>

          <p>
            We are located across the street from the Santa Monica Animal
            Shelter, allowing us to collaborate and ensure that{' '}
            <strong>every animal in our city gets the care it needs.</strong>
          </p>
        </StyledHeroTextContainer>
      </HeroContainer>
    </Layout>
  );
}
