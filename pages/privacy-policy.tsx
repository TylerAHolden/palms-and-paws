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

const title = 'Privacy Policy';
const subtitle =
  'Your privacy is important to us. This privacy statement explains the personal data our website collects, how we use it, and your rights.';

export default function PrivacyPolicyPage() {
  return (
    <Layout title={title} description={`${title} - ${subtitle}`}>
      <Section>
        <SectionInner>
          <h1>Privacy Policy</h1>
          <p>
            <strong>Effective Date:</strong> September 24, 2025
          </p>

          <p>
            <strong>Palms &amp; Paws Veterinary Center, Inc.</strong>{' '}
            (“Company,” “we,” “our,” or “us”) respects your privacy. This
            Privacy Policy explains how we collect, use, share, and protect your
            personal information when you use our services, websites, platforms,
            applications, mobile applications, and PLUS subscription membership
            (collectively “Services”). If you do not agree with our policies and
            practices, please do not use our Services. If you still have any
            questions or concerns, please contact us at:{' '}
            <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            When you visit or use our Website or Services, we may collect and
            retain various types of information, including but not limited to:
          </p>
          <ul>
            <li>
              <strong>Account and Contact Information.</strong> Name, phone
              number, postal address, billing address, payment details, email
              address, username, password, age, or birth date, etc.
            </li>
            <li>
              <strong>Payment, Purchase and Account Information.</strong>{' '}
              Credit, debit or other payment card information and Information
              about your subscription, account, purchases, or discounts.
            </li>
            <li>
              <strong>
                Device and Other Technical and Location Information.
              </strong>{' '}
              Information about your hardware, operating system, browser type,
              browser settings, your mobile carrier or Internet Service
              Provider, cookies, tracking pixels, IP addresses, browser/device
              information and unique identifiers associated with your device,
              including IP address and location (i.e., information derived from
              your device associated with your IP address, city or country code,
              or address). Data collected, includes, but is not limited to,
              information collected via Google Analytics and Meta Pixel.
            </li>
            <li>
              <strong>Photos, Videos, or Audio Information.</strong> Images or
              recordings from your device or that you otherwise post or submit
              to us or photos or recordings of you from live experiences or
              events that you or others share, and information you submit, such
              as your pet names, photos and information and submissions you
              share with us. If you post information or input information, such
              as in a page offers commenting, and visitors leave a comment, we
              collect the data shown in the comments form, the visitor’s IP
              address, and browser user agent string.
            </li>
            <li>
              <strong>Usage and Viewing Information.</strong> Webpages, apps,
              and ads you see and interact with and accounts you link to based
              on your interactions with our Services, which may include mouse
              clicks, mouse movements, keystrokes, and page scrolling. When you
              use our Service, you consent to the recording of your interactions
              with us.
            </li>
            <li>
              <strong>Social Media Information.</strong> Information about your
              social media engagement and interaction with social media sites.
            </li>
            <li>
              <strong>Other Information You Provide.</strong> Information you
              provide when you use our Services or participate in our events,
              surveys, or promotions or when you interact with us or others on
              our channels, pages, and accounts on social media and other
              companies’ platforms. For instance, we may collect chats,
              comments, posts, customer service communications. We may also
              collect personal data, such as physical or mental health, race, or
              ethnicity, religious or philosophical beliefs, sex life, sexual
              orientation, or political affiliation, if your reveal or share
              that data.
            </li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use the information we collect in multiple ways, including but
            not limited to:
          </p>
          <ul>
            <li>
              <strong>Provide and Improve our Services.</strong> We may analyze
              your information (and create aggregated data derived from your
              information) to develop, maintain, analyze, optimize, improve,
              measure, and report on our Services, including but not limited to
              using your information to fulfill and manage your orders and
              payments and operate PLUS subscriptions. We also use Information
              to support our internal business functions, including finance,
              accounting, and audit.
            </li>
            <li>
              <strong>Communicate.</strong> Communicate with you, including
              sending service updates and marketing and promotional
              communications, including responding to your inquiries and
              addressing issues that might arise with the Services. We may send
              you communications, including by email, push notifications, or
              text, about the Services, your purchases, your account,, changes
              to policies, customer service inquiries, or to request feedback.
            </li>
            <li>
              <strong>Fraud Prevention.</strong> We may use your Information to
              enhance the safety and security of our Services. We may also use
              it to verify your identity, monitor, investigate, and prevent
              fraud, and halt other unauthorized or illegal activity and
              otherwise detect and prevent spam or fraudulent activity.
            </li>
            <li>
              <strong>Advertising and Marketing.</strong> We promote our brands
              and offerings by publishing advertising on our own Services and by
              placing ads on third parties’ services. We also provide
              advertising services for third party advertisers. We may use your
              information to model, segment, target, offer, market, and
              advertise our Services, including providing discounts or offerings
              from our affiliates, business partners, and select third parties,
              and running competitions on social media and other channels. We
              may also use your information to provide and improve our
              advertising services, including how we target and measure our
              publishing of ads for third party advertisers.
            </li>
            <li>
              <strong>Comply with Law and our Terms of Use.</strong> We may use
              your information to comply with applicable law, such as to satisfy
              a tax obligation or government request. We may also use it to
              enforce or defend our rights, investigate, or report potential
              violations of our Terms of Use.
            </li>
            <li>
              <strong>With Your Consent.</strong> We may use your information
              with your consent for other purposes described at the point of
              collection.
            </li>
            <li>
              <strong>Deriving Aggregated Data.</strong> We may analyze your
              information to create aggregated data that we use in connection
              with any of the other uses of information set out in this section.
            </li>
            <li>
              <strong>Retention.</strong> We only keep Information for as long
              as we need it to fulfil the purpose we are using it for or as
              otherwise permitted by law.
            </li>
          </ul>

          <h3>3. Cookies</h3>
          <p>
            A cookie or other tracking technology is a small piece of script or
            code that is stored on your browser or device to help websites and
            apps remember you and collect information about your use of the
            Services. We use cookies and similar tracking technologies (like web
            beacons and pixels) to access or store information. The Company uses
            these technologies to collect information and we and third-party
            advertising companies may use this information to better provide the
            Services. Third parties are responsible for their cookies and
            identifiers, and may use them for their own purposes with your
            consent. For more information on Google Analytics, see Google’s
            Privacy &amp; Terms. To opt out of Google Analytics, go to Google
            Analytics at:{' '}
            <a href='https://tools.google.com/dlpage/gaoptout'>
              https://tools.google.com/dlpage/gaoptout
            </a>
            .
          </p>
          <ul>
            <li>
              If you leave a comment on our site, you may opt in to saving your
              name, email address, and website in cookies for convenience. These
              cookies last one year.
            </li>
            <li>
              If you visit our login page, we will set a temporary cookie to
              determine if your browser accepts cookies. This cookie contains no
              personal data and is discarded when you close your browser.
            </li>
            <li>
              When you log in, we will set cookies to save your login
              information and screen display preferences. Login cookies last two
              days; screen option cookies last one
            </li>
          </ul>
          <p>
            4. year. If you select “Remember Me,” your login will persist for
            two weeks. Otherwise, logging out removes login cookies.
          </p>

          <h3>Embedded Content from Other Websites</h3>
          <p>
            5. Articles on this site may include embedded content (e.g., videos,
            images, articles). Embedded content from other websites behaves
            exactly as if the visitor had visited the other site directly. These
            sites may collect data about you, use cookies, embed third-party
            tracking, and monitor your interaction with that content. The
            third-party websites may contain advertisements from third parties
            that are not affiliated with us and which may link to other
            websites, services, or applications. Accordingly, we do not make any
            guarantee regarding any such third parties, and we will not be
            liable for any loss or damage caused by the use of such third-party
            websites, services, or applications. We cannot guarantee the safety
            and privacy of data you provide to any third parties. Any data
            collected by third parties is not covered by this privacy notice. We
            are not responsible for the content or privacy and security
            practices and policies of any third parties, including other
            websites, services, or applications that may be linked to or from
            the Services. You should review the policies of such third parties
            and contact them directly with regard to any questions on their
            privacy policy.
          </p>

          <h3>Whom We Share Your Data With</h3>
          <p>
            We collect information when you interact with our Services. In
            general, the information we collect is either (a) provided by you,
            (b) collected by us when you use our Services, or (c) given to us by
            third parties. We share your data with third-party vendors, service
            providers, contractors, advertisers, ad agencies, or agents and
            others who perform services for us or on our behalf and require
            access to such information to do that work. Where required by law,
            we get your consent to collect this information. We do not use or
            disclose personal information for profiling without either your
            explicit consent or where otherwise permitted by applicable law.
          </p>

          <h3>6. Data Retention</h3>
          <p>
            We will only retain your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). Some information,
            however, may be retained indefinitely as needed or commercially
            reasonable. Website administrators can also access and edit this
            information. Typically, the Company retains information for multiple
            reasons, including but not limited to setting up and managing
            accounts, processing pending orders, cancelling or refunding orders,
            and processing subscriptions.
          </p>

          <h3>7. Security</h3>
          <p>
            We implement measures to protect your information. Nonetheless, no
            electronic transmission over the internet or information storage
            technology can be guaranteed to be secure, so we cannot promise or
            guarantee that hackers, cybercriminals, or other unauthorized third
            parties will not be able to defeat our security and improperly
            collect, access, steal, or modify your information.
          </p>

          <h3>8. Your Rights</h3>
          <p>
            Depending on where you are located geographically, the applicable
            privacy law may mean you have certain rights regarding your personal
            information. The easiest way to exercise your rights is by
            contacting us at:{' '}
            <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>.
            We will consider and act upon any request in accordance with
            applicable data protection laws. For example, if you are a
            California resident (CCPA) or an EU/UK resident (GDPR), you have
            additional rights. Depending on the state or country where you are
            based, you may have the right to request some or all of the
            following:
          </p>
          <ul>
            <li>
              The right to request correction or deletion of your data
              (excluding data we retain for legal, administrative, or security
              purposes). In specific cases, we may not be able to delete some
              types of information, in particular, where we have a legal
              obligation to keep that Information (e.g., for regulatory
              reporting purposes), or where you want us to continue to provide
              you with the Services and the processing of the information is
              necessary for the provision of the Services.
            </li>
            <li>
              The right, in certain circumstances, to object to or restrict the
              further processing of your information.
            </li>
            <li>
              The right to request a file of personal data we hold about you and
              in some cases, to receive your information in a digital format or
              to have it transmitted directly to another controller (if
              technically feasible).
            </li>
            <li>
              The right to lodge a complaint before the supervisory authority
              for data protection in your state or country, if you consider that
              your rights under the applicable privacy legislation have been
              infringed.
            </li>
            <li>
              The right to ask us to confirm whether we process your personal
              information (including, where required under applicable law,
              information about third parties to whom we disclose personal
              information), to provide more information about how we process and
              disclose personal information, and for a copy of the personal
              information we maintain about you.
            </li>
            <li>
              The right to ask us not to sell your personal information
              according to applicable law. We do not sell personal information
              of individuals we know to be children as directed by applicable
              law.
            </li>
            <li>
              The right to ask us not to use or disclose your personal
              information for targeted advertising and opt out of marketing
              communications. Even if you opt out of targeted advertising, we
              will continue to collect and use data for other purposes. We do
              not use or disclose for targeted advertising for personal
              information of individuals we know to be children as directed by
              applicable law.
            </li>
            <li>
              You can tell us not to “sell” your personal information or limit
              the use of your personal information for targeted advertising by
              clicking the Do Not Sell or Share My Personal Information link on
              our Website.
            </li>
            <li>
              You can also exercise your rights, or ask any questions, or
              address any concerns, by contacting us at:{' '}
              <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>
              . If we deny your request or fail to respond to your request, you
              may appeal our decision or follow up by contacting us at:{' '}
              <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>{' '}
              to ask us to review your request again. Your email should include
              “Appeal” in the subject line.
            </li>
          </ul>

          <h4>
            If You Are Located in the EU or UK, this Section Applies to You.
          </h4>
          <p>
            The General Data Protection Regulation (GDPR) and UK GDPR require us
            to explain the valid legal bases we rely on in order to process your
            personal information. As such, we may rely on the following legal
            bases to process your personal information:
          </p>
          <ul>
            <li>
              <strong>Consent.</strong> We may process your information if you
              have given us permission (i.e., consent) to use your personal
              information for a specific purpose. You can withdraw your consent
              at any time.
            </li>
            <li>
              <strong>Legal and Contractual Obligations.</strong> We may process
              your information where we believe it is necessary to fulfill our
              contractual obligations to you, including providing our Services
              or at your request prior to entering into a contract with you and
              to comply with our legal obligations, such as to cooperate with a
              law enforcement body or regulatory agency, exercise or defend our
              legal rights, or disclose your information as evidence in
              litigation in which we are involved.
            </li>
            <li>
              <strong>Vital and Legitimate Interests.</strong> We may process
              your information where we believe it is necessary to protect your
              vital interests or the vital interests of a third party, such as
              situations involving potential threats to the safety of any
              person. We may also process your information when we believe it is
              reasonably necessary to achieve our legitimate business interests
              and those interests do not outweigh your interests and fundamental
              rights and freedoms. For example, we may process your personal
              information to send users information about special offers and
              discounts on our products and services, develop and display
              personalized and relevant advertising content for our users,
              analyze how our services are used so we can improve them to engage
              and retain users, support our marketing activities, diagnose
              problems and/or prevent fraudulent activities, understand how our
              users use our products and services so we can improve user
              experience
            </li>
            <li>
              <strong>Definitions.</strong> In legal terms, we are generally the
              “data controller” under European data protection laws of the
              personal information described in this privacy notice, since we
              determine the means and/or purposes of the data processing we
              perform. This privacy notice does not apply to the personal
              information we process as a “data processor” on behalf of our
              customers. In those situations, the customer that we provide
              services to and with whom we have entered into a data processing
              agreement is the “data controller” responsible for your personal
              information, and we merely process your information on their
              behalf in accordance with your instructions. If you want to know
              more about our customers’ privacy practices, you should read their
              privacy policies and direct any questions you have to them.
            </li>
          </ul>

          <h4>If You Are Located in Canada, this Section Applies to You.</h4>
          <p>
            We may process your information if you have given us specific
            permission (i.e., consent) to use your personal information for a
            specific purpose, or in situations where your permission can be
            inferred (i.e., implied consent). You can withdraw your consent at
            any time. In some exceptional cases, we may be legally permitted
            under applicable law to process your information without your
            consent, including, for example:
          </p>
          <ul>
            <li>
              If collection is clearly in the interests of an individual and
              consent cannot be obtained in a timely way.
            </li>
            <li>
              For investigations and fraud detection and prevention and for
              business transactions provided certain conditions are met.
            </li>
            <li>
              If it is contained in a witness statement and the collection is
              necessary to assess, process, or settle an insurance claim.
            </li>
            <li>
              For identifying injured, ill, or deceased persons and
              communicating with next of kin.
            </li>
            <li>
              If we have reasonable grounds to believe an individual has been,
              is or may be victim of financial abuse.
            </li>
            <li>
              If it is reasonable to expect collection and use with consent
              would compromise the availability or the accuracy of the
              information and the collection is reasonable for purposes related
              to investigating a breach of an agreement or a contravention of
              the laws of Canada or a province.
            </li>
            <li>
              If disclosure is required to comply with a subpoena, warrant,
              court order, or rules of the court relating to the production of
              records.
            </li>
            <li>
              If it was produced by an individual in the course of their
              employment, business, or profession and the collection is
              consistent with the purposes for which the information was
              produced.
            </li>
            <li>
              If the collection is solely for journalistic, artistic, or
              literary purposes.
            </li>
          </ul>

          <h4>
            If You Are Located in California, this Section Applies to You.
          </h4>
          <ul>
            <li>
              California Civil Code Section 1798.83, also known as the “Shine
              The Light” law, permits our users who are California residents to
              request and obtain from us, once a year and free of charge,
              information about categories of personal information (if any) we
              disclosed to third parties for direct marketing purposes and the
              names and addresses of all third parties with which we shared
              personal information in the immediately preceding calendar year.
              If you are a California resident and would like to make such a
              request, please submit your request in writing to us using the
              contact information provided below.
            </li>
            <li>
              If you are under 18 years of age, reside in California, and have a
              registered account with Services, you have the right to request
              removal of unwanted data that you publicly post on the Services.
              To request removal of such data, please contact us using the
              contact information provided below and include the email address
              associated with your account and a statement that you reside in
              California. We will remove the data is not publicly displayed on
              the Services, but please be aware that the data may not be
              completely or comprehensively removed from all our systems (e.g.,
              backups, etc.). If the information is publicly available and is
              specified by the regulations.
            </li>
          </ul>

          <h4>If You Are Located in Virginia, this Section Applies to You.</h4>
          <ul>
            <li>
              You have the right to be informed whether or not we are processing
              your personal data.
            </li>
            <li>You have the right to access your personal data.</li>
            <li>
              You have the right to correct inaccuracies in your personal data.
            </li>
            <li>
              You have the right to request deletion of your personal data.
            </li>
            <li>
              You have the right to obtain a copy of the personal data you
              previously shared with us.
            </li>
            <li>
              You have the right to opt out of the processing of your personal
              data if it is used for targeted advertising, the sale of personal
              data, or profiling.
            </li>
          </ul>

          <h3>9. Controls For Do-Not-Track Features</h3>
          <p>
            Many web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track (“DNT”) feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.
          </p>

          <h3>10. Children’s Privacy</h3>
          <p>
            We do not knowingly collect personal information directly from
            children without consent. Parents may contact us at{' '}
            <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>{' '}
            to request deletion of a child’s data.
          </p>
          <p>
            <strong>Privacy Rights Vary Depending on Your Location.</strong>{' '}
            This Privacy Policy is intended to inform you of your rights.
            Depending on your location, your rights may be different than if you
            were in another different location. If you use the Services, please
            make sure you are aware of any particular privacy rights in your
            location.
          </p>

          <h3>11. Cookies Policy and Terms of Conditions</h3>
          <p>
            The Privacy Policy is supplemented by the Cookies Policy, which is
            incorporated herein by reference. The Services and use of Services
            is governed by the Terms &amp; Conditions, which you must review and
            approve prior to using the Services.
          </p>

          <h3>12. Updates</h3>
          <p>
            We may update this Privacy Policy, and the Cookies Policy and Terms
            &amp; Conditions periodically. Updates will be posted with a revised
            “Effective Date.” We encourage you to periodically check back and
            review this Privacy Policy so that you always know our current
            privacy practices.
          </p>

          <h3>13. Contact</h3>
          <p>
            You may have the right to request access to the personal information
            we collect from you, change that information, or delete it in some
            circumstances. To request to review, update, or delete your personal
            information or privacy-related questions or requests, contact us at:
          </p>
          <p>
            <strong>Palms &amp; Paws Veterinary Center, Inc.</strong>
            <br />
            1762 14th Street, Santa Monica, CA 90404
            <br />
            Email:{' '}
            <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>
          </p>
        </SectionInner>
      </Section>
    </Layout>
  );
}
