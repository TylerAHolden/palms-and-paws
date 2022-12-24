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

const Container = styled('div')`
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  position: relative;
  min-height: 1100px;
  overflow: hidden;
  max-width: 100%;
`;

const title = 'Contact Us';
const subtitle =
  'Come in today and experience a more caring and comforting approach to your pet’s healthcare needs.';

export default function Services() {
  return (
    <Layout title='Contact' description={`${title} - ${subtitle}`}>
      <Container>
        <iframe
          src='https://palmspawsvet.usw2.ezyvet.com/external/portal/main/login'
          name='ezyBooking'
        ></iframe>
      </Container>
    </Layout>
  );
}
