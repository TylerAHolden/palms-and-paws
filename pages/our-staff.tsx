import {
  HeroContainer,
  HeroImageContainer,
  HeroTextContainer,
} from '../components/Hero';

import Image from 'next/image';
import { JoinTeamSection } from '../components/JoinTeamSection';
import Layout from '../components/Layout';
import { Marquee } from '../components/Marquee';
import { MeetStaffSlider } from '../components/MeetStaffSlider';
import { useState } from 'react';

const title = 'Meet the Team';
const subtitle =
  'We are incredibly proud of the team we have assembled at Palms & Paws. Our others-oriented leadership approach enables high performing individuals and teams to consistently deliver superior medical attention, while ensuring that our patients and their people feel safe and assured about their treatments.';

export default function Staff() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <Layout title='Our Staff' description={`${title} - ${subtitle}`}>
      <HeroContainer>
        <HeroImageContainer className={imageIsLoaded ? 'loaded' : ''}>
          <Image
            priority
            src='/images/staff-header.jpg'
            alt='Veterinary doctors diagnosing at cat'
            layout='responsive'
            width={1401}
            height={1185}
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
          <h1>Meet the Team</h1>

          <p>
            We are incredibly proud of the team we have assembled at Palms &
            Paws. Our others-oriented leadership approach enables high
            performing individuals and teams to consistently deliver superior
            medical attention, while ensuring that our patients and their people
            feel safe and assured about their treatments.
          </p>
        </HeroTextContainer>
      </HeroContainer>
      <MeetStaffSlider />
      <Marquee>
        <h3>
          <i>Empowering</i> People, <i>Advancing</i> Pets.
        </h3>
      </Marquee>
      <JoinTeamSection />
    </Layout>
  );
}
