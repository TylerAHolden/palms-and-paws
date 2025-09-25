import Layout from '../components/Layout';
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
`;

const title = 'Cookies Policy';
const subtitle =
  'Please read this cookies policy carefully before using Our Service.';

export default function CookiesPolicyPage() {
  return (
    <Layout title={title} description={`${title} - ${subtitle}`}>
      <Section>
        <SectionInner></SectionInner>
      </Section>
    </Layout>
  );
}
