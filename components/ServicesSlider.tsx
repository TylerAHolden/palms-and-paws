import CarouselBase from './CarouselBase';
import React from 'react';
import { styled } from 'goober';

type Props = {};

const Container = styled('div')`
  padding-top: var(--page-side-padding);
`;

const Slide = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 320px;
  background: var(--blue);
  border-radius: var(--border-radius);
  margin: 0 10px;
  padding: 40px 30px;
  height: 540px;
  &.embla__slide {
    min-width: 320px;
  }

  h4 {
    font-style: italic;
    padding-bottom: 10px;
  }
  p {
    font-size: 15px;
    margin-bottom: 5px;
  }
  ul {
    margin-block-start: 10px;
    margin-block-end: 10px;
    padding-inline-start: 20px;
  }
  li {
    margin-bottom: 5px;
    font-size: 15px;
  }
  * {
    color: white;
  }

  @media (max-width: 900px) {
    height: 500px;
    width: 320px;
    padding: 30px 20px;
    margin: 0 6px;
    &.embla__slide {
      min-width: 320px;
    }
  }
  @media (max-width: 600px) {
    height: 530px;
    width: 300px;
    &.embla__slide {
      min-width: 300px;
    }
  }
`;

const ITEMS = [
  <>
    <h4>Preventative Care</h4>
    <p>
      The best way for your pet to be healthy is to make sure they stay healthy!
      Stay on track with vaccines, parasite prevention, annual diagnostics,
      nutrition, and more:
    </p>
    <ul>
      <li>Annual Wellness Visits</li>
      <li>Vaccines and Boosters</li>
      <li>Prevention of Parasites</li>
      <li>Dental Evaluations</li>
      <li>Routine Blood Work and Diagnostics</li>
    </ul>
  </>,
  <>
    <h4>Primary Care</h4>
    <p>We have you covered for all your everyday pet care needs:</p>
    <ul>
      <li>Gastrointestinal issues</li>
      <li>Skin and Ear Infections</li>
      <li>Allergies </li>
      <li>Limping </li>
      <li>Coughing and Sneezing </li>
      <li>Lethargy </li>
      <li>Eye Issues</li>
    </ul>
  </>,
  <>
    <h4>Limited Same Day Appointments Available</h4>
    <p>
      For concerns that can’t wait for a routine appointment, we hold open a
      block of urgent care appointments available daily. Urgent medical needs
      often include:
    </p>
    <ul>
      <li>Loss of Appetite</li>
      <li>Multiple Episodes of Vomiting and/or Diarrhea </li>
      <li>Progressive Lethargy </li>
      <li>Trauma or Wounds </li>
      <li>Sudden Pain or Discomfort </li>
      <li>Loss of Coordination</li>
    </ul>
  </>,
  <>
    <h4>Geriatric Care</h4>
    <p>
      Older pups and kitties need love too! Routine screening helps to ensure a
      long and happy life by diagnosing and treating illnesses more common in
      older animals:
    </p>
    <ul>
      <li>Arthritis</li>
      <li>Chronic Kidney Disease</li>
      <li>Dental Disease</li>
      <li>Diabetes</li>
      <li>Cancer</li>
    </ul>
  </>,
  <>
    <h4>Diagnostics</h4>
    <p>
      Between our in-house equipment and our partnership with a diagnostic
      laboratory, we offer a comprehensive range of diagnostics, including:
    </p>
    <ul>
      <li>Complete Blood Count, Biochemistries and Urinalysis</li>
      <li>X-rays and Ultrasound</li>
      <li>Microscopy (Looking at cells under our microscope)</li>
    </ul>
  </>,
  <>
    <h4>Surgery</h4>
    <p>
      We are equipped to handle routine surgeries as well as more complex
      procedures, including:
    </p>
    <ul>
      <li>Spays & Neuters</li>
      <li>Mass Removals</li>
      <li>Foreign Body Removal</li>
      <li>Wound Exploration and Reconstruction</li>
      <li>Laceration Repair</li>
    </ul>
  </>,
  <>
    <h4>Dentistry</h4>
    <p>
      With a state of the art dental unit, we are ready and able to offer
      routine to advanced dentistry services including:
    </p>
    <ul>
      <li>Routine Dental Cleaning</li>
      <li>Full Mouth X-Rays</li>
      <li>Oral Mass Biopsy or Removal</li>
      <li>Simple and Complex Tooth Extraction</li>
    </ul>
  </>,
  <>
    <h4>Specialist Support</h4>
    <p>
      We bring specialists in cardiology, internal medicine, and dentistry to
      Palms & Paws so that we provide specialty services in the comfort of a
      familiar environment.
    </p>
    <ul>
      <li>
        Internal Medicine Specialists perform abdominal ultrasounds and provide
        consultation on complex cases
      </li>
      <li>
        Veterinary Cardiologists can perform echocardiogram and review chest
        x-rays to guide treatment of heart disease
      </li>
      <li>
        Dental Specialists are able to perform complex oral mass removals, tooth
        extractions and help train our staff on latest advances in dental care
      </li>
    </ul>
  </>,
];

export const ServicesSlider: React.FC<Props> = () => {
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
