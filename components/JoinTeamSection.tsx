import { Animation } from './HomePageAnimations';
import { Button } from './Buttons';
import React from 'react';
import { styled } from 'goober';

type Props = {};

const Container = styled('div')`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: var(--page-side-padding);
  padding-right: var(--page-side-padding);
  background: var(--yellow);
`;

const InnerContent = styled('div')`
  margin: auto;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const InfoContent = styled('div')`
  width: 50%;
  h2 {
    color: white;
  }
  p {
    max-width: 500px;
    margin-bottom: 40px;
  }

  @media (max-width: 700px) {
    width: 100%;
    order: 1;
  }
`;

const AnimationContainer = styled('div')`
  width: 50%;
  transform: scale(-1, 1);
  margin-top: -290px;
  margin-bottom: -50px;
  @media (max-width: 700px) {
    margin-top: -240px;
    margin-bottom: -30px;
    width: 100%;
    order: 0;
  }
`;

export const JoinTeamSection: React.FC<Props> = () => {
  const mailToLink = () => {
    window.open(String('mailto:recruitment@palmsandpaws.com'));
  };

  return (
    <Container>
      <InnerContent>
        <InfoContent>
          <h2>Join the Team</h2>
          <p>
            Are you and your pet looking for a healthcare partner who puts you
            both at ease? Or maybe you’re looking to join a team that allows
            your love of animals to shine? We would love to hear from you.
          </p>
          <Button onClick={mailToLink}>APPLY TO OUR TEAM</Button>
        </InfoContent>
        <AnimationContainer>
          <Animation path='/animations/dogBall.json' />
        </AnimationContainer>
      </InnerContent>
    </Container>
  );
};
