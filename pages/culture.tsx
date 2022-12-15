import {
  HeroContainer,
  HeroImageContainer,
  HeroTextContainer,
} from '../components/Hero';

import { CultureBeyondSection } from '../components/CultureBeyondSection';
import { CultureValuesSlider } from '../components/CultureValuesSlider';
import Image from 'next/image';
import Layout from '../components/Layout';
import { Marquee } from '../components/Marquee';
import { styled } from 'goober';
import { useState } from 'react';

const CultureTextContainer = styled('div')`
  width: 100%;
  padding-left: var(--page-side-padding);
  padding-right: var(--page-side-padding);
  margin-top: -30px;
`;

const CultureTextContainerInner = styled('div')`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding-bottom: calc(var(--page-side-padding) * 2);
`;

const title = 'Taking care of pets and the people who love them.';
const subtitle =
  "Our job isn’t simply caring for your pet. It’s helping you feel safe and secure about that care. With highly-skilled doctors and medical teams, working in a state-of-the-art environment that keeps you informed, engaged and at ease with your pet's healthcare.";

export default function Culture() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <Layout title='Culture' description={`${title} - ${subtitle}`}>
      <HeroContainer>
        <HeroTextContainer>
          <h1>
            Taking care of <i>pets</i>
            <br />
            and the <i>people</i> who
            <br />
            love them.
          </h1>
        </HeroTextContainer>
        <HeroImageContainer
          ar='1401 / 1185'
          className={imageIsLoaded ? 'loaded' : ''}
        >
          <Image
            priority
            src='/images/culture-header-image.jpg'
            alt='Palms and Paws Header Image'
            fill
            sizes='(max-width: 900px) 50vw, 25vw'
            onLoad={(event) => {
              const target = event.target as any;

              // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
              if (target.src.indexOf('data:image/gif;base64') < 0) {
                setImageIsLoaded(true);
              }
            }}
          />
        </HeroImageContainer>
      </HeroContainer>
      <CultureTextContainer>
        <CultureTextContainerInner>
          <p>
            Our job isn’t simply caring for your pet. It’s helping you feel safe
            and secure about that care. With highly-skilled doctors and medical
            teams, working in a state-of-the-art environment that keeps you
            informed, engaged and at ease with your pet’s healthcare.
          </p>
          <p>
            Our intention is to become a pillar of the local pet community, by
            providing the highest level of veterinary medicine, client
            experience, and pet-problem solving possible. This can only happen
            when you have a team that you trust, not simply to do their work to
            the highest standards but to continue to learn and grow every day.
          </p>
          <p>
            That is why our others-oriented culture of leadership development
            and professional empowerment is at the heart of our ability to
            deliver superior service. With leadership and growth as central
            tenets of the Palms & Paws approach, constant investment in one
            another will allow everyone we work with to become the best and most
            integrated version of themselves.
          </p>
          <p>
            Our approach brings pet owners into the center of their pet’s care
            and well-being, nurturing deeper bonds between you and your furry
            friend. And our investment in our own team’s leadership and growth
            enables team members to continue to advance in their careers, and
            deliver ever-more thoughtful care.
          </p>
          <p>
            Your pet is your child. We understand that. Our mission is to look
            after you both.
          </p>
        </CultureTextContainerInner>
      </CultureTextContainer>
      {/* <TestimonialsSlider /> */}
      <Marquee color='green'>
        <h3>
          Taking care of pets. <i>And the people who love them.</i>
        </h3>
      </Marquee>
      <CultureBeyondSection />
      <CultureValuesSlider />
    </Layout>
  );
}
