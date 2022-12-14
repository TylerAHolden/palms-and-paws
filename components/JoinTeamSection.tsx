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
  h2 {
    color: white;
  }
  p {
    max-width: 500px;
    margin-bottom: 40px;
  }
`;

export const JoinTeamSection: React.FC<Props> = () => {
  return (
    <Container>
      <InnerContent>
        <h2>Join the Team</h2>
        <p>
          Are you and your pet looking for a healthcare partner who puts you
          both at ease? Or maybe you’re looking to join a team that allows your
          love of animals to shine? We would love to hear from you.
        </p>
        {/* @TODO what does this button go to */}
        <Button>APPLY TO OUR TEAM</Button>
      </InnerContent>
    </Container>
  );
};
