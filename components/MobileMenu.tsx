import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { PET_PORTAL_LINK } from '../CONSTANTS';
import { PetPortalButton } from './NavBar';
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
    <motion.div
      className={`mobile-menu-bg ${isOpen ? 'open' : ''}`}
      variants={sidebar}
    />

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
        <Link href={'/our-people'} onClick={closeMenu}>
          Our People
        </Link>
      </motion.li>
      <motion.li variants={menuLinkVariants}>
        <PetPortalButton
          href={'/contact'}
          target='_blank'
          rel='noreferrer noopener'
        >
          <p>Book Appointment</p>
        </PetPortalButton>
      </motion.li>
    </motion.ul>
  </>
);
