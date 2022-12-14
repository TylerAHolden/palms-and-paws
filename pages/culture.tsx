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
import { useState } from 'react';

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

          <p>
            Our job isn’t simply caring for your pet. It’s helping you feel safe
            and secure about that care.
          </p>
          <p>
            With highly-skilled doctors and medical teams, working in a
            state-of-the-art environment that keeps you informed, engaged and at
            ease with your pet’s healthcare.
          </p>
        </HeroTextContainer>
        <HeroImageContainer className={imageIsLoaded ? 'loaded' : ''}>
          <Image
            priority
            src='/images/culture-header-image.jpg'
            alt='Palms and Paws Header Image'
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
      </HeroContainer>
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
