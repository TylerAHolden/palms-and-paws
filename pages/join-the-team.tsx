import {
  HeroContainer,
  HeroImageContainer,
  HeroTextContainer,
} from '../components/Hero';
import { ValidationError, useForm } from '@formspree/react';
import { useRef, useState } from 'react';

import { Button } from '../components/Buttons';
import Image from 'next/image';
import Layout from '../components/Layout';
import { Logo } from '../components/Logo';
import Script from 'next/script';
import { styled } from 'goober';

const ContactSection = styled('section')`
  background: var(--yellow);
  padding-left: var(--page-side-padding);
  padding-right: var(--page-side-padding);
  padding-top: calc(var(--page-side-padding) * 2);
  padding-bottom: calc(var(--page-side-padding) * 2);
`;

const ContactSectionInner = styled('div')`
  margin: auto;
  max-width: 1300px;
  * {
    color: white;
  }
  h3 {
    padding-top: 70px;
    text-align: center;
  }
  .error {
    color: #932121;
  }
`;

const ContactHeader = styled('div')`
  p {
    margin-bottom: 40px;
    margin-top: 10px;
    text-align: center;
  }
  h1 {
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

const ContactForm = styled('form')`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInputsContainer = styled('div')`
  padding: 40px 40px;
  padding-top: 20px;
  background: rgba(255, 255, 255, 0.44);
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  * {
    color: var(--yellow-dark);
  }
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
  > button {
    align-self: flex-end;
    color: var(--black);
    margin-top: 60px;
    min-width: 160px;
  }
  label {
    font-size: 14px;
    margin-bottom: 0px;
    opacity: 1;
    font-family: var(--font-family-sans-serif);
    margin-top: 40px;
    margin-left: 10px;
    margin-right: 10px;
    color: var(--yellow-dark);
  }
  input,
  textarea {
    margin: 0 10px;
    outline: none;
    border: none;
    background: none;
    border-bottom: 1px solid var(--yellow-dark);
    font-family: var(--font-family-sans-serif);
    font-size: 16px;
    padding-top: 0px;
    margin-top: 20px;
    ::placeholder {
      color: var(--yellow-dark);
    }
  }
`;

const HalfInputContainers = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

const InputContainer = styled('div')`
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
`;

const RoleContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 45px;
`;

const RoleItem = styled('button')`
  padding: 9px 22px;
  background: transparent;
  border-radius: 50px;
  margin: 6px 6px;
  transition: all 100ms ease-out;
  background: rgba(255, 255, 255, 0.2);
  p {
    margin: 0;
    text-align: left;
    color: var(--black);
    font-size: 14px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
  }
  &.selected {
    background: white;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
    &:hover {
      opacity: 0.6;
    }
  }
`;

const SucceededContainer = styled('div')`
  padding: 60px 40px;
  background: rgba(255, 255, 255, 0.44);
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    margin: 0;
    padding: 0;
    color: var(--yellow-dark);
    margin-top: 45px;
  }
`;

const StyledHeroTextContainer = styled(HeroTextContainer)`
  h1 {
    width: 100%;
  }
