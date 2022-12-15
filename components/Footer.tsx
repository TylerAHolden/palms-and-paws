import React, { useEffect, useState } from 'react';

import { Button } from './Buttons';
import Image from 'next/image';
import Link from 'next/link';
import NoScrollLink from './NoScrollLink';
import { styled } from 'goober';

type Props = {};

const Container = styled('div')`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 40px;
  @media (max-width: 800px) {
    padding-top: 50px;
  }
`;

const InnerContainer = styled('div')`
  margin: auto;
  max-width: 1300px;
  padding-left: var(--page-side-padding);
  padding-right: var(--page-side-padding);
`;

const FlexContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const CopyrightFlexContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  p {
    opacity: 0.5;
    font-size: 14px;
    margin: 0;
  }
`;

const SocialIconsContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

const SocialIconLink = styled('a')`
  margin: 1px;
  padding: 4px;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const PawCounter = styled('h2')`
  width: 50%;
  @media (max-width: 800px) {
    order: 1;
  }
`;

// This madness is because klaviyo sucks
const KlaviyoContainer = styled('div')`
  width: 50%;
  margin-bottom: 40px;
  @media (max-width: 800px) {
    width: 100%;
    order: 3;
    margin-bottom: 20px;
  }
  form {
    padding: 0 !important;
    > div {
      > div:last-child {
        @media (max-width: 800px) {
          flex-direction: column !important;
          align-items: flex-end !important;
        }
        > div:first-child {
          @media (max-width: 800px) {
            flex: 1 !important;
            align-self: stretch;
          }
          input {
            height: 38px !important;
          }
        }
        > div:last-child {
          width: 30%;
          min-width: 120px;
          flex: 0.3 !important;
          @media (max-width: 800px) {
            height: 50px;
            flex-shrink: 0 !important;
            flex: 1 !important;
          }
          button {
            height: 38px !important;
          }
        }
      }
    }
  }
  margin-left: -5px;
  p span {
    font-size: 15px !important;
    color: var(--black) !important;
    font-family: var(--font-family-sans-serif) !important;
    @media (max-width: 800px) {
      text-transform: uppercase;
    }
  }
`;

const LogoContainer = styled('div')`
  flex-shrink: 0;
  margin-right: 40px;
  position: relative;
  width: 80px;
  height: 64px;

  @media (max-width: 920px) {
    margin-right: 30px;
  }

  @media (max-width: 800px) {
    order: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const FooterListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 50%;
`;

const AddressAndContact = styled('div')`
  flex: 1;
  ${FooterListContainer} {
    width: 100%;
  }

  @media (max-width: 800px) {
    order: 2;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const ListTitle = styled('p')`
  margin: 1px 0;
`;

const ListItem = styled('p')`
  margin: 1px 0;
  a,
  span {
    text-decoration: none;
    opacity: 0.5;
    &:hover {
      opacity: 0.6;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

const LinksContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  @media (max-width: 800px) {
    order: 4;
    width: 100%;
  }
`;

const FooterLineBreak = styled('div')`
  width: 100%;
  margin: 40px 0;
  background: var(--black);
  height: 1px;
`;

export const Footer: React.FC<Props> = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);
  return (
    <Container>
      <InnerContainer>
        <FlexContainer>
          <PawCounter>
            {/* @TODO PAW COUNTER */}
            {/* Paw Count  */}
          </PawCounter>
          <KlaviyoContainer
            className={hasLoaded ? 'klaviyo-form-XLLbb3' : ''}
          ></KlaviyoContainer>
          <LogoContainer>
            <Image
              src='/svg/PalmsAndPawsLogoMark.svg'
              width={80}
              height={64}
              alt='palms and paws logo'
            />
          </LogoContainer>
          <AddressAndContact>
            <FooterListContainer>
              <ListTitle>Our Address</ListTitle>
              <ListItem>
                <span>1655 9th Street</span>
              </ListItem>
              <ListItem>
                <span>Santa Monica, CA 90404</span>
              </ListItem>
            </FooterListContainer>
            <FooterListContainer>
              <ListTitle>Contact Us</ListTitle>
              <ListItem>
                <a href='tel:+19493945565'>(949) 394-5565</a>
              </ListItem>
              <ListItem>
                <a href='mailto:hello@palmsandpawsvet.com'>
                  hello@palmsandpawsvet.com
                </a>
              </ListItem>
            </FooterListContainer>
          </AddressAndContact>
          <LinksContainer>
            <FooterListContainer>
              <ListTitle>Our Staff</ListTitle>
              <ListItem>
                <NoScrollLink href='/our-staff'>Meet Your Doctors</NoScrollLink>
              </ListItem>
              <ListItem>
                <NoScrollLink href='/our-staff'>Join the Team</NoScrollLink>
              </ListItem>
            </FooterListContainer>
            <FooterListContainer>
              <ListTitle>Hospital</ListTitle>
              <ListItem>
                <NoScrollLink href='/contact'>Book an Appointment</NoScrollLink>
              </ListItem>
              <ListItem>
                <NoScrollLink href='/hospital'>Take a Tour</NoScrollLink>
              </ListItem>
            </FooterListContainer>
            <FooterListContainer>
              <ListTitle>Culture</ListTitle>
              <ListItem>
                <NoScrollLink href='/#Testimonials'>Testimonials</NoScrollLink>
              </ListItem>
              <ListItem>
                <NoScrollLink href='/#FAQs'>FAQs</NoScrollLink>
              </ListItem>
              <ListItem>
                <NoScrollLink href='/contact'>Contact Us</NoScrollLink>
              </ListItem>
            </FooterListContainer>
            <FooterListContainer>
              <ListTitle>Services</ListTitle>
              <ListItem>
                <NoScrollLink href='/services'>Primary Care</NoScrollLink>
              </ListItem>
              <ListItem>
                <NoScrollLink href='/services'>Urgent Care</NoScrollLink>
              </ListItem>
              <ListItem>
                <NoScrollLink href='/services'>
                  Surgery & Dentistry
                </NoScrollLink>
              </ListItem>
              <ListItem>
                <NoScrollLink href='/services'>View All</NoScrollLink>
              </ListItem>
            </FooterListContainer>
          </LinksContainer>
        </FlexContainer>
        <FooterLineBreak />
        <CopyrightFlexContainer>
          <p>Copyright {new Date().getFullYear()} Palms & Paws</p>
          <SocialIconsContainer>
            <SocialIconLink
              href='https://www.instagram.com/palmspawsvet/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/images/instagram.png'
                width={19}
                height={19}
                alt='instagram icon'
              />
            </SocialIconLink>
            <SocialIconLink
              href='https://twitter.com/pawspalmsvet'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/images/twitter.png'
                width={18}
                height={18}
                alt='twitter icon'
              />
            </SocialIconLink>
            <SocialIconLink
              href='https://www.linkedin.com/company/palmspawsvet/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/images/linkedin.png'
                width={20}
                height={20}
                alt='linkedin icon'
              />
            </SocialIconLink>
            <SocialIconLink
              href='http://facebook.com/palmspawsvet.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/images/facebook.png'
                width={20}
                height={20}
                alt='facebook icon'
              />
            </SocialIconLink>
          </SocialIconsContainer>
        </CopyrightFlexContainer>
      </InnerContainer>
    </Container>
  );
};
