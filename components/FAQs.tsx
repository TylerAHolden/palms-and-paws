import { Button } from './Buttons';
import Image from 'next/image';
import React from 'react';
import { styled } from 'goober';

type Props = {};

const Container = styled('div')`
  width: 100%;
  padding-top: 180px;
  padding-bottom: 80px;
`;

const InnerContainer = styled('div')`
  margin: auto;
  max-width: 1300px;
  display: flex;
  align-items: flex-start;
  padding-left: var(--page-side-padding);
  padding-right: var(--page-side-padding);
  @media (max-width: 770px) {
    flex-direction: column;
  }
  h2 {
    margin-right: -40px;
    margin-top: -100px;
    flex-shrink: 0;
  }
`;

const AccordionContainer = styled('div')`
  flex: 1;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

const AccordionItem = styled('div')`
  margin-right: 60px;
  position: relative;
  border-bottom: 1px solid var(--black);
  padding: 16px 0;
  cursor: pointer;
  @media (max-width: 770px) {
    width: calc(100% - 60px);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const AccordionHeader = styled('div')``;

const AccordionContent = styled('div')`
  display: none;
  p {
    opacity: 0.5;
  }
  &.active {
    display: block;
  }
`;

const AccordionExpandButton = styled(Button)`
  background: transparent;
  padding: 10px;
  display: flex;
  border: none;
  margin: 6px;
  position: absolute;
  top: 10px;
  right: -80px;

  &:hover {
    background: rgba(38, 38, 38, 0.04);
    border: none;
  }
`;

const FAQList = [
  {
    question: <p>What are your hours?</p>,
    answer: (
      <>
        <p>Monday through Friday 8:00 AM to 8:00 PM</p>
        <p>Saturday & Sunday, 8:00 AM to 4:00 PM</p>
      </>
    ),
  },
  {
    question: <p>Do you see emergencies?</p>,
    answer: (
      <p>
        Palms & Paws Veterinary Center is a general practice, but we are not a
        specialty or emergency hospital. While we will have urgent care
        appointments and help provide stabilization for emergency cases, we are
        not a 24-hour facility. For cases that need more advanced care or the
        extra support overnight, we will do what is best for our patient and
        transfer to a local emergency room.
      </p>
    ),
  },
  {
    question: <p>What is specialist support?</p>,
    answer: (
      <p>
        We are fortunate to have specialists that will spend time with the Palms
        & Paws team to add additional diagnostics and services to our patient’s
        without the need to travel to a local specialty hospital.
      </p>
    ),
  },
  {
    question: <p>What makes Palms and Paws different?</p>,
    answer: (
      <p>
        We offer state of the art veterinary medicine, delivered with
        compassion, all to help empower pet-parents and advance the life of
        pets. Our others-oriented leadership and team based medical approach
        allows us to deliver on these goals and grow together with our patients
        and their families.
      </p>
    ),
  },
  {
    question: <p>What services does Palms and Paws offer?</p>,
    answer: (
      <p>
        An array of services from wellness visits, primary care, surgery,
        dentistry, geriatric care, specialist support and more. Please see our
        services page for more detail!
      </p>
    ),
  },
  {
    question: <p>What animals does Palms and Paws treat?</p>,
    answer: <p>While we love all animals, we specialize in dogs and cats.</p>,
  },
  {
    question: <p>Does Palms and Paws require a membership?</p>,
    answer: (
      <p>
        All are welcome, no membership required! We do offer care plans for
        puppies & kittens, young to middle aged dogs and cats, as well as
        geriatric dogs and cats, please schedule an appointment or ask our
        client service coordinators to learn more.
      </p>
    ),
  },
  {
    question: <p>Do you accept pet insurance?</p>,
    answer: (
      <p>
        Pet insurance is an excellent way to protect your pets! We will work
        with pet insurance carriers and ensure they receive claims in an
        expedient timeframe. Most insurance companies reimburse their clients
        after claims are received and approved.
      </p>
    ),
  },
  {
    question: <p>Is there a pet insurance that you recommend?</p>,
    answer: (
      <p>
        No–while we don’t recommend a particular type, we understand the
        decision can be overwhelming. A great resource is{' '}
        <a href='www.petted.com' target='_blank' rel='noreferrer noopener'>
          www.petted.com
        </a>
        , a website where you can compare different insurance plans!
      </p>
    ),
  },
];

export const FAQs: React.FC<Props> = ({}) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <Container id='FAQs'>
      <InnerContainer>
        <h2>
          Your questions,
          <br />
          <i>answered.</i>
        </h2>
        <AccordionContainer>
          {FAQList.map((faq, index) => {
            const selected = activeIndex === index;

            return (
              <AccordionItem
                key={index}
                onClick={() => setActiveIndex(selected ? -1 : index)}
              >
                <AccordionExpandButton
                  onClick={() => setActiveIndex(selected ? -1 : index)}
                >
                  <Image
                    src={
                      selected ? '/svg/MinusCircle.svg' : '/svg/PlusCircle.svg'
                    }
                    alt='Next'
                    width={39}
                    height={39}
                  />
                </AccordionExpandButton>
                <AccordionHeader>{faq.question}</AccordionHeader>
                <AccordionContent className={selected ? 'active' : ''}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </AccordionContainer>
      </InnerContainer>
    </Container>
  );
};
