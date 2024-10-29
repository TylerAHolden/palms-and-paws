import CarouselBase from './CarouselBase';
import Image from 'next/image';
import React from 'react';
import { styled } from 'goober';

type Props = {};

const Container = styled('div')`
  padding-top: calc(var(--page-side-padding) / 2);
`;

const Slide = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin: 10px;
  padding: 0;
  &.embla__slide {
    min-width: 200px;
  }
  img {
    border-radius: 50%;
  }
  h4 {
    padding-bottom: 1px;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    padding-top: 10px;
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 13px;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 5px;
    opacity: 0.56;
  }

  @media (max-width: 900px) {
    &.embla__slide {
    }
  }
  @media (max-width: 600px) {
    &.embla__slide {
    }
  }
`;

const ITEMS = [
  {
    name: 'Nyasha',
    title: 'Veterinary Assistant',
    img: '/images/staff/Nyasha.jpg',
  },
  {
    name: 'Margaret "Maggie"',
    title: 'Client Service Coordinator',
    img: '/images/staff/Margaret.jpg',
  },
  // {
  //   name: 'Samantha',
  //   title: 'Lead Client Service Coordinator',
  //   img: '/images/staff/Samantha.jpg',
  // },
  {
    name: 'Kendria',
    title: 'Kennel Attendant',
    img: '/images/staff/Kendria.jpg',
  },
  {
    name: 'Steven',
    title: 'Registered Veterinary Technician',
    img: '/images/staff/Steven.jpg',
  },
  // {
  //   name: 'Hasina',
  //   title: 'Client Service Coordinator',
  //   img: '/images/staff/Hasina.jpg',
  // },
  // {
  //   name: 'Ana',
  //   title: 'Veterinary Assistant',
  //   img: '/images/staff/Ana.jpg',
  // },
  // {
  //   name: 'Ngoki',
  //   title: 'Veterinary Assistant',
  //   img: '/images/staff/Ngoki.jpg',
  // },
  {
    name: 'Claudia',
    title: 'Client Service Coordinator',
    img: '/images/staff/Claudia.jpg',
  },
  // {
  //   name: 'Emeli',
  //   title: 'Kennel Attendant',
  //   img: '/images/staff/Emeli.jpg',
  // },
  // {
  //   name: 'Grace',
  //   title: 'Client Service Coordinator',
  //   img: '/images/staff/Grace.jpg',
  // },
  // {
  //   name: 'Xochil',
  //   title: 'Veterinary Assistant',
  //   img: '/images/staff/Xochil.jpg',
  // },
  {
    name: 'Diego',
    title: 'Veterinary Technician',
    img: '/images/staff/Diego.jpg',
  },
];

export const AllStaffSlider: React.FC<Props> = () => {
  return (
    <Container>
      <CarouselBase
        autoplay
        showArrows={false}
        showDots={false}
        inViewThreshold={6}
      >
        {ITEMS.map((item, i) => (
          <Slide className='embla__slide' key={i}>
            <Image
              src={item.img}
              alt={item.name + ' ' + item.title}
              width={148}
              height={148}
            />
            <h4>{item.name}</h4>
            <p>{item.title}</p>
          </Slide>
        ))}
      </CarouselBase>
    </Container>
  );
};