`;

const ROLE_OPTIONS = [
  'Client Service Coordinator',
  'Veterinary Assistant',
  'Registered Veterinary Technician',
  'Veterinarian',
  'Other',
] as const;

const title = 'Join our Team';
const subtitle =
  'Our team is built upon “others-oriented” leadership. Our goal is to grow personally as well as professionally, individually as well as organizationally. We are looking for high integrity, self-directed, positive and growth oriented people to join the team!';

export default function CareersPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [aboutYourself, setAboutYourself] = useState('');
  const [whoAdmire, setWhoAdmire] = useState('');
  const [whatDoYouNeed, setWhatDoYouNeed] = useState('');
  const [favTeam, setFavTeam] = useState('');
  const [passion, setPassion] = useState('');
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  const contactFormRef = useRef<any>(null);

  const [state, handleSubmit] = useForm('mpzvyglw');
  const recaptchaRef = useRef<string>();

  const tryRecaptcha = () => {
    if (recaptchaRef.current) return;
    const isServerSide = typeof window === 'undefined';
    if (isServerSide || !(window as any).grecaptcha) return;
    const grecaptcha = (window as any).grecaptcha;
    grecaptcha.ready(function () {
      if (!grecaptcha) return;
      recaptchaRef.current = 'loading';
      grecaptcha
        ?.execute('6Lcnk4EjAAAAAH-qYiQMiHQJhsWy9NcdQ9nvyJ-Q', {
          action: 'submit',
        })
        .then(function (token: string) {
          // console.info('got token: ' + token);
          const input = document.getElementById('g-recaptcha-response');
          if (input) {
            input.setAttribute('value', token);
            recaptchaRef.current = 'done';
          }
        });
    });
  };

  return (
    <Layout title='Join Our Team' description={`${title} - ${subtitle}`}>
      <Script
        defer
        src='https://www.google.com/recaptcha/api.js?render=6Lcnk4EjAAAAAH-qYiQMiHQJhsWy9NcdQ9nvyJ-Q'
        async
      />
      <HeroContainer>
        <StyledHeroTextContainer>
          <h1>Join our Team</h1>
          <p>
            Our team is built upon “others-oriented” leadership. Our goal is to
            grow personally as well as professionally, individually as well as
            organizationally. We are looking for high integrity, self-directed,
            positive and growth oriented people to join the team!
          </p>
        </StyledHeroTextContainer>
        <HeroImageContainer
          ar='1401 / 1510'
          className={imageIsLoaded ? 'loaded' : ''}
        >
          <Image
            priority
            src='/images/culture-header-image.png'
            alt='Palms and Paws Header Image'
            fill
            sizes='(max-width: 900px) 100vw, 50vw'
            quality={85}
            onLoad={(event) => {
              const target = event.target as any;

              // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
              if (target.src.indexOf('data:image/gif;base64') < 0) {
                setImageIsLoaded(true);
              }
            }}
          />
        </HeroImageContainer>
      </HeroContainer>
      <div ref={contactFormRef} />
      <ContactSection>
        <ContactSectionInner>
          <ContactHeader>
            <h1>Get Started</h1>
            <p>We can&apos;t wait to meet you!</p>
          </ContactHeader>
          {state.succeeded ? (
            <SucceededContainer>
              <Logo />
              <h3>
                Thank you for your application, we’ll be in touch shortly.
              </h3>
            </SucceededContainer>
          ) : (
            <ContactForm
              onSubmit={(e) => {
                console.log(contactFormRef.current);
                contactFormRef.current?.scrollIntoView(true);
                handleSubmit(e);
              }}
            >
              <ContactInputsContainer>
                {state.errors
                  ? state.errors.map((err, i) => (
                      <p className='error' key={i}>
                        {err.message}
                      </p>
                    ))
                  : null}
                <input
                  type='hidden'
                  id='g-recaptcha-response'
                  name='g-recaptcha-response'
                />
                <HalfInputContainers>
                  <InputContainer>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                      id='firstName'
                      name='firstName'
                      type='text'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      onFocus={tryRecaptcha}
                    />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                      id='lastName'
                      name='lastName'
                      type='text'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      onFocus={tryRecaptcha}
                    />
                  </InputContainer>
                </HalfInputContainers>
                <HalfInputContainers>
                  <InputContainer>
                    <label htmlFor='email'>Email Address</label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={tryRecaptcha}
                    />
                    <ValidationError
                      prefix='Email'
                      field='email'
                      errors={state.errors}
                    />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input
                      id='phoneNumber'
                      name='phoneNumber'
                      type='text'
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      onFocus={tryRecaptcha}
                    />
                    <ValidationError
                      prefix='Phone Number'
                      field='phoneNumber'
                      errors={state.errors}
                    />
                  </InputContainer>
                </HalfInputContainers>

                <label htmlFor='role'>Desired Role (Select Below)</label>
                <input
                  id='role'
                  name='role'
                  type='text'
                  value={role}
                  readOnly
                  disabled
                  hidden
                />
                <RoleContainer>
                  {ROLE_OPTIONS.map((roleOption) => {
                    const selected = roleOption === role;
                    return (
                      <RoleItem
                        type='button'
                        className={selected ? 'selected' : ''}
                        key={roleOption}
                        onClick={() => setRole(roleOption)}
                      >
                        <p>{roleOption}</p>
                      </RoleItem>
                    );
                  })}
                </RoleContainer>
                <label htmlFor='aboutYourself'>Tell us about yourself</label>
                <textarea
                  id='aboutYourself'
                  name='aboutYourself'
                  rows={4}
                  value={aboutYourself}
                  onChange={(e) => setAboutYourself(e.target.value)}
                  onFocus={tryRecaptcha}
                />
                <ValidationError
                  prefix='Field'
                  field='aboutYourself'
                  errors={state.errors}
                />

                <label htmlFor='whoAdmire'>
                  Who do you admire most and why?
                </label>
                <textarea
                  id='whoAdmire'
                  name='whoAdmire'
                  rows={4}
                  value={whoAdmire}
                  onChange={(e) => setWhoAdmire(e.target.value)}
                  onFocus={tryRecaptcha}
                />
                <ValidationError
                  prefix='Field'
                  field='whoAdmire'
                  errors={state.errors}
                />

                <label htmlFor='whatDoYouNeed'>
                  What do you need most to succeed professionally as well as
                  personally?
                </label>
                <textarea
                  id='whatDoYouNeed'
                  name='whatDoYouNeed'
                  rows={4}
                  value={whatDoYouNeed}
                  onChange={(e) => setWhatDoYouNeed(e.target.value)}
                  onFocus={tryRecaptcha}
                />
                <ValidationError
                  prefix='Field'
                  field='whatDoYouNeed'
                  errors={state.errors}
                />

                <label htmlFor='favTeam'>
                  Describe your favorite team or work environment and what made
                  it so incredible? (Does not need to be veterinary related)
                </label>
                <textarea
                  id='favTeam'
                  name='favTeam'
                  rows={4}
                  value={favTeam}
                  onChange={(e) => setFavTeam(e.target.value)}
                  onFocus={tryRecaptcha}
                />
                <ValidationError
                  prefix='Field'
                  field='favTeam'
                  errors={state.errors}
                />

                <label htmlFor='passion'>Describe a passion of yours</label>
                <textarea
                  id='passion'
                  name='passion'
                  rows={4}
                  value={passion}
                  onChange={(e) => setPassion(e.target.value)}
                  onFocus={tryRecaptcha}
                />
                <ValidationError
                  prefix='Field'
                  field='passion'
                  errors={state.errors}
                />

                <Button type='submit' disabled={state.submitting}>
                  SEND
                </Button>
              </ContactInputsContainer>
            </ContactForm>
          )}
        </ContactSectionInner>
      </ContactSection>
    </Layout>
  );
}
