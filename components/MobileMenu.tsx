import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { PET_PORTAL_LINK } from '../CONSTANTS';
import { PetPortalButton } from './NavBar';
import { createGlobalStyles } from 'goober/global';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const sidebar = {
  open: {
    clipPath: `circle(150vh at 100vw 0px)`,
    transition: {
      type: 'spring',
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(0vh at 100vw 0px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const logoVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const GlobalStyles = createGlobalStyles`
    .mobile-menu {
        pointer-events: none;
        &.open {
            pointer-events: auto;
        }
        li {
            margin: 0;
            padding: 0;
        }

        margin: 0;
        padding: var(--page-side-padding);
        position: fixed;
        top: 0;
        z-index: 998;
        left: 0;
        width: 100%;
        padding-top: 25px;
        li {
            list-style: none;
            margin: 3px;
            display: flex;
            align-items: center;
            a {
                text-decoration: none;
                color: var(--black);
                font-size: 16px;
                padding: 12px 25px;
            }
        }
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: white;
    }

    li.menu-logo {
        margin-left: 13px;
        margin-bottom: 20px;
        width: 202px;
        position: relative;
        aspect-ratio: 282 / 40;
    }
`;

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MobileMenu = ({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) => (
  <>
    <GlobalStyles />
    <motion.div className='background' variants={sidebar} />

    <motion.ul
      className={`mobile-menu ${isOpen ? 'open' : ''}`}
      variants={variants}
    >
      <motion.li className='menu-logo' variants={logoVariants}>
        <Image
          src='/svg/PalmsAndPawsLogo.svg'
          alt='Palms and Paws Logo'
          fill
          sizes='282px'
          priority
        />
      </motion.li>
      <motion.li variants={menuLinkVariants}>
        <Link href={'/'} onClick={closeMenu}>
          Home
        </Link>
      </motion.li>
      <motion.li variants={menuLinkVariants}>
        <Link href={'/culture'} onClick={closeMenu}>
          Culture
        </Link>
      </motion.li>
      <motion.li variants={menuLinkVariants}>
        <Link href={'/services'} onClick={closeMenu}>
          Services
        </Link>
      </motion.li>
      <motion.li variants={menuLinkVariants}>
        <Link href={'/hospital'} onClick={closeMenu}>
          Hospital
        </Link>
      </motion.li>
      <motion.li variants={menuLinkVariants}>
        <Link href={'/our-staff'} onClick={closeMenu}>
          Our Staff
        </Link>
      </motion.li>
      <motion.li variants={menuLinkVariants}>
        <PetPortalButton
          href={PET_PORTAL_LINK}
          target='_blank'
          rel='noreferrer noopener'
        >
          <p>PET PORTAL</p>
        </PetPortalButton>
      </motion.li>
    </motion.ul>
  </>
);
