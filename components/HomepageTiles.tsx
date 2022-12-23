import { IoPawOutline, IoPeopleOutline } from 'react-icons/io5';

import { Button } from './Button';
import { CiHospital1 } from 'react-icons/ci';
import React from 'react';
import { styled } from 'goober';

type Props = {};

const Container = styled('div')`
  width: 100%;
  padding: 0 var(--page-side-padding);
  padding-bottom: calc(var(--page-side-padding) * 2);
`;

const InnerContent = styled('div')`
  margin: auto;
  max-width: 1300px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const TileContainer = styled('div')`
  flex: 1;
  margin: 20px;
  border-radius: var(--border-radius);
  box-shadow: 0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%),
    0 12px 24px rgb(0 0 0 / 5%);
  background: white;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 1200px) {
    margin: 20px 0;
  }
`;

const IconContainer = styled('div')`
  svg {
    width: 42px;
    height: 42px;
  }
  margin-bottom: 20px;
`;

const ButtonContainer = styled('div')`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const HomepageTiles: React.FC<Props> = () => {
  return (
    <Container>
      <InnerContent>
        <TileContainer>
          <IconContainer>
            <IoPawOutline />
          </IconContainer>
          <h4>
            A complete array of medical <i>services</i> for your pet
          </h4>
          <p>
            Wellness visits, primary care, urgent care, boutique specialty
            services and more! We are here to offer the highest level of
            veterinary medicine possible.
          </p>
          <ButtonContainer>
            <Button buttonStyle='green' routerLink='/services'>
              VIEW SERVICES
            </Button>
          </ButtonContainer>
        </TileContainer>
        <TileContainer>
          <IconContainer>
            <CiHospital1 />
          </IconContainer>

          <h4>
            State of the art <i>hospital</i> facilities
          </h4>
          <p>
            Between our in-house lab and diagnostic equipment as well as out
            outside laboratory resource, we offer a full range of diagnostic
            capabilities.
          </p>
          <ButtonContainer>
            <Button buttonStyle='green' routerLink='/hospital'>
              TAKE A TOUR
            </Button>
          </ButtonContainer>
        </TileContainer>
        <TileContainer>
          <IconContainer>
            <IoPeopleOutline />
          </IconContainer>

          <h4>
            A caring, compassionate, and highly trained <i>staff</i>
          </h4>
          <p>
            We’re here because we love people and animals! Since growth and
            leadership development are core tenets in our approach, it allows us
            to develop as better individuals, teams, and as a hospital. The
            result? The best, and most compassionate veterinary care possible.
          </p>
          <ButtonContainer>
            <Button buttonStyle='green' routerLink='/our-people'>
              MEET OUR PEOPLE
            </Button>
          </ButtonContainer>
        </TileContainer>
      </InnerContent>
    </Container>
  );
};
