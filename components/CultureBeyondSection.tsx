import Image from 'next/image';
import React from 'react';
import { styled } from 'goober';

const Container = styled('div')`
  width: 100%;
  padding-top: calc(var(--page-side-padding) * 2);
  padding-bottom: calc(var(--page-side-padding) * 2);
  padding-left: var(--page-side-padding);
  padding-right: var(--page-side-padding);
`;

const InnerContent = styled('div')`
  margin: auto;
  max-width: 1300px;
`;

const ImageContainer = styled('div')`
  aspect-ratio: 1327 / 728;
  width: 100%;
  display: flex;
  position: relative;
  img {
    border-radius: var(--border-radius);
    object-fit: contain;
  }
`;

const Heading = styled('h2')`
  margin-bottom: -140px;
  padding-top: var(--page-side-padding);
  @media (max-width: 900px) {
    margin-bottom: -157px;
  }
  @media (max-width: 700px) {
    margin-bottom: -135px;
  }
  @media (max-width: 600px) {
    margin-bottom: -120px;
  }
  @media (max-width: 500px) {
    margin-bottom: -55px;
  }
  @media (max-width: 400px) {
    margin-bottom: 0px;
  }
`;

export const CultureBeyondSection: React.FC = () => (
  <Container>
    <InnerContent>
      <ImageContainer>
        <Image
          src='/images/culture-image.jpg'
          alt='dog running on beach'
          fill
          sizes='
          (max-width: 400px) 400px,
          (max-width: 500px) 500px,
          (max-width: 700px) 800px,
    (max-width: 1000px) 1000px,
    1300px
  '
        />
      </ImageContainer>
      <Heading>
        Culture <i>beyond</i>
        <br />
        the waiting room.
      </Heading>
    </InnerContent>
  </Container>
);
