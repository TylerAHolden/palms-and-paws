import { ValidationError, useForm } from '@formspree/react';
import { useEffect, useState } from 'react';

import { Button } from '../components/Buttons';
import Head from 'next/head';
import Layout from '../components/Layout';
import { styled } from 'goober';

declare var grecaptcha: any;

const ContactSection = styled('section')`
  background: var(--green);
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
    max-width: 600px;
  }
`;

const ContactForm = styled('form')`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const ContactCategoryContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const HelpCategorySelectContainer = styled('div')`
  border-radius: var(--border-radius);
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

const CategoryItem = styled('button')`
  padding: 9px 22px;
  background: transparent;
  border-radius: 50px;
  margin: 2px 0;
  transition: all 100ms ease-out;
  p {
    margin: 0;
    text-align: left;
    color: var(--black);
  }
  &:hover {
    background: rgba(255, 255, 255, 0.4);
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

const ContactInputsContainer = styled('div')`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding-top: 40px;
  button {
    align-self: flex-end;
    color: var(--black);
    margin-top: 20px;
  }
  label {
    transition: opacity 100ms ease-out;
    font-size: 14px;
    margin-bottom: -25px;
    opacity: 0.5;
    font-family: var(--font-family-sans-serif);
    margin-top: 20px;
    &:hover {
      opacity: 1;
    }
  }
  input,
  textarea {
    outline: none;
    border: none;
    background: none;
    border-bottom: 1px solid white;
    font-family: var(--font-family-sans-serif);
    font-size: 16px;
    padding-top: 25px;
    margin-top: 20px;
    ::placeholder {
      color: white;
    }
  }
`;

const title = 'Contact Us';
const subtitle =
  'Come in today and experience a more caring and comforting approach to your pet’s healthcare needs.';

const HELP_CATEGORIES = [
  'Services',
  'Scheduling',
  'Surgery',
  'Job Inquiry',
  'Other',
] as const;

export default function Services() {
  const [helpCategory, setHelpCategory] =
    useState<typeof HELP_CATEGORIES[number]>('Scheduling');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [state, handleSubmit] = useForm('mnqyaqqk');

  console.log(state);

  useEffect(() => {
    grecaptcha.ready(function () {
      if (!grecaptcha) return;
      grecaptcha
        ?.execute('6Lcnk4EjAAAAAH-qYiQMiHQJhsWy9NcdQ9nvyJ-Q', {
          action: 'submit',
        })
        .then(function (token: string) {
          console.info('got token: ' + token);
          const input = document.getElementById('g-recaptcha-response');
          if (input) {
            input.setAttribute('value', token);
          }
        });
    });
  }, []);

  return (
    <Layout title='Contact' description={`${title} - ${subtitle}`}>
      <Head>
        <script
          defer
          src='https://www.google.com/recaptcha/api.js?render=6Lcnk4EjAAAAAH-qYiQMiHQJhsWy9NcdQ9nvyJ-Q'
          async
        />
      </Head>
      <ContactSection>
        <ContactSectionInner>
          <ContactHeader>
            <h1>Contact Us</h1>
            <p>
              Come in today and experience a more caring and comforting approach
              to your pet’s healthcare needs.
            </p>
          </ContactHeader>
          {state.succeeded ? (
            <h3>Thanks for reaching out, we will be in touch soon.</h3>
          ) : (
            <ContactForm onSubmit={handleSubmit}>
              <ContactCategoryContainer>
                <p>What can we help you with?</p>
                <HelpCategorySelectContainer>
                  {HELP_CATEGORIES.map((category) => {
                    const selected = category === helpCategory;
                    return (
                      <CategoryItem
                        type='button'
                        className={selected ? 'selected' : ''}
                        key={category}
                        onClick={() => setHelpCategory(category)}
                      >
                        <p>{category}</p>
                      </CategoryItem>
                    );
                  })}
                </HelpCategorySelectContainer>
              </ContactCategoryContainer>
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
                <label htmlFor='inquiry-type'>Inquiry Type</label>
                <input
                  id='inquiry-type'
                  name='inquiry-type'
                  type='text'
                  value={helpCategory}
                  readOnly
                  disabled
                />
                <label htmlFor='name'>Name</label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor='email'>Email Address</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
                <Button type='submit' disabled={state.submitting}>
                  SEND MESSAGE
                </Button>
              </ContactInputsContainer>
            </ContactForm>
          )}
        </ContactSectionInner>
      </ContactSection>
    </Layout>
  );
}
