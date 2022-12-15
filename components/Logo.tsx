import Image from 'next/image';
import React from 'react';
import { styled } from 'goober';

const PalmPawIconLogoContainer = styled('div')`
  width: 25%;
  position: relative;
  aspect-ratio: 561 / 251;
`;

const VeterinaryClinicText = styled('p')`
  font-family: var(--font-family-serif);
  font-size: 18px;
  margin: 0;
  margin-bottom: 4px;
`;

const TextLogoImageContainer = styled('div')`
  width: 100%;
  position: relative;
  aspect-ratio: 282 / 45;
`;

const FullLogoContainer = styled('div')`
  width: 252px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1300px) {
    width: 232px;
  }

  @media (max-width: 1100px) {
    width: 202px;
  }

  @media (max-width: 500px) {
    width: 160px;
  }
`;

export const Logo = () => {
  return (
    <FullLogoContainer>
      <TextLogoImageContainer>
        <Image
          src='/svg/PalmsAndPawsLogo.svg'
          alt='Palms and Paws Logo'
          fill
          sizes='282px'
          priority
        />
      </TextLogoImageContainer>
      <VeterinaryClinicText>Veterinary Center</VeterinaryClinicText>
      <PalmPawIconLogoContainer>
        <Image
          src='/images/palm_and_paw_logo.png'
          alt='Palms and Paws'
          fill
          sizes='50px'
          priority
        />
      </PalmPawIconLogoContainer>
    </FullLogoContainer>
  );
};
