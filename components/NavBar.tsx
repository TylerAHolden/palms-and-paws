import React, { useEffect, useRef, useState } from 'react';
import { motion, useCycle } from 'framer-motion';

import Image from 'next/image';
import { MenuToggle } from './MenuToggle';
import { MobileMenu } from './MobileMenu';
import NoScrollLink from './NoScrollLink';
import { PET_PORTAL_LINK } from '../CONSTANTS';
import { createGlobalStyles } from 'goober/global';
import { styled } from 'goober';

type Props = {};

const ScrollBlocker = createGlobalStyles`
  body, html {
  overflow: hidden;
}
`;

const NavBarContainer = styled('div')`
  width: 100%;
  padding: 30px 0;
  backdrop-filter: blur(6px);
  top: 0px;
  position: sticky;
  z-index: 999;
  background: rgba(255, 255, 255, 0.6);
  @media (max-width: 900px) {
    margin-bottom: -20px;
  }
  @media (max-width: 600px) {
    margin-bottom: 0px;
  }

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 100ms ease-in-out;
  &.top {
    border-bottom: 1px solid rgba(0, 0, 0, 0);
  }
`;

const NavbarInnerContainer = styled('div')`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    padding-left: var(--page-side-padding);
    padding-right: var(--page-side-padding);
  }
`;

const LogoImageContainer = styled('div')`
  width: 252px;
  position: relative;
  aspect-ratio: 282 / 40;
  margin: 0 40px;
  @media (max-width: 1300px) {
    width: 232px;
    margin: 0 20px;
  }

  @media (max-width: 1100px) {
    width: 202px;
    margin: 0 20px;
  }

  @media (max-width: 500px) {
    width: 160px;
    margin: 0 0px;
  }
`;

const NavbarLinksContainer = styled('div')`
  @media (max-width: 900px) {
    display: none;
  }
  flex: 1;
  display: flex;
  align-items: center;
  &.left {
    justify-content: flex-end;
  }
  &.right {
    justify-content: flex-start;
  }
`;

const NavbarLink = styled('div')`
  a {
    font-size: 16px;
    padding: 10px 25px;
    color: var(--black);
    opacity: 0.7;
    transition: all 100ms ease-in-out;
    text-decoration: none;
    border-top: 0.5px solid rgba(210, 210, 210, 0);
    border-bottom: 0.5px solid rgba(210, 210, 210, 0);
    @media (max-width: 1300px) {
      padding: 10px 20px;
      font-size: 15px;
    }

    @media (max-width: 1100px) {
      padding: 10px 10px;
      font-size: 14px;
    }
    &:hover {
      border-bottom: 0.5px solid #000000;
      border-top: 0.5px solid #000000;
      color: var(--black);
      opacity: 1;
    }
  }
`;

export const PetPortalButton = styled('a')`
  background: var(--light-grey);
  border: 0.5px solid var(--black);
  margin-left: 20px;
  border-radius: 50px;
  padding: 8px 26px;
  outline: none;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  text-decoration: none;
  p {
    font-weight: 600;
    text-decoration: none;
    margin: 0;
    margin-top: 1px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-size: 15px;
  }
  @media (max-width: 1300px) {
    margin-left: 15px;
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 1100px) {
    margin-left: 10px;
    p {
      font-size: 12px;
    }
  }
  &:hover {
    background: var(--blue);
    p {
      color: white;
    }
  }
`;

const MobileSpacer = styled('div')`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }
`;

export const NavBar: React.FC<Props> = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = (e: any) => {
      const newIsAtTop = e?.target?.documentElement?.scrollTop
        ? e.target.documentElement.scrollTop < 2
        : true;
      setIsAtTop(newIsAtTop);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isAtTop]);

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <>
      {isOpen && <ScrollBlocker />}
      <NavBarContainer className={`${isAtTop ? 'top' : ''}`}>
        <NavbarInnerContainer>
          <MobileSpacer />
          <NavbarLinksContainer className='left'>
            <NavbarLink>
              <NoScrollLink href='/' passHref>
                Home
              </NoScrollLink>
            </NavbarLink>
            <NavbarLink>
              <NoScrollLink href='/culture' passHref>
                Culture
              </NoScrollLink>
            </NavbarLink>
            <NavbarLink>
              <NoScrollLink href='/services' passHref>
                Services
              </NoScrollLink>
            </NavbarLink>
          </NavbarLinksContainer>
          <LogoImageContainer>
            <Image
              src='/svg/PalmsAndPawsLogo.svg'
              alt='Palms and Paws Logo'
              fill
              sizes='282px'
              priority
            />
          </LogoImageContainer>
          <NavbarLinksContainer className='right'>
            <NavbarLink>
              <NoScrollLink href='/hospital' passHref>
                Hospital
              </NoScrollLink>
            </NavbarLink>

            <NavbarLink>
              <NoScrollLink href='/our-staff' passHref>
                Our Staff
              </NoScrollLink>
            </NavbarLink>

            <PetPortalButton
              href={PET_PORTAL_LINK}
              target='_blank'
              rel='noreferrer noopener'
            >
              <p>PET PORTAL</p>
            </PetPortalButton>
          </NavbarLinksContainer>
          <MobileSpacer>
            <motion.nav
              initial={false}
              animate={isOpen ? 'open' : 'closed'}
              ref={containerRef}
            >
              <MobileMenu closeMenu={toggleOpen} isOpen={isOpen} />
              <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
          </MobileSpacer>
        </NavbarInnerContainer>
      </NavBarContainer>
    </>
  );
};
