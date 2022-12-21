import Image from 'next/image';
import React from 'react';
import { styled } from 'goober';

const TextLogoImageContainer = styled('div')`
  width: 100%;
  position: relative;
  aspect-ratio: 5722 / 3109;
`;

const FullLogoContainer = styled('div')`
  width: 172px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
  @media (max-width: 1300px) {
    width: 162px;
  }

  @media (max-width: 1100px) {
    width: 152px;
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
          src='/images/Palms_and_Paws_logo_seal-01.png'
          alt='Palms and Paws Logo'
          fill
          sizes='282px'
          priority
        />
      </TextLogoImageContainer>
    </FullLogoContainer>
  );
};
