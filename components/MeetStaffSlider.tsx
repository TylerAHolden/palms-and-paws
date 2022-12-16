import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { Button } from './Buttons';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'goober';
import { wrap } from 'popmotion';

type Props = {};

const Container = styled('div')`
  position: relative;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 70px;
  background: linear-gradient(
      217deg,
      rgba(70, 154, 232, 1),
      rgba(70, 154, 232, 0.5) 70.71%
    ),
    linear-gradient(127deg, rgba(94, 174, 249, 1), rgba(94, 174, 249, 0) 70.71%),
    linear-gradient(336deg, #3072b0, rgba(49, 129, 203, 0.1) 70.71%);
  background: var(--blue);

  @media (max-width: 500px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const directionOffset = 30;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? -directionOffset : directionOffset,
    opacity: 0,
    staggerDirection: -1,
    transition: {
      staggerChildren: 0.3,
    },
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0,
    staggerDirection: -1,
    transition: {
      staggerChildren: 0.3,
    },
  }),
};

const MotionDiv = styled(motion.div as any)`
  display: flex;
  align-items: center;
  padding-left: var(--page-side-padding);
  padding-right: var(--page-side-padding);
  justify-content: center;
  img {
    pointer-events: none;
  }
  @media (max-width: 1170px) {
    justify-content: flex-start;
  }
  @media (max-width: 947px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StaffPicture = styled('div')`
  width: 340px;
  position: relative;
  flex-shrink: 0;
  margin-right: 30px;
  aspect-ratio: 0.7396;
  img {
    border-radius: var(--border-radius);
    object-fit: contain;
    --shadow-color: 209deg 66% 37%;

    box-shadow: 0px 0.4px 0.5px hsl(var(--shadow-color) / 0.41),
      -0.1px 6.8px 7.9px -2.3px hsl(var(--shadow-color) / 0.45);
  }
  @media (max-width: 947px) {
    margin-right: 0px;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const StaffContent = styled('div')`
  width: 640px;
  margin-left: 30px;
  h2,
  p {
    color: white;
  }
  p {
    font-size: 18px;
    line-height: 1.5;
  }

  @media (max-width: 1170px) {
    margin-left: 10px;
    width: auto;
    flex: 1;
    p {
      font-size: 17px;
    }
  }

  @media (max-width: 947px) {
    margin-left: 0px;
    order: -1;
    width: auto;
    padding-bottom: 20px;
    p {
      display: none;
    }
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const SliderButton = styled(Button)`
  background: transparent;
  padding: 10px;
  display: flex;
  border: none;
  margin: 6px;
  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border: none;
  }
  &:not(:first-child) {
    transform: rotate(180deg);
  }
`;

const SliderButtonsContainer = styled('div')`
  display: flex;
  align-items: center;
  z-index: 1;
  margin-left: -10px;
`;

const MeetStaffLink = styled('div')`
  margin-top: 20px;
  width: 340px;
  display: none;
  @media (max-width: 947px) {
    display: block;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 1px solid white;
    padding: 10px 0px;
  }
`;

const staffMembers = [
  {
    name: 'Kevin McEvilly, DVM',
    bio: (
      <>
        <p>
          At the age of 7, his love of animals and people alike led him to the
          decision that he was going to become a veterinarian— he never changed
          his mind. After completing a double major at Cal Poly San Luis Obispo,
          Kevin went on to earn his doctorate in veterinary medicine at Western
          University of Health Sciences. Following graduation, Kevin interned in
          medicine and surgery at the Animal Specialty and Emergency Center
          where he stayed on to train subsequent classes of interns before
          following his passion into primary care.
        </p>
        <p>
          Growth and innovation are constant drives to advance the quality of
          medicine and patient and pet parent experiences alike. Leadership
          development through an others-oriented approach is central to his
          operating style– investing in others is how we change the world. In
          his free time, he enjoys spending time with family, mentoring
          veterinary students, mountain biking and staying current on the latest
          medical trends/technologies.
        </p>
      </>
    ),
    imgSrc: '/images/KMHeadshot.jpg',
  },
];

export const MeetStaffSlider: React.FC<Props> = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const index = wrap(0, staffMembers.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Container>
      <AnimatePresence initial={false} mode='wait' custom={direction}>
        <MotionDiv
          position='relative'
          key={page}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: {
              type: 'spring',
              stiffness: 200,
              damping: 30,
              duration: 0.17,
              staggerChildren: 0.3,
            },
            opacity: { duration: 0.2 },
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e: any, { offset, velocity }: any) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < swipeConfidenceThreshold) {
              paginate(-1);
            } else if (swipe > -swipeConfidenceThreshold) {
              paginate(1);
            }
          }}
        >
          <StaffPicture>
            <Image
              src={staffMembers[index].imgSrc}
              alt={staffMembers[index].name}
              fill
              sizes='340px'
            />
          </StaffPicture>
          <StaffContent>
            <SliderButtonsContainer>
              <SliderButton onClick={() => paginate(-1)}>
                <Image
                  src='/svg/SliderArrow_white.svg'
                  alt='Previous'
                  width={39}
                  height={39}
                />
              </SliderButton>
              <SliderButton onClick={() => paginate(1)}>
                <Image
                  src='/svg/SliderArrow_white.svg'
                  alt='Next'
                  width={39}
                  height={39}
                />
              </SliderButton>
            </SliderButtonsContainer>
            <h2>{staffMembers[index].name}</h2>
            {staffMembers[index].bio}
          </StaffContent>
          <MeetStaffLink>
            <Link href='/our-staff'>Meet our staff</Link>
          </MeetStaffLink>
        </MotionDiv>
      </AnimatePresence>
    </Container>
  );
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
