import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { AllStaffSlider } from './AllStaffSlider';
import { Button } from './Buttons';
import { Button as Button2 } from './Button';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'goober';
import useMediaQuery from '../hooks/useMediaQuery';
import { wrap } from 'popmotion';

type Props = {};

const Container = styled('div')`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
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

const ToggleButton = styled('div')`
  width: 16px;
  height: 16px;
  margin: 6px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.7;
  box-shadow: 0px 4px 12px hsl(209deg 66% 37% / 0.41);
  position: relative;
  &::after {
    content: '';
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.2);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 9px;
    height: 9px;
    background: linear-gradient(0deg, #317dc4, #55a6f2);
    z-index: 6;
    border-radius: 50%;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  &:hover {
    opacity: 0.4;
  }
  &.active {
    opacity: 1;
    &::after {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const ToggleButtonsContainer = styled('div')`
  position: absolute;
  z-index: 5;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  left: 0;
`;

const StaffPicture = styled('div')`
  width: 340px;
  position: relative;
  flex-shrink: 0;
  margin-right: 30px;
  aspect-ratio: 682 / 820;
  img {
    transition: opacity 0.3s ease;
    border-radius: var(--border-radius);
    object-fit: contain;
    --shadow-color: 209deg 66% 37%;

    box-shadow: 0px 0.4px 0.5px hsl(var(--shadow-color) / 0.41),
      -0.1px 6.8px 7.9px -2.3px hsl(var(--shadow-color) / 0.45);
    &.hide {
      opacity: 0;
    }
  }
  @media (max-width: 947px) {
    margin-right: 0px;
    margin-bottom: 20px;
    order: 1;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const StaffContent = styled('div')`
  width: 640px;
  margin-left: 30px;
  h2,
  h4,
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
    order: 2;
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

const ReadMoreButton = styled(Button2)`
  display: none;
  margin-left: -20px;
  @media (max-width: 947px) {
    display: flex;
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
    display: flex;
    order: 3;
    align-self: flex-start;
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

function truncateString(str: string, num: number) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const staffMembers = [
  {
    name: 'Kevin McEvilly, DVM',
    title: 'Chief of Staff, COO',
    bio: `At the age of 7, his love of animals and people alike led him to the decision that he was going to become a veterinarian— he never changed his mind. After completing a double major at Cal Poly San Luis Obispo, Kevin went on to earn his doctorate in veterinary medicine at Western University of Health Sciences. Following graduation, Kevin interned in medicine and surgery at the Animal Specialty and Emergency Center where he stayed on to train subsequent classes of interns before following his passion into primary care.
    \n Growth and innovation are constant drives to advance the quality of medicine and patient and pet parent experiences alike. Leadership development through an others-oriented approach is central to his operating style – investing in others is how we change the world. Mentoring interns and veterinary students, and seeing them grow has been a been a great source of joy. Beyond the stethoscope, he is passionate about his family and friends, he loves dogs, his rescued three-legged cat, and exploring new places and cultures with his favorite people.`,
    img1Src: '/images/kevin-image-1.jpg',
    img2Src: '/images/kevin-image-2.jpg',
  },
  {
    name: 'Clara Pelton RVT, BS, CVPM',
    title: 'Practice Manager',
    bio: `Clara Pelton RVT, BS, CVPM is a Southern California native who has a lifelong affinity for helping animals. She started her career in veterinary medicine as a kennel assistant before attending Cal Poly Pomona and graduating with a degree in Microbiology. After graduation, Clara continued her work in the veterinary industry focusing on emergency and critical care, earning her Registered Veterinary Technician license. Inspired and fueled by her experience, Clara was published in NAVTA magazine for an article called, &quot;Fluid Therapy: A Technician&apos;s Role&quot;, catapulting her into education and mentorship within the industry. Clara comes to Paws and Palms with 8 years of experience managing 24-hour emergency and specialty hospitals as well as her experience as CEO and founder of a veterinary consulting firm. Her vision is to educate, train and mentor members of the veterinary community, from hospital staff and doctors, to the pet parents and is excited to build out these principals at Paws and Palms. Clara resides in Ventura County with her husband, son, 3 cats and tripod dog where she enjoys traveling, food/wine and spending quality time with her friends and family.`,
    img1Src: '/images/clara-image-1.jpg',
    img2Src: '/images/clara-image-2.jpg',
  },
  {
    name: 'Samantha Fahmi',
    title: 'Lead Client Service Coordinator',
    bio: `Samantha has always had a deep affinity for animals. When she was a child she was raised with four cats, as she got older she acquired bearded dragons, a king black snake, a boa, tarantula, a couple dogs and a few goldfish—her love of animals started at an early age. After graduating high school, she got the opportunity to work at one of the top emergency clinics in Los Angeles where her passion for animal and client care grew. Working as a supervisor of the front desk of a busy animal hospital she knew she was born to be a leader. Being able to assist and guide doctors, techs, front desk staff, and clients beings her joy. After 15 years of being in the field she recently decided to start taking courses in business and management to eventually obtain her CVPM (certified veterinary practice manager) as well as expand her knowledge on starting and operating a business. Samantha is an LA girl, born in Santa Monica, raised in Culver City, she is currently living in the heart of Los Angeles with her husband and pittie Dodger. In her free time she enjoys traveling, crafting and cooking a variety of dishes. She also enjoys planning and hosting gatherings as a certified wedding and event planner.`,
    img1Src: '/images/samantha-image-1.jpg',
    img2Src: '/images/samantha-image-2.jpg',
  },
];

export const MeetStaffSlider: React.FC<Props> = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [showImageNumber, setShowImageNumber] = useState(1);
  const [showAllBio, setShowAllBio] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const smallScreen = useMediaQuery('(max-width: 974px)');

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      setShowImageNumber(showImageNumber === 1 ? 2 : 1);
    }, 10000);
  }, [showImageNumber]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const index = wrap(0, staffMembers.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleToggleReadMore = () => {
    setShowAllBio(!showAllBio);
  };

  return (
    <>
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
              },
              opacity: { duration: 0.2 },
            }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_e: any, { offset, velocity }: any) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <StaffPicture>
              <Image
                src={staffMembers[index].img1Src}
                alt={staffMembers[index].name}
                fill
                sizes='340px'
                className={showImageNumber === 1 ? '' : 'hide'}
              />
              <Image
                src={staffMembers[index].img2Src}
                alt={staffMembers[index].name}
                fill
                sizes='340px'
                className={showImageNumber === 2 ? '' : 'hide'}
              />
              <ToggleButtonsContainer>
                <ToggleButton
                  className={showImageNumber === 1 ? 'active' : ''}
                  onClick={() => setShowImageNumber(1)}
                />
                <ToggleButton
                  className={showImageNumber === 2 ? 'active' : ''}
                  onClick={() => setShowImageNumber(2)}
                />
              </ToggleButtonsContainer>
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
              <h4>{staffMembers[index].title}</h4>
              {(!smallScreen || showAllBio
                ? staffMembers[index].bio
                : truncateString(staffMembers[index].bio, 400)
              )
                .split('\n')
                .map((str, i) => (
                  <p key={i}>{str}</p>
                ))}
              <ReadMoreButton buttonStyle='blue' onClick={handleToggleReadMore}>
                {showAllBio ? 'Read Less' : 'Read More'}
              </ReadMoreButton>
            </StaffContent>
            <MeetStaffLink>
              <Link href='/our-people'>Meet our People</Link>
            </MeetStaffLink>
          </MotionDiv>
        </AnimatePresence>
      </Container>
      <AllStaffSlider />
    </>
  );
};
