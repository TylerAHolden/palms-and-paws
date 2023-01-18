import {
  HeroContainer,
  HeroImageContainer,
  HeroTextContainer,
} from '../components/Hero';

import { Button } from '../components/Button';
import { FAQs } from '../components/FAQs';
import Image from 'next/image';
import Layout from '../components/Layout';
import { Marquee } from '../components/Marquee';
import { PET_PORTAL_LINK } from '../CONSTANTS';
import { ServicesSlider } from '../components/ServicesSlider';
import { useState } from 'react';

const title = 'Our Services';
const subtitle =
  'Beginning with the preventative care that ensures your best friend stays healthy for years and advancing to the highly technical medical procedures that may be required from time to time, Palms & Paws expertly delivers a complete suite of medical care.';

export default function Services() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <Layout title='Services' description={`${title} - ${subtitle}`}>
      <HeroContainer>
        <HeroImageContainer
          ar='1401 / 1271'
          className={imageIsLoaded ? 'loaded' : ''}
        >
          <Image
            priority
            quality={85}
            src='/images/services-header.jpg'
            alt='veterinarian and doctor treating dog'
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
          <h1>Our Services</h1>

          <p>
            Beginning with the preventative care that ensures your best friend
            stays healthy for years and advancing to more technical medical
            diagnostics and procedures that may be required from time to time,
            Palms & Paws expertly delivers a complete suite of medical care.
          </p>
          <Button
            buttonStyle='grey'
            href={PET_PORTAL_LINK}
            target='_blank'
            rel='noopener noreferrer'
          >
            Book Now
          </Button>
        </HeroTextContainer>
      </HeroContainer>
      <ServicesSlider />
      <FAQs />
      <Marquee color='yellow'>
        <h3>
          Taking care of pets. <i>And the people who love them.</i>
        </h3>
      </Marquee>
    </Layout>
  );
}
