import Layout from '../components/Layout';
import Link from 'next/link';
import { styled } from 'goober';

const Section = styled('section')`
  padding-left: var(--page-side-padding);
  padding-right: var(--page-side-padding);
  padding-top: calc(var(--page-side-padding) * 2);
  padding-bottom: calc(var(--page-side-padding) * 2);
`;

const SectionInner = styled('div')`
  margin: auto;
  max-width: 1000px;
  h3 {
    margin-top: 50px;
  }
  h4 {
    margin-top: 30px;
  }
`;

const title = 'Cookies Policy';
const subtitle =
  'Please read this cookies policy carefully before using Our Service.';

export default function CookiesPolicyPage() {
  return (
    <Layout title={title} description={`${title} - ${subtitle}`}>
      <Section>
        <SectionInner>
          <h1>Cookie Policy</h1>

          <p>
            <strong>Effective Date:</strong> September 24, 2025
            <br />
            <strong>Last Updated:</strong> September 26, 2025
          </p>

          <h3>Introduction</h3>
          <p>
            This Cookie Policy explains how{' '}
            <strong>Palms &amp; Paws Veterinary Center, Inc.</strong>{' '}
            (“Company,” “we,” “us,” or “our”) uses cookies and similar
            technologies when you visit our website
            <Link href='https://palmspawsvet.com'>palmspawsvet.com</Link> (the
            “Website”).
          </p>
          <p>
            We use cookies to make our Website work properly, to improve user
            experience, and to support essential functionality like appointment
            scheduling, marketing communications, and security.
          </p>
          <p>
            This Policy should be read together with our{' '}
            <Link href='/privacy-policy'>Privacy Policy</Link> for a full
            understanding of how we process personal data.
          </p>

          <h3>What Are Cookies?</h3>
          <p>
            Cookies are small text files that are placed on your device when you
            visit a website. They help websites recognize your device and store
            certain information about your preferences or past actions.
          </p>

          <h3>How We Use Cookies</h3>

          <h4>1. Strictly Necessary Cookies</h4>
          <p>
            These cookies are required for the Website to function and cannot be
            switched off in our systems. They include:
          </p>
          <ul>
            <li>Security and session management cookies</li>
            <li>
              Load balancing and hosting-related cookies (Vercel / Next.js)
            </li>
            <li>Cookiebot consent management cookies</li>
          </ul>

          <h4>2. Functional Cookies</h4>
          <p>
            These cookies allow us to remember your preferences and improve how
            our Website functions. For example:
          </p>
          <ul>
            <li>Saving form entries</li>
            <li>Remembering user selections (such as language or region)</li>
          </ul>

          <h3>3. Performance &amp; Marketing Cookies</h3>
          <p>
            These cookies help us understand how visitors use the Website and
            support communications with our users. They may be used to deliver
            more relevant content and improve our services.
          </p>

          <h3>Managing Cookies</h3>
          <p>
            When you visit our Website for the first time, you will see a cookie
            consent banner powered by <strong>Cookiebot</strong>. You may:
          </p>
          <ul>
            <li>Accept all cookies</li>
            <li>Reject all but necessary cookies</li>
            <li>Customize your cookie preferences</li>
          </ul>
          <p>
            You can also change or withdraw your consent at any time by
            revisiting the cookie settings link on our Website.
          </p>

          <h3>Third-Party Cookies</h3>
          <p>
            Some cookies may be placed by third-party service providers we use
            to support functionality (e.g., Klaviyo for marketing emails). These
            third parties may use their own cookies subject to their privacy
            policies.
          </p>

          <h3>How to Control Cookies</h3>
          <p>
            Most web browsers allow you to manage cookie settings through
            preferences. You can usually:
          </p>
          <ul>
            <li>Delete cookies stored on your device</li>
            <li>Block cookies from specific websites</li>
            <li>Set your browser to notify you before cookies are placed</li>
          </ul>
          <p>
            Please note that disabling certain cookies may affect the
            functionality of our Website.
          </p>

          <h3>Updates to This Policy</h3>
          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in technology, law, or our practices. Updates will be posted
            on this page with a new “Last Updated” date.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions about our Cookie Policy, please contact us
            at:
          </p>
          <address>
            <strong>Palms &amp; Paws Veterinary Center, Inc.</strong>
            <br />
            1762 14th Street
            <br />
            Santa Monica, CA 90404
            <br />
            Email:{' '}
            <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>
          </address>
        </SectionInner>
      </Section>
    </Layout>
  );
}
