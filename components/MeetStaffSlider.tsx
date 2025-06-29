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
  padding-top: 70px;
  padding-bottom: 70px;
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
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

const ListItemsContainer = styled('div')`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const StaffMemberPreviewItem = styled('div')`
  cursor: pointer;
  width: 60px;
  position: relative;
  flex-shrink: 0;
  margin-right: 0px;
  aspect-ratio: 682 / 820;
  border: 3px solid transparent;
  background: transparent;
  transition: all 0.3s ease;
  border-radius: 12px;
  transform: scale(0.8);
  img {
    border-radius: 10px;
    object-fit: contain;
    --shadow-color: 209deg 66% 37%;

    box-shadow: 0px 0.4px 0.5px hsl(var(--shadow-color) / 0.41),
      -0.1px 6.8px 7.9px -2.3px hsl(var(--shadow-color) / 0.45);
  }

  &.selected {
    transform: scale(1.1);
    border-color: #00000037;
    background: #00000037;
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
    bio: `Clara Pelton, RVT, BS, CVPM is a Southern California native who has a lifelong affinity for helping animals. She started her career in veterinary medicine as a kennel assistant before attending Cal Poly Pomona and graduating with a degree in Microbiology. After graduation, Clara continued her work in the veterinary industry focusing on emergency and critical care, earning her Registered Veterinary Technician license. Clara was published in NAVTA magazine for an article called, “Fluid Therapy: A Technician’s Role”; catapulting her into education and mentorship within the industry. Clara comes with over 8 years of experience managing 24-hour emergency and specialty hospitals, an educator for students in veterinary assistant programs as well as her experience as a CEO and founder of a veterinary consulting firm. Her vision is: to educate, train and mentor members of the veterinary community, from hospital staff and doctors, to rescue volunteers and pet parents; she is excited to build out these principles at Palms & Paws Veterinary Center. Clara currently resides in Ventura County with her husband, son, 3 cats, and tripod dog. In her free time, Clara and her family enjoy traveling, food/wine and spending quality time with her loved ones.`,
    img1Src: '/images/clara-image-1.jpg',
    img2Src: '/images/clara-image-2.jpg',
  },
  {
    name: 'Phil Ahn, DVM',
    title: 'Associate Veterinarian',
    bio: `A native of Los Angeles, Dr. Phil Ahn is proud to be practicing veterinary medicine near his hometown. He has had a passion for animals as a child and believes his early memories with his family's Labrador Retriever and Shih Tzu paved the way for his path to becoming a veterinarian. Dr. Ahn loves the ability to help and heal his patients by collaborating with their owners to form realistic plans and expectations. He finds joy in making a difference in people's lives through their connection with their pets, knowing that they share a very powerful bond.
 \n
    Dr. Ahn attended Cal Poly Pomona for his undergraduate education and Western University of Health Sciences for his doctorate of veterinary medicine. His interests include dermatology, dentistry, internal medicine, surgery, preventative medicine, and emergency medicine (not in any particular order). Dr. Ahn has also taken the holistic medicine/acupuncture course at the Chi Institute in Florida and looks for ways to practice integrative medicine. He soon hopes to marry his fiance who is also a veterinarian. Together they share a very sweet, scruffy terrier mix named Poppy and a crotchety, older cat named Ethyl.`,
    img1Src: '/images/phil-image-1.jpg',
  },
  {
    name: 'Jacob Wolf, DVM',
    title: 'Associate Veterinarian',
    bio: `Jacob was born and raised in California. Given the last name - he felt that it was his destiny to become a vet. He received a degree in Animal Science at The University of California, Davis where he enjoyed his free time playing on the Men’s Lacrosse Team and coaching lacrosse for local youth. Following undergrad, he had a brief stint in animal nutrition and biotech before enrolling at Western University to receive his Doctor of Veterinary Medicine degree in 2022 where he focused on small animal medicine. After completing a rigorous rotating specialty program at VCA ASEC in Los Angeles - Jacob is excited for the next step in his career.
 \n
    These days he lives in Santa Monica and spends most of his time outside of work training to become an elite pickleball player, enjoying spicy noodles, and reading. He remains passionate and enthusiastic for helping pets and people in any way he can through his professional expertise. His current focus is limited to dogs and cats - unfortunately no wolves at this time.`,
    img1Src: '/images/jacob-image-1.jpg',
  },
  {
    name: 'Rachel Park, DVM',
    title: 'Associate Veterinarian',
    bio: `Dr. Rachel Park is excited to integrate her veterinary experience with the Palms & Paws community! Her love for veterinary medicine is rooted in a special bond with her childhood dog and early involvement in community medicine. Through close communication and personalized attention, Dr. Park believes that veterinary care can empower pet parents and strengthen the relationship they have with their beloved pets.
    \n
    Dr. Park completed her undergraduate studies at Brown University, and earned her doctorate of veterinary medicine from Tufts University. Upon graduation, she worked at a clinic caring for dogs and cats in the heart of New York City. She is interested in preventative medicine, neurology, diagnostic imaging, and surgery. Outside the clinic, Dr. Park can be found painting, hiking scenic trails with her dog Belle, snuggling her senior cat Macie, and looking for the finest dessert spots.`,
    img1Src: '/images/rachel-image-1.jpg',
  },
  {
    name: 'Ying Zhi Lim, DVM, CVA',
    title: 'Associate Veterinarian',
    bio: `Dr. Ying Zhi Lim grew up in the bustling city of Singapore and knew she always wanted to be a vet when her first word was “woof”. She knew the only way she would be able to have a pet dog was to place bets with her parents and get into a well-ranked school. From then on, her hardworking personality drove her to study hard and move halfway around the world to study Ecology, Behavior, and Evolution at UCLA. She then moved up to the small town of Davis to receive her veterinary degree from UC Davis. After graduating, her need to live in a city with good food and weather drove her back down to the bustling city of Los Angeles. Dr. Lim is fluent in both English and Mandarin. 
    \n
    Dr. Lim is interested in internal medicine, surgery, integrative medicine and fear-free care. She is certified in veterinary acupuncture and plans to incorporate that with everyday medicine to bring a well-rounded approach to medicine. In her free time, Dr. Lim loves to cook, bake, craft and eat amazing and interesting food from all over Los Angeles.`,
    img1Src: '/images/ying-zhi-lim.jpg',
  },
  {
    name: 'Isabelle Gerbatsch, DVM',
    title: 'Associate Veterinarian',
    bio: `Dr. Isabelle “Izzy” Gerbatsch is a San Diego native whose journey in veterinary medicine has taken her across the country and through a wide range of experiences! She earned her veterinary degree from Iowa State University College of Veterinary Medicine in 2017, supported by the U.S. Army Health Professionals Scholarship. Upon graduation, she was commissioned as a Captain in the U.S. Army Veterinary Corps. During her service, Dr. Izzy completed a competitive year-long internship at Fort Carson, Colorado, focusing on veterinary medicine, public health, and leadership. Over the next four years, she cared for military working dogs and the pets of service members, managed a veterinary hospital, trained Soldiers for deployment, and even worked shifts at a local emergency hospital. Following her military career, she returned to civilian practice in La Jolla and Fresno before relocating to Los Angeles with her husband, two children, and their two dogs—BB8 and Captain Han Solo. Dr. Izzy has a special interest in internal medicine, dermatology, and soft tissue surgery. Outside the clinic, you’ll likely find her hiking, soaking up the sun at the beach, or planning her next travel adventure.`,
    img1Src: '/images/izzy-image-1.jpg',
  },
  // {
  //   name: 'Samantha Fahmi',
  //   title: 'Lead Client Service Coordinator',
  //   bio: `Samantha has always had a deep affinity for animals. When she was a child she was raised with four cats. As she got older she acquired bearded dragons, a king black snake, a boa, tarantula, a couple of dogs, and a few goldfish—her love of animals started at an early age. After graduating high school, she got the opportunity to work at one of the top emergency clinics in Los Angeles, where her passion for animal and client care grew. Working as a supervisor of the front desk of a busy animal hospital she knew she was born to be a leader. Being able to assist and guide doctors, techs, front desk staff, and clients beings her joy. After 15 years of being in the field she recently decided to start taking courses in business and management to eventually obtain her CVPM, (certified veterinary practice manager), as well as expand her knowledge on starting and operating a business. Samantha is an LA girl, born in Santa Monica, raised in Culver City, she is currently living in the heart of Los Angeles with her husband and pittie Dodger. In her free time she enjoys traveling, crafting and cooking a variety of dishes. She also enjoys planning and hosting gatherings as a certified wedding and event planner.`,
  //   img1Src: '/images/samantha-image-1.jpg',
  //   img2Src: '/images/samantha-image-2.jpg',
  // },
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

    const index = wrap(0, staffMembers.length, page);

    timeout.current = setTimeout(
      () => {
        if (showImageNumber === 2 || !staffMembers[index].img2Src) {
          setPage([page + 1, 1]);
          setShowImageNumber(1);
        } else {
          setShowImageNumber(showImageNumber === 1 ? 2 : 1);
        }
      },
      staffMembers[index].img2Src ? 3500 : 7000
    );
  }, [showImageNumber, page]);

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

  const goToPage = (newPage: number) => {
    setPage([newPage, 1]);
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
                duration: 0.15,
              },
              opacity: { duration: 0.15 },
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
                className={
                  !staffMembers[index].img2Src || showImageNumber === 1
                    ? ''
                    : 'hide'
                }
              />
              {staffMembers[index].img2Src && (
                <Image
                  src={staffMembers[index].img2Src as string}
                  alt={staffMembers[index].name}
                  fill
                  sizes='340px'
                  className={showImageNumber === 2 ? '' : 'hide'}
                />
              )}
              {staffMembers[index].img2Src && (
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
              )}
            </StaffPicture>

            <StaffContent>
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
        <ListItemsContainer>
          <SliderButton onClick={() => paginate(-1)}>
            <Image
              src='/svg/SliderArrow_white.svg'
              alt='Previous'
              width={39}
              height={39}
            />
          </SliderButton>
          {staffMembers.map((staffMember, i) => (
            <StaffMemberPreviewItem
              onClick={() => goToPage(i)}
              className={index === i ? 'selected' : ''}
              key={i}
            >
              <Image
                src={staffMember.img1Src}
                alt={staffMember.name}
                fill
                sizes='80px'
              />
            </StaffMemberPreviewItem>
          ))}
          <SliderButton onClick={() => paginate(1)}>
            <Image
              src='/svg/SliderArrow_white.svg'
              alt='Next'
              width={39}
              height={39}
            />
          </SliderButton>
        </ListItemsContainer>
      </Container>
      <AllStaffSlider />
    </>
  );
};
