import {
  HeroContainer,
  HeroImageContainer,
  HeroTextContainer,
} from '../components/Hero';

import { Animation } from '../components/HomePageAnimations';
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
  margin-top: -20px;
`;

const CultureTextContainerInner = styled('div')`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding-bottom: calc(var(--page-side-padding) * 2);
`;

const CulturePageAnimationsContainer = styled('div')`
  > div {
    width: 300px;
    &:first-child {
      width: max(30vw, 400px);
      margin-bottom: -3vw;
    }
    &:last-child {
      transform: scale(-1, 1);
    }
  }

  margin-top: -25vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding-left: 15%;
  padding-right: 24%;

  @media (max-width: 1200px) {
    padding-left: 10%;
    padding-right: 13%;
  }

  @media (max-width: 900px) {
    margin-top: -20vw;
    padding-left: 20px;
    padding-right: 20px;
    > div {
      width: 250px;
      &:first-child {
        width: max(30vw, 300px);
        margin-bottom: -3vw;
      }
    }
  }
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
      <CulturePageAnimationsContainer>
        <Animation path='/animations/cat.json' />
        <Animation path='/animations/dogShake.json' />
      </CulturePageAnimationsContainer>
      <CultureTextContainer>
        <CultureTextContainerInner>
          <p>
            <strong>Others-oriented leadership</strong> is intentionally helping
            others grow and succeed intellectually, emotionally, personally, and
            professionally, which is how we best care for people and pets.
          </p>
          <p>
            Our <strong>others-oriented culture</strong> of leadership
            development and professional empowerment is at the heart of our
            ability to deliver superior service. This can only happen when you
            have a team that you <strong>trust</strong>, to provide the highest
            level of veterinary medicine, client experience, and pet-problem
            solving.
          </p>
          <p>
            Our continued <strong>investment</strong> in our own team’s
            leadership and growth enables team members to advance in their
            careers, and deliver <strong>ever-more thoughtful care</strong>.
          </p>
          <p>
            Our goal is to <strong>care</strong> for your pet, while ensuring{' '}
            <strong>safety</strong> and <strong>security</strong> for you both.
            With highly-skilled doctors, team-based medicine, and a
            state-of-the-art veterinary medical center, we will keep you{' '}
            <strong>informed</strong>, and <strong>engaged</strong> with your
            pet’s care.
          </p>
          <p>
            <strong>The result?</strong> We bring pet owners into the center of
            their pet’s care and well-being, and we{' '}
            <strong>nurture deeper bonds</strong> between you and your furry
            friend.
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
