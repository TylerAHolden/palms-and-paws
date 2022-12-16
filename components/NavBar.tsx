import React, { useEffect, useRef, useState } from 'react';
import { motion, useCycle } from 'framer-motion';

import { AiTwotoneHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaHospital } from 'react-icons/fa';
import { Logo } from './Logo';
import { MdBiotech } from 'react-icons/md';
import { MdMedicalServices } from 'react-icons/md';
import { MenuToggle } from './MenuToggle';
import { MobileMenu } from './MobileMenu';
import NoScrollLink from './NoScrollLink';
import { PET_PORTAL_LINK } from '../CONSTANTS';
import { styled } from 'goober';

type Props = {};

const NavBarContainer = styled('div')`
  width: 100%;
  padding: 20px 0;
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

const NavbarLinksContainer = styled('div')`
  @media (max-width: 900px) {
    display: none;
  }
  flex: 1;
  display: flex;
  align-items: center;
  &.left {
    justify-content: flex-end;
    margin-right: 40px;
    @media (max-width: 1150px) {
      margin-right: 25px;
    }
    @media (max-width: 970px) {
      margin-right: 0px;
    }
  }
  &.right {
    justify-content: flex-start;
    margin-left: 40px;
    @media (max-width: 1150px) {
      margin-left: 25px;
    }
    @media (max-width: 970px) {
      margin-left: 0px;
    }
  }
`;

const NavbarLink = styled('div')`
  a {
    svg {
      opacity: 0;
      transform: translateX(10px);
      transition: all 0.1s ease-in-out;
      width: 18px;
      margin-right: -4px;
      margin-top: -2px;
    }
    p {
      transition: all 0.1s ease-in-out;
      font-size: 16px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding: 10px 25px;
    color: var(--black);
    opacity: 0.7;
    transition: all 100ms ease-in-out;
    text-decoration: none;
    @media (max-width: 1300px) {
      padding: 10px 20px;
      font-size: 15px;
    }

    @media (max-width: 1100px) {
      padding: 10px 10px;
      font-size: 14px;
    }
    &:hover {
      color: var(--black);
      opacity: 1;
      p {
        transform: translateX(10px);
      }
      svg {
        opacity: 1;
        transform: translateX(0px);
      }
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
  transition: background 100ms ease-in-out;
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
    <NavBarContainer className={`${isAtTop ? 'top' : ''}`}>
      <NavbarInnerContainer>
        <MobileSpacer />
        <NavbarLinksContainer className='left'>
          <NavbarLink>
            <NoScrollLink href='/' passHref>
              <AiTwotoneHome />
              <p>Home</p>
            </NoScrollLink>
          </NavbarLink>
          <NavbarLink>
            <NoScrollLink href='/culture' passHref>
              <MdBiotech />
              <p>Culture</p>
            </NoScrollLink>
          </NavbarLink>
          <NavbarLink>
            <NoScrollLink href='/services' passHref>
              <MdMedicalServices />
              <p>Services</p>
            </NoScrollLink>
          </NavbarLink>
        </NavbarLinksContainer>
        <Logo />
        <NavbarLinksContainer className='right'>
          <NavbarLink>
            <NoScrollLink href='/hospital' passHref>
              <FaHospital />
              <p>Hospital</p>
            </NoScrollLink>
          </NavbarLink>

          <NavbarLink>
            <NoScrollLink href='/our-staff' passHref>
              <BsFillPeopleFill />
              <p>Our Staff</p>
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
  );
};
