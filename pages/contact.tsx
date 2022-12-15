import Layout from '../components/Layout';
import { useState } from 'react';

const title = 'Contact Us';
const subtitle =
  'Come in today and experience a more caring and comforting approach to your pet’s healthcare needs.';

export default function Services() {
  const [helpCategory, setHelpCategory] = useState('');
  return (
    <Layout title='Contact' description={`${title} - ${subtitle}`}>
      <h1>Contact Us</h1>
      <p>
        Come in today and experience a more caring and comforting approach to
        your pet’s healthcare needs.
      </p>
    </Layout>
  );
}
