import {
  HeroContainer,
  HeroImageContainer,
  HeroTextContainer,
} from '../components/Hero';

import { Animation } from '../components/HomePageAnimations';
import { FAQs } from '../components/FAQs';
import { HomepageTiles } from '../components/HomepageTiles';
import Image from 'next/image';
import { JoinTeamSection } from '../components/JoinTeamSection';
import Layout from '../components/Layout';
import { Marquee } from '../components/Marquee';
import { MeetStaffSlider } from '../components/MeetStaffSlider';
import headerImg from '../public/images/header-image.jpg';
import { styled } from 'goober';
import { useState } from 'react';

const HomePageAnimationsContainer = styled('div')`
  > div {
    width: 100px;
    &:first-child {
      margin-bottom: -10px;
    }
    &:last-child {
      transform: scale(-1, 1);
    }
  }

  margin-top: -30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding-left: 20%;
  padding-right: 30%;
  margin-bottom: -20px;

  @media (max-width: 1200px) {
    padding-left: 12%;
    padding-right: 23%;
  }
  @media (max-width: 1000px) {
    padding-left: 10%;
    padding-right: 20%;
  }
  @media (max-width: 900px) {
    padding-left: 10%;
    padding-right: 50%;
  }
  @media (max-width: 700px) {
    padding-left: 20px;
    padding-right: 40%;
  }
  @media (max-width: 500px) {
    padding-left: 0px;
    padding-right: 30%;
  }
`;

const title = 'Empowering People, Advancing Pets.';
const subtitle =
  'Welcome to Palms & Paws, a new approach to animal care dedicated to delivering kind and compassionate services in a calm, friendly, professional environment. By innovating new approaches to improving the lives of pets while supporting, educating and empowering pet lovers, we ensure that we always deliver on our promise of Empowering People, Advancing Pets.';

export default function Home() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <Layout title='Home' description={`${title} - ${subtitle}`}>
      <HeroContainer>
        <HeroImageContainer
          ar='1423 / 1185'
          className={imageIsLoaded ? 'loaded' : ''}
        >
          <Image
            priority
            src={headerImg}
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
        <HeroTextContainer>
          <HomePageAnimationsContainer>
            <Animation path='/animations/cat.json' />
            <Animation path='/animations/dogShake.json' />
          </HomePageAnimationsContainer>
          <h1>
            <i>Empowering</i> People,
            <br />
            <i>Advancing</i> Pets.
          </h1>
          <p>
            Welcome to Palms & Paws, a new approach to animal care dedicated to
            delivering kind and compassionate services in a calm, friendly,
            professional environment.
          </p>
          <p>
            By innovating new approaches to improving the lives of pets while
            supporting, educating and empowering pet lovers, we ensure that we
            always deliver on our promise of Empowering People, Advancing Pets.
          </p>
        </HeroTextContainer>
      </HeroContainer>
      <HomepageTiles />
      <MeetStaffSlider />
      <FAQs />
      <Marquee>
        <h3>
          <i>Empowering</i> People, <i>Advancing</i> Pets.
        </h3>
      </Marquee>
      <JoinTeamSection />
    </Layout>
  );
}
