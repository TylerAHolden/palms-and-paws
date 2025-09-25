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

const title = 'Terms & Conditions';
const subtitle =
  'Please read these terms and conditions carefully before using Our Service.';

export default function TermsAndConditionsPage() {
  return (
    <Layout title={title} description={`${title} - ${subtitle}`}>
      <Section>
        <SectionInner>
          <h1>Terms &amp; Conditions</h1>
          <p>
            <strong>Effective Date:</strong> September 24, 2025
          </p>
          <p>
            Welcome to Palmspawsvet.com (the “Website”), operated by Palms &amp;
            Paws Veterinary Center, LLC (“Company,” “we,” “our,” or “us”). These
            Terms and Conditions (“Terms”) govern your use of our services,
            websites, platforms, social media, applications, mobile
            applications, PLUS subscription membership and all other business
            and services provided by the Company (collectively “Services”). By
            accessing or using the Services, you agree to be bound by these
            Terms.
          </p>
          <p>
            <strong>
              PLEASE READ THESE TERMS OF USE TERMS CAREFULLY BEFORE USING OUR
              SERVICES, AS THEY AFFECT YOUR LEGAL RIGHTS AND OBLIGATIONS,
              INCLUDING, BUT NOT LIMITED TO, WAIVERS OF RIGHTS, LIMITATION OF
              LIABILITY, AND YOUR INDEMNITY TO US. THIS AGREEMENT REQUIRES THE
              USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES,
              RATHER THAN COURTS OR JURY TRIALS, AND LIMITS THE REMEDIES
              AVAILABLE IN THE EVENT OF A DISPUTE.
            </strong>
          </p>
          <h3>1. ABOUT THESE TERMS.</h3>
          <p>
            These Terms describe the terms and conditions that govern your use
            of our current and future Services. You accept and agree to be bound
            by these Terms when you use any of our Services, without limitation,
            and when you view or access content or videos on any of our
            Services. The Services are designed for adults and are intended
            solely and exclusively for individuals who are at least 18 years of
            age or older. In order to use and access the features and services
            provided by the Services you must be 18 years of age or older (or
            whatever the applicable age of majority (legal adulthood) is where
            you are located). If you are not an adult, please stop and
            discontinue your use of the Services.
          </p>
          <p>
            <strong>Governing Terms.</strong> These Terms, along with any
            additional terms and conditions that are referenced herein or that
            are presented elsewhere in relation to a specific service or
            feature, set forth the terms and conditions that apply to your use
            of our Services. By using our Services, you agree to comply with all
            of the terms and conditions hereof. If you do not agree to these
            Terms, do not access or use our Services.
          </p>
          <p>
            <strong>Changes to Terms.</strong> The Company may modify the Terms,
            or any part thereof, or add or remove terms at any time, and such
            modifications, additions or deletions will be effective immediately
            upon posting. Your use of the Services after such posting shall be
            deemed to constitute acceptance by you of such modifications,
            additions or deletions. Please also note the Company’s Privacy
            Policy and Cookies Policy and any updates thereto.
          </p>
          <p>
            <strong>Changes to Services.</strong> The Company may regularly
            update or make changes to or discontinue any aspect, service or
            feature of the Services at any time, including, but not limited to,
            the structure, design, or layout of the Services, content, hours of
            availability, equipment, compatible devices and software needed for
            access or use.
          </p>
          <p>
            <strong>Registration.</strong> You may be given the opportunity to
            input your information as part of our services in order to
            participate in certain features of our Services. The Company will
            use the information you provide in accordance with the Company’s
            Privacy Policy. As to any information you provide, you represent and
            warrant that all information is current, complete and accurate to
            the best of your knowledge. You agree to maintain and promptly
            update your information so that it remains current, complete and
            accurate. During the inputting of your information, you may be
            required to choose a password and/or username. You acknowledge and
            agree that the Company may rely on this password or username to
            identify you. You are solely responsible for protecting the
            confidentiality of your usernames or passwords, if any. In addition,
            you are responsible for all use of our Services, regardless of
            whether you authorized such access or use, and for ensuring that all
            use of our Services complies fully with the provisions of these
            Terms.
          </p>
          <p>
            <strong>System and Compatibility Requirements.</strong> To use our
            Services, you will need to use a computer, mobile device, streaming
            media player or other device that meets our Services’ system and
            compatibility requirements (which we may update from time to time).
            In addition, features and functionalities that we make available
            through the Services may differ by device. Please check the
            requirements periodically, as we may change or cease support of any
            hardware or software platforms at any time. You are responsible for
            obtaining and maintaining all connectivity, computer software,
            hardware and other equipment needed for access to and use our
            Services and all charges related to the same.
          </p>
          <h3>2. USER CONTENT AND CONDUCT; COMMUNITY GUIDELINES.</h3>
          <p>
            The following terms apply to content submitted by users, and user
            conduct, on the Services Involving User Content:
          </p>
          <p>
            <strong>Services Involving User Content.</strong> The Services may
            contain comments sections, discussion forums, or other interactive
            features, and the ability of users to upload and share content
            (“Services Involving User Content”) in which you may post or upload
            user-generated content, comments, video, photos, messages, other
            materials or items (collectively, “User Content”). You are solely
            responsible for your use of any Services Involving User Content and
            you use them at your own risk. By submitting User Content, you
            represent that you are at least eighteen years old.
          </p>
          <p>
            <strong>Community Guidelines</strong> By submitting any User Content
            or using Services Involving User Content, you agree to abide by the
            following rules of conduct:
          </p>
          <ul>
            <li>
              You agree not to upload, post or otherwise transmit any User
              Content that:
              <ul>
                <li>
                  violates or infringes in any way upon the rights of others,
                  including any statements which may defame, harass, stalk or
                  threaten others;
                </li>
                <li>you know to be false, misleading or inaccurate;</li>
                <li>
                  contains expressions of bigotry, racism, racially or
                  ethnically offensive content, hate speech, abusiveness,
                  vulgarity or profanity;
                </li>
                <li>
                  contains or advocates pornography or sexually explicit
                  content, pedophilia, incest, bestiality, or that is otherwise
                  obscene or lewd;
                </li>
                <li>
                  violates any law or advocates or provides instruction on
                  dangerous, illegal, or predatory acts, or discusses illegal
                  activities with the intent to commit them;
                </li>
                <li>advocates violent behavior;</li>
                <li>poses a reasonable threat to personal or public safety;</li>
                <li>
                  contains violent images of physical or animal abuse that
                  appear to have been captured solely, or principally, for
                  exploitive, prurient, or gratuitous purposes;
                </li>
                <li>
                  is protected by copyright, trademark, trade secret, right of
                  publicity or other proprietary right without the express
                  permission of the owner of such copyright, trademark, trade
                  secret, right of publicity or other proprietary right. The
                  burden of determining that any User Content is not protected
                  by copyright, trademark, trade secret, right of publicity or
                  other proprietary right rests with the person who originally
                  submitted the User Content and that person shall be solely
                  liable for any damage resulting from any infringement of
                  copyrights, trademarks, trade secrets, rights of publicity or
                  other proprietary rights or any other harm resulting from such
                  a submission;
                </li>
                <li>
                  does not generally pertain to the designated topic or theme of
                  Services Involving User Content; and
                </li>
                <li>
                  contains any unsolicited or unauthorized advertising or
                  promotional materials with respect to products or services,
                  “junk mail,” “spam,” “chain letters,” “pyramid schemes,” or
                  any other form of solicitation.
                </li>
              </ul>
            </li>
            <li>
              You agree not to engage in activity that would constitute a
              criminal offense or give rise to civil liability.
            </li>
            <li>
              You consent and represent that, if necessary, you have the consent
              of each and every identifiable natural person in any submission,
              to use such person’s name or likeness, as part of the User Content
              and for use in the Services, and to the extent any images of you
              are used on the Website or as part of the Services in which you
              are pictured (such as employee photographs) you consent to the
              Company’s use of the images on the Website and as part of the
              Services.
            </li>
            <li>
              You agree that any person who appears in your submission who is a
              current member of the Screen Actors Guild (SAG), the American
              Federation of Television and Radio Actors (AFTRA) or any other
              rights society is not entitled to compensation by your submission
              of User Content or for use in the Services.
            </li>
            <li>
              You agree not to impersonate any person or entity or falsely state
              or otherwise misrepresent your affiliation with any person or
              entity.
            </li>
            <li>
              Any views represented in your comments are your own, and you agree
              not to accept any compensation, services, or anything of value in
              exchange for posting User Content; or to post comments on behalf
              of other persons, government organizations, companies, special
              interest groups, marketing agencies, or other interests.
            </li>
            <li>
              You agree not to represent or suggest, directly or indirectly, the
              Company’s endorsement of User Content.
            </li>
            <li>
              You agree not to interfere with any other user’s right to privacy,
              including by harvesting or collecting personally-identifiable
              information from our Services or posting private information about
              a third party.
            </li>
            <li>
              You agree not to upload, post or otherwise transmit any User
              Content, software or other materials which contain a virus or
              other harmful or disruptive component.
            </li>
            <li>
              You agree not to interfere with or disrupt the Services or the
              servers or networks connected to the Services, or disobey any
              requirements, procedures, policies or regulations of networks
              connected to the Services.
            </li>
            <li>
              You agree not to reproduce, duplicate, copy, sell, resell or
              exploit for any commercial purpose, any portion of the Services.
            </li>
            <li>
              You agree not to use any service, technology or automated system
              to artificially inflate the page views that your User Content
              receives. This includes pay-per-click services, web “robots” and
              any other current or future technologies including Artificial
              Intelligence. You also agree not to direct any third party to use
              these services, technologies or automated systems on your behalf.
            </li>
          </ul>
          <p>
            Any conduct that in the Company’s sole discretion restricts or
            inhibits anyone else from using or enjoying the Services will not be
            permitted. Any person, that is the Company’s sole discretion, has
            violated the rights of others shall be barred from submitting or
            posting any further material. The Company reserves the right in its
            sole discretion to remove or edit User Content and to terminate your
            use of Services for violation of these Terms or in the Company’s
            sole discretion, if your use of Services has negatively impacted the
            Services in any way.
          </p>
          <p>
            The Company does not vouch for the accuracy or credibility of any
            User Content and does not take any responsibility or assume any
            liability for any actions you may take as a result of reading or
            using User Content. Through your use of Services Involving User
            Content, you may be exposed to content that you may find offensive,
            objectionable, harmful, inaccurate or deceptive. There may also be
            risks of dealing with underage persons, people acting under false
            pretenses, or other misleading, objectionable or illegal activities.
            By using Services Involving User Content, you assume all associated
            risks.
          </p>
          <p>
            <strong>Monitoring</strong> The Company shall have the right, but
            not the obligation, to monitor User Content posted or uploaded to
            determine compliance with these Terms and any operating rules
            established by the Company and to satisfy any law, regulation or
            authorized government request. Although the Company has no
            obligation to monitor, screen, edit or remove any of the User
            Content, the Company reserves the right, and has absolute
            discretion, to screen, edit, refuse to post or remove without notice
            any User Content posted or uploaded at any time and for any reason,
            and you are solely responsible for creating backup copies of and
            replacing any User Content at your sole cost and expense. In
            addition, the Company may share personally identifiable information
            in response to a law enforcement agency’s request, or where the
            Company believes it necessary or appropriate, or as otherwise
            required or permitted by law.
          </p>
          <p>
            The Company shall have no responsibility or liability in any manner
            in connection with or arising from use by you of Services or User
            Content. While the Company may elect to monitor and modify User
            Content, this does not constitute, nor shall it be deemed to
            constitute, any responsibility for or liability of the Company for
            User Content.
          </p>
          <p>
            <strong>License to User Content</strong> By submitting User Content
            to the Services, you are granting the Company the royalty-free,
            perpetual, irrevocable, non-exclusive right and license, but not the
            obligation, to use, publish, reproduce, modify, adapt, edit,
            translate, create derivative works from, incorporate into other
            works, distribute, sub-license and otherwise exploit the User
            Content (in whole or in part) worldwide in any form, media or
            technology now known or hereafter developed for the full term of any
            copyright that may exist in such User Content, without payment to
            you or to any third parties. You represent and warrant to the
            Company that you have the full legal right, power and authority to
            grant to the Company the license provided for herein, that you own
            or control the complete exhibition and other rights to the User
            Content you submitted for the purposes contemplated in this license
            and that neither the User Content nor the exercise of the rights
            granted herein shall violate these Terms, or infringe upon any
            rights, including the right of privacy or right of publicity,
            constitute a libel or slander against, or violate any common law or
            any other right of, or cause injury to, any person or entity. You
            further grant the Company the right, but not the obligation, to
            pursue at law any person or entity that violates your or the
            Company’s rights in the User Content by a breach of these Terms.
          </p>
          <p>
            <strong>Moral Rights</strong> If it is determined that you retain
            moral rights (including rights of attribution or integrity) in the
            User Content, you hereby declare that (a) you do not require that
            any personally identifying information be used in connection with
            the User Content, or any derivative works of or upgrades or updates
            thereto; (b) you have no objection to the publication, use,
            modification, deletion and exploitation of the User Content by the
            Company or its licensees, successors and assigns; (c) you forever
            waive and agree not to claim or assert any entitlement to any and
            all moral rights of an author in any of the User Content; and (d)
            you forever release the Company, and its licensees, successors and
            assigns, from any claims that you could otherwise assert against the
            Company by virtue of any such moral rights. You also permit any
            other user to access, view, store or reproduce the User Content for
            that user’s personal use.
          </p>
          <p>
            <strong>No Obligation</strong> User Content submitted by you will be
            considered non-confidential and the Company is under no obligation
            to treat such User Content as proprietary information except
            pursuant as required by law. Without limiting the foregoing, the
            Company reserves the right to use any User Content as it deems
            appropriate, including, without limitation, deleting, editing,
            modifying, rejecting, or refusing to post it. The Company under no
            obligation to edit, delete or otherwise modify User Content once it
            has been submitted and shall have no duty to attribute authorship of
            User Content, and shall not be obligated to enforce any form of
            attribution by third parties.
          </p>

          <h3>3. COPYRIGHT OWNERSHIP.</h3>
          <p>
            The Services contain copyrighted material, trademarks and other
            proprietary information, including, but not limited to, text,
            software, photos, video, graphics, music and sound, and the entire
            contents of the Services are copyrighted as a collective work under
            the United States copyright laws. The Company owns copyright in the
            selection, coordination, arrangement and enhancement of such
            content, as well as in the content original to it. You may not
            modify, publish, transmit, participate in the transfer or sale,
            create derivative works, or in any way exploit, any of the content,
            in whole or in part. You may download copyrighted material for your
            personal use only. Except as otherwise expressly permitted under
            copyright law, no copying, redistribution, retransmission,
            publication or commercial exploitation of downloaded material will
            be permitted without the express permission of the Company and the
            copyright owner. In the event of any permitted copying,
            redistribution or publication of copyrighted material, no changes in
            or deletion of author attribution, trademark legend or copyright
            notice shall be made. You acknowledge that you do not acquire any
            ownership rights by downloading copyrighted material.
          </p>

          <h3>4. THIRD PARTY CONTENT.</h3>
          <p>
            The Services may include content supplied by third parties and
            users. Any opinions, advice, statements, services, offers, or other
            information or content expressed or made available by third parties,
            including information providers and users, are those of the
            respective authors and distributors, and not of the Company. Neither
            the Company, nor any third-party providers of information guarantees
            the accuracy, completeness, or usefulness of any content, nor its
            merchantability or fitness for any particular purpose. (Refer to
            Section 7 below for the complete provisions governing limitation of
            liabilities and disclaimers of warranty.)
          </p>

          <p>
            In many instances, the content available through the Services
            represents the opinions and judgments of the respective user or
            information provider. The Company neither endorses, nor is
            responsible for, the accuracy or reliability of any opinion, advice
            or statement made on the Services by any third party. Under no
            circumstances shall the Company be responsible or liable, directly
            or indirectly, for any loss or damage caused by your use or reliance
            on information obtained through the Services. The Company is not
            responsible for any actions or inaction on your part based on the
            information that is presented on the Services. It is your
            responsibility to evaluate the accuracy, completeness or usefulness
            of any information, opinion, advice or other content available
            through the Services. Please seek the advice of professionals, as
            appropriate, regarding the evaluation of any specific information,
            opinion, advice or other content.
          </p>

          <h3>5. ADVERTISEMENTS AND PROMOTIONS.</h3>
          <p>
            The Company may run advertisements and promotions from third parties
            on the Services. Your business dealings or correspondence with, or
            participation in promotions of, advertisers other than the Company,
            and any terms, conditions, warranties or representations associated
            with such dealings, are solely between you and such third party. If
            you engage in any transaction with an advertiser featured on the
            Services including providing that advertiser with any personal
            information, you agree that we are not responsible for such
            transaction or provision of personal information and you further
            agree that the Company is not responsible or liable for any loss or
            damage of any sort incurred as the result of any such dealings.
          </p>

          <h3>6. SUBSCRIPTION TERMS.</h3>
          <p>
            These Subscription Terms set forth in this Section govern your use
            and access to subscription content (the “Subscription Content”). In
            order to access Subscription Content, you must have an account (an
            “Account”), and you must have an active subscription plan (a
            “Subscription”) with a valid payment method (a “Payment Method”).
          </p>

          <p>
            <strong>Purchasing a Subscription.</strong> You may purchase your
            Subscription either directly through us or through a third party
            (e.g., an app store or your internet, mobile or TV provider) that
            has been authorized to provide Subscriptions on behalf of the
            Company (each, a “Third Party Provider”). As used in these Terms,
            the term “Subscription Provider” refers to us and each Third Party
            Provider, individually and collectively.
          </p>

          <h4>(i) Purchasing a Subscription Directly Through Us.</h4>
          <p>
            You may purchase a Subscription directly through us. We or our
            third-party payment processor (the “Payment Service”) will process
            your Payment Method. After your original Subscription ends, it will
            automatically renew at the then-current rates unless you cancel
            before the renewal. Renewal charges will be applied to the Payment
            Method associated with Your Account. By providing us with a Payment
            Method, you expressly acknowledge and agree that we or the Payment
            Service are authorized to periodically charge the applicable
            Subscription fee together with any applicable taxes and service fees
            (collectively, the “Subscription Fee”) on a recurring basis until
            you duly cancel your Subscription. We and/or our Payment Service
            will attempt to verify the Payment Method you provide, and may do
            this by processing an authorization hold, which is a standard
            practice. If your Payment Method expires and you do not either
            update your Payment Method or duly cancel your Subscription before
            it automatically renews, you authorize us and/or our Payment Service
            to continue billing, and you will remain responsible for any
            uncollected amounts. If a valid Payment Method is not available when
            a payment becomes due, we may restrict, suspend or cancel your
            Subscription due to lack of payment.
          </p>

          <h4>
            (ii) Purchasing a Subscription through a Third Party Provider.
          </h4>
          <p>
            If you purchase a Subscription through a Third Party Provider, the
            Third Party Provider will process your Payment Method and give you
            further details on how to sign in or create your Account, which may
            require you to leave the Third Party Provider platform to confirm
            your information with us. If you have questions about payments
            through your Third Party Provider, please contact your Third Party
            Provider directly.
          </p>

          <p>
            <strong>Ongoing Subscription and Billing Cycle.</strong> By
            purchasing a Subscription with a Subscription Provider and providing
            the Subscription Provider with a Payment Method, you agree to pay
            the Subscription Provider the Subscription Fee. The Subscription Fee
            will be billed at the time you establish your Subscription and on an
            ongoing basis at the intervals specified when you complete your
            Subscription purchase unless you cancel your Subscription prior to
            your Subscription renewal. Please note that the length of your
            billing cycle will vary based upon the Subscription plan you choose
            when you subscribe. The timing of your billing may change in the
            event of a problem with your Payment Method (e.g., an expired credit
            card), in the event you change your Subscription plan or where you
            start your Subscription on a day not contained in a subsequent
            month. If you subscribe through us, you can contact us to get
            information on your next billing date. If you subscribe through a
            Third Party Provider, contact your Third Party Provider to see your
            next billing date.
          </p>

          <p>
            <strong>Subscription Price Changes.</strong> Your Subscription
            Provider may change the amount of your Subscription Fee for any
            Subscription plan at any time and will communicate price changes to
            you in accordance with applicable law. Your continuation of your
            subscription to the service after such notice has been delivered to
            you will constitute your acceptance of such price changes, unless
            you cancel your Subscription in accordance with these Subscription
            Terms.
          </p>

          <p>
            <strong>No Refunds.</strong> UNLESS REQUIRED BY APPLICABLE LAW,
            SUBSCRIPTION FEES ARE NON-REFUNDABLE. WE DO NOT PROVIDE REFUNDS,
            CREDIT, OR PRORATED BILLING FOR CANCELLED SUBSCRIPTIONS. Even if you
            cancel your Subscription before the end of your current billing
            period, as applicable, you will not receive a refund for any portion
            of the Subscription Fees for the remainder of that billing period.
            If you cancel, you will continue to have access to the Subscription
            Content until the end of the then-current billing period. In the
            event a Subscription Provider elects to offer a refund, discount or
            other consideration as a discretionary accommodation, the
            Subscription Provider’s election shall not obligate it to make such
            an offer in any other instance
          </p>

          <p>
            <strong>Your Right to Cancel.</strong> YOU CAN CANCEL YOUR
            SUBSCRIPTION AT ANY TIME AND YOU WILL CONTINUE TO HAVE ACCESS TO THE
            SUBSCRIPTION CONTENT THROUGH THE END OF THE THEN-CURRENT BILLING
            PERIOD (i.e. THE SUBSCRIPTION PERIOD THAT YOU HAVE ALREADY PAID
            FOR). YOU MUST CANCEL YOUR SUBSCRIPTION BEFORE IT RENEWS IN ORDER TO
            AVOID BEING CHARGED FOR THE NEXT CYCLE’S SUBSCRIPTION FEE. IF YOU
            PURCHASED YOUR SUBSCRIPTION THROUGH A THIRD PARTY PROVIDER, YOU WILL
            NEED TO CANCEL YOUR SUBSCRIPTION DIRECTLY WITH THAT THIRD PARTY
            PROVIDER. You acknowledge and agree that, to the extent not
            prohibited by applicable law, cancellation of your Subscription is
            your sole recourse if you have any dissatisfaction, issue or concern
            related to your Subscription, including the Subscription Content,
            Subscription Fees, applicable taxes, or billing methods; the Terms
            or any changes thereto; or any other policies or practices that
            apply to the Subscription.
          </p>

          <p>
            <strong>Changing Your Account Information.</strong> Should you wish
            to change the information associated with your Account, you may do
            so as provided in the Services. If you created an account with a
            Third Party Provider in order to access the Subscription Content,
            you can manage your account information directly with that Third
            Party Provider.
          </p>

          <p>
            <strong>Multiple Billing Options and Plan Switching.</strong> You
            may be offered multiple Subscription plans to access Subscription
            Content. The pricing and offers for Subscriptions may vary by
            Subscription Provider and may change over time without notice
            (except as may be required by applicable law). Each Subscription
            plan may offer different Subscription Content availability,
            functionality, features, device compatibility or have certain
            conditions or limitations, which will be disclosed during your
            sign-up or in other materials available on the Services. Subject to
            availability with your Subscription Provider, you may be able to
            change your Subscription from one plan to another. Additional terms
            applicable to the switching of a Subscription plan (such as the
            applicable charges and changes to billing dates) will be provided by
            your Subscription Provider.
          </p>

          <p>
            <strong>Updating Your Payment Method.</strong> Each Subscription
            Provider may utilize a Payment Service to process your Payment
            Method. Depending on the Payment Method, the issuer may charge you
            certain taxes and fees, such as fees per transaction or other fees
            related to the processing or attempting to process of your Payment
            Method. You will be solely responsible for any such taxes and
            charges that may apply. If you purchased your Subscription directly
            through us, you may update your Payment Method. If your Subscription
            is with a Third Party Provider, you may be able to update your
            Payment Method by accessing your account with that Third Party
            Provider. A change in your Payment Method may result in changes to
            your prior billing cycle. It is your responsibility to update and
            maintain the Payment Method associated with your Subscription.
          </p>

          <p>
            <strong>Unpaid Amounts.</strong> You are responsible for all charges
            incurred in connection with your Subscription. In the event your
            Payment Method on file with us fails to cover the Subscription Fee,
            we may suspend your access to the Subscription Content until you
            update your Payment Method and pay your Subscription Fee. You may
            also lose the benefit of any Promotional Offer (as defined below).
            If your subscription is with a Third Party Provider, and you have
            unpaid amounts, your Third Party Provider may take action based on
            the terms of your Subscription with that Third Party Provider. Your
            Subscription Provider may retry or permit the Payment Service to
            retry billing your Payment Method after failed attempts (e.g., if
            your Payment Method is rejected). Your Subscription Provider also
            may pursue or permit the Payment Service or another third party to
            pursue any amounts you fail to pay in connection with your
            Subscription. Except as specified in Section 13, you will remain
            liable for all costs and expenses charged in connection with such
            billing activity, such as bank overdraft and processing fees.
          </p>

          <p>
            <strong>Free Trials and Promotional Offers.</strong> From time to
            time, Subscription Providers may make certain Subscription plans on
            the Services available on a free trial basis (each, a “Trial
            Subscription”) for a limited time (“Free Trial Period”). Trial
            Subscriptions are limited to certain subscribers, unless otherwise
            specified, and the offering of a Trial Subscription to certain
            subscribers does not give the right to any other subscribers to a
            Trial Subscription.
          </p>

          <p>
            At the time of signing up for a Trial Subscription, you must provide
            a valid Payment Method in order to access the Subscription Content
            during the Free Trial Period. Your Payment Method will not be
            charged during the Free Trial Period.
          </p>

          <p>
            You agree not to register multiple times for the same Trial
            Subscription using multiple names, addresses, email addresses or
            other means. Any such action shall constitute a violation of these
            Terms and may result in the termination of your Subscription.
          </p>

          <p>
            UNLESS YOU TIMELY CANCEL YOUR TRIAL SUBSCRIPTION BEFORE THE END OF
            YOUR FREE TRIAL PERIOD, YOUR TRIAL SUBSCRIPTION WILL CONVERT TO A
            PAID SUBSCRIPTION AT THE END OF YOUR FREE TRIAL PERIOD, THE
            APPLICABLE SUBSCRIPTION FEE WILL BE CHARGED TO YOUR PAYMENT METHOD,
            AND YOUR SUBSCRIPTION WILL AUTOMATICALLY RENEW ON A RECURRING BASIS
            AT THE THEN-CURRENT RATE UNLESS AND UNTIL YOU DULY CANCEL. You will
            not be notified that your Free Trial Period is about to end unless
            such notice is required by applicable law. In addition, from time to
            time, Subscription Providers may make certain Subscription plans
            available to you on a discounted basis or in conjunction with a
            promotion (each, a “Promotional Offer”). The period of time when the
            discounted or promotional pricing is in effect is referred to as the
            “Promotional Period”. You must provide a valid Payment Method in
            order to access the Subscription Content during the Promotional
            Period. Promotional Offers may take a variety of forms and may be
            available on a standalone basis or provided as part of a bundle with
            other products or services. Unless expressly stated otherwise,
            Promotional Offers cannot be combined.
          </p>

          <p>
            In the event of a new/subsequent Promotional Offer after you sign-up
            for a Subscription, no refunds, adjustments or price protection will
            be applied to your Subscription Fee. Customers may take advantage of
            any “new customer” promotion only once, unless expressly stated
            otherwise.
          </p>

          <p>
            You agree not to register multiple times for the same Promotional
            Offer using multiple names, addresses, email addresses or other
            means. Any such action shall constitute a violation of these Terms
            and may result in the termination of your Subscription.
          </p>

          <p>
            Each Subscription Provider will determine the terms of the
            Promotional Offer, including eligibility, in its sole discretion,
            and reserves the right to limit the availability of, end or revoke a
            Promotional Offer in accordance with the terms of the published
            Promotional Offer terms. Requirements to qualify for a Promotional
            Offer may be stated when the Promotional Offer is presented.
          </p>

          <p>
            UNLESS YOU TIMELY CANCEL YOUR SUBSCRIPTION BEFORE THE END OF YOUR
            PROMOTIONAL PERIOD, YOUR SUBSCRIPTION WILL CONVERT TO A FULL-PRICE
            SUBSCRIPTION AT THE END OF YOUR PROMOTIONAL PERIOD, THE APPLICABLE
            SUBSCRIPTION FEE WILL BE CHARGED TO YOUR PAYMENT METHOD, AND YOUR
            SUBSCRIPTION WILL AUTOMATICALLY RENEW ON A RECURRING BASIS AT THE
            THEN-CURRENT RATE UNLESS AND UNTIL YOU DULY CANCEL. You will not be
            notified that your Promotional Period is about to end unless such
            notice is required by applicable law.
          </p>

          <p>
            <strong>Customer Service.</strong> For Customer Service inquiries
            related to your Subscription (including Subscription Fee and Payment
            Method), purchased directly through us, please contact us through
            the Website or at{' '}
            <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>.
            <br />
            For Customer Support matters related to your Subscription billed
            through a Third Party Provider (including Subscription Fee and
            Payment Method) or other matters relating to billing through your
            Third Party Provider, please contact your Third Party Provider
            directly.
            <br />
            If you have reason to believe that Your Account credentials have
            been compromised or misappropriated in some way, you are encouraged
            to contact us immediately at:
            <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>.
          </p>

          <p>
            <strong>Suspension and Termination.</strong> Any Subscription
            Provider may suspend or terminate your Subscription immediately for
            any reason or for no reason whatsoever, including if it is
            reasonably determined that you have provided inaccurate account or
            payment details or you are otherwise in violation of these Terms. In
            addition to the foregoing, Subscription Providers can modify access
            or disable features of the Subscription Content where it is
            concluded in their respective discretion that there has been misuse
            of your Account. If a suspension or termination occurs, you must
            stop accessing the Subscription Content. If a Subscription Provider
            suspends or terminates your Subscription and/or access to all or any
            part of the Services, you agree not to create another Account or try
            to access the Subscription Content without permission and such
            Subscription Providers reserves the right to block any such
            attempted access to the Subscription Content.
          </p>

          <h3>
            7. DISCLAIMER OF WARRANTY; LIMITATION OF LIABILITY AND TIME
            LIMITATION FOR CLAIMS.
          </h3>
          <p>
            <strong>(A)</strong> YOU EXPRESSLY AGREE THAT USE OF THE SERVICES IS
            AT YOUR SOLE RISK. NEITHER THE COMPANY, ITS PRESENT OR FUTURE PARENT
            COMPANIES, SUBSIDIARIES, SUCCESSORS-IN-INTEREST AFFILIATED ENTITIES,
            MANAGEMENT ENTITIES, AND ENTITIES USING OR FEATURED ON THE SERVICES,
            INCLUDING BUT NOT LIMITED TO, PALMS &amp; PAWS MEDIA, LLC, PALMS
            &amp; PAWS MEDIA MANAGEMENT, LLC, PALMS &amp; PAWS VENTURES, LLC,
            PALMS &amp; PAWS VENTURES MANAGEMENT, LLC, PALMS &amp; PAWS
            FOUNDATION, INC. PALMS &amp; PAWS, INC., PALMS &amp; PAWS, LLC,
            PALMS &amp; PAWS MANAGEMENT, LLC, AND PALMS &amp; PAWS AFFILIATED
            REAL ESTATE AND LEADERSHIP ENTTITES (COLLECTIVELY, THE “COMPANIES”),
            NOR ANY OF THEIR RESPECTIVE OFFICERS, MANAGERS, DIRECTORS,
            EMPLOYEES, AGENTS, THIRD PARTY CONTENT PROVIDERS OR LICENSORS
            WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR FREE; NOR
            DO THEY MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED
            FROM USE OF THE SERVICES, OR AS TO THE ACCURACY, RELIABILITY OR
            CONTENT OF ANY INFORMATION, SERVICE, OR MERCHANDISE PROVIDED THROUGH
            THE SERVICES.
          </p>

          <p>
            <strong>(B)</strong> THE SERVICES, INCLUDING, WITHOUT LIMITATION,
            ANY DOWNLOADABLE INFORMATION, IS PROVIDED ON AN “AS IS” BASIS
            WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
            INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE OR IMPLIED
            WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE,
            OTHER THAN THOSE WARRANTIES WHICH ARE IMPLIED BY AND INCAPABLE OF
            EXCLUSION, RESTRICTION OR MODIFICATION UNDER THE LAWS APPLICABLE TO
            THESE TERMS.
          </p>

          <p>
            <strong>(C)</strong> THE SERVICES MAY OFFER HEALTH, FITNESS,
            NUTRITIONAL AND OTHER SUCH INFORMATION, BUT SUCH INFORMATION IS
            DESIGNED FOR EDUCATIONAL AND INFORMATIONAL PURPOSES ONLY. THE
            INFORMATION CONTAINED ON THE SERVICES DOES NOT AND IS NOT INTENDED
            TO CONVEY VETERINARY OR MEDICAL ADVICE AND DOES NOT CONSTITUTE THE
            PRACTICE OF VETERINARY MEDICINE OR HEALTH CARE. YOU SHOULD NOT RELY
            ON THIS INFORMATION AS A SUBSTITUTE FOR, NOR DOES IT REPLACE,
            PROFESSIONAL VETERINARY OR MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT.
            THE COMPANY IS NOT RESPONSIBLE FOR ANY ACTIONS OR INACTION ON A
            USER’S PART BASED ON THE INFORMATION THAT IS PRESENTED IN THE
            SERVICES.
          </p>

          <p>
            <strong>(D)</strong> TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE
            LAW, IN NO EVENT SHALL THE COMPANIES BE LIABLE TO YOU FOR (i) ANY
            PERSONAL INJURY, PROPERTY DAMAGE, LOST PROFITS, COST OF SUBSTITUTE
            GOODS OR SERVICES, LOSS OF DATA, LOSS OF GOODWILL, WORK STOPPAGE,
            COMPUTER AND/OR DEVICE OR TECHNOLOGY FAILURE OR MALFUNCTION, (ii)
            ANY FORM OF INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY
            OR PUNITIVE DAMAGES, OR (iii) ANY DIRECT DAMAGES IN EXCESS OF (IN
            THE AGGREGATE) OF ONE HUNDRED DOLLARS ($100). BASED ON ANY CAUSES OF
            ACTION ARISING OUT OF USE OF THE SERVICES OR ANY ALLEGED FAILURE OF
            PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DELETION, DEFECT, OR
            DELAY IN SERVICE, OPERATION, OR TRANSMISSION OF THE SERVICES, OR ANY
            ALLEGED COMPUTER VIRUS, COMMUNICATION LINE FAILURE, THEFT OR
            DESTRUCTION OF PROPERTY, AND/OR UNAUTHORIZED ACCESS TO, ALTERATION
            OF, OR USE OF OR POSTING OF ANY RECORD, CONTENT, OR TECHNOLOGY,
            PERTAINING TO OR ON THE SERVICES. YOU AGREE THAT THIS LIMITATION OF
            LIABILITY APPLIES WHEHER SUCH ALLEGATIONS ARE FOR BREACH OF
            CONTRACT, TORTIOUS BEHAVIOR, NEGLIGENCE, OR FALL UNDER ANY OTHER
            CAUSE OF ACTION, REGARDLESS OF THE BASIS UPON WHICH LIABILITY IS
            CLAIMED AND EVEN IF THE COMPANIES HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH LOSS OR DAMAGE. WITHOUT LIMITING THE GENERALITY
            OF THE FORGEOING, YOU ALSO SPECIFICALLY ACKNOWLEDGE THAT THE
            COMPANIES ARE NOT LIABLE FOR ANY ACTUAL OR ALLEGED DEFAMATORY,
            OFFENSIVE, OR ILLEGAL CONDUCT OF OTHER USERS OF THE SERVICES OR ANY
            OTHER THIRD PARTIES.
            <br />
            IF APPLICABLE LAW DOES NOT ALLOW ALL OR ANY PART OF THE ABOVE
            LIMITATION OF LIABILITY TO APPLY TO YOU, THE LIMITATIONS WILL APPLY
            TO YOU ONLY TO THE EXTENT PERMITTED BY APPLICABLE LAW. THIS
            LIMITATION OF LIABILITY PROVISION APPLIES TO NEW JERSEY RESIDENTS.
          </p>

          <p>
            <strong>(E)</strong> THE COMPANIES DISCLAIM ANY AND ALL LIABILITY OF
            ANY KIND FOR ANY UNAUTHORIZED ACCESS TO OR USE OF YOUR PERSONALLY
            IDENTIFIABLE INFORMATION. BY ACCESSING THE SERVICES, YOU ACKNOWLEDGE
            AND AGREE TO THE COMPANY’S DISCLAIMER OF ANY SUCH LIABILITY. IF YOU
            DO NOT AGREE, DO NOT ACCESS OR USE THE SERVICES.
          </p>

          <p>
            <strong>(F)</strong> YOU AND YOUR SUCESSORS AND AGENTS HEREIN
            EXPRESSLY AND KNOWINGLY FULLY RELEASE AND WAIVE ALL CLAIMS, OF ANY
            KIND, WHETHER KNOWN OR UNKNOWN, FORESEEN OR UNFORESSEN ACCRUED OR
            THAT MAY HEREAFTER ACCRUE, WHICH ARISE OUT OF OR RELATE TO THE
            SERVICES OR YOUR USE OF SERVICES, INCLUDING BUT NOT LIMITED TO ANY
            AND ALL RIGHTS AND BENEFITS WHICH YOU NOW OR IN THE FUTURE MAY HAVE
            UNDER CALIFORNIA CIVIL CODE SECTION 1542, OR ANY OTHER SIMILAR LEGAL
            STATUTES OR LEGAL PROTECTION. CALIFORNIA CIVAL CODE SECTION 1542
            STATES:
            <br />
            “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS THAT THE CREDITOR OR
            RELEASING PARTY DOES NOT KNOW OR SUPECT TO EXIST IN HIS OR HER FAVOR
            AT THE TIME OF EXECUTING THE RELEASE AND THAT, IF KNOWN BY HIM OR
            HER, WOULD HAVE MARERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE
            DEBTOR OR RELEASED PARTY.”
          </p>

          <p>
            <strong>(G)</strong> SUBJECT TO SECTION 13, TO THE EXTENT PERMITTED
            BY APPLICABLE LAW, ANY DISPUTE, CLAIM OR CONTROVERSY ARISING OUT OF
            OR RELATING IN ANY WAY TO THE SERVICE OR YOUR USE OF THE SERVICES,
            THESE TERMS, OR THE RELATIONSHIP BETWEEN US, MUST BE COMMENCED
            WITHIN ONE YEAR OF THE RELEVANT EVENTS. A DISPUTE IS COMMENCED IF IT
            IS FILED IN AN ARBITRATION OR, IF THE DISPUTE IS NON-ARBITRABLE, A
            COURT WITH JURISDICTION, DURING THE ONE-YEAR PERIOD. IF YOU OR WE
            PROVIDE NOTICE OF A DISPUTE UNDER SECTION 13, THE ONE-YEAR PERIOD IS
            TOLLED FOR 60 DAYS FOLLOWING RECEIPT OF THE NOTICE OF DISPUTE. YOU
            AND WE EACH EXPRESSLY WAIVE THE RIGHT TO PURSUE ANY DISPUTE, CLAIM
            OR CONTROVERSY THAT IS NOT FILED WITHIN ONE YEAR AND ANY RIGHT YOU
            OR WE MAY HAVE HAD TO PURSUE THAT DISPUTE, CLAIM OR CONTROVERSY IN
            ANY FORUM IS PERMANENTLY BARRED.
          </p>

          <h3>8. INDEMNIFICATION.</h3>
          <p>
            <strong>
              YOU AGREE TO DEFEND, INDEMNIFY AND HOLD HARMLESS THE COMPANIES,
              THEIR AFFILIATES AND THEIR RESPECTIVE DIRECTORS, OFFICERS,
              EMPLOYEES AND AGENTS FROM AND AGAINST ALL CLAIMS AND EXPENSES,
              INCLUDING ATTORNEYS’ FEES, ARISING OUT OF THE USE OF THE SERVICES
              BY YOU OR YOUR ACCOUNT.
            </strong>{' '}
            THE COMPANIES RESERVE THE RIGHT TO TAKE OVER THE EXCLUSIVE DEFENSE
            OF ANY CLAIM FOR WHICH WE ARE ENTITLED TO INDEMNIFICATION UNDER THIS
            SECTION. IN SUCH EVENT, YOU SHALL PROVIDE THE COMPANY WITH SUCH
            COOPERATION AS IS REASONABLY REQUESTED BY THE COMPANY.
          </p>

          <h3>9. TERMINATION.</h3>
          <p>
            The Company may terminate or suspend these Terms at any time without
            notice to you. Without limiting the foregoing, the Company shall
            have the right to immediately terminate your Account in the event of
            any conduct by you which the Company, in its sole discretion,
            considers to be unacceptable, or in the event of any breach by you
            of these Terms. The provisions contained herein shall survive
            termination of these Terms.
          </p>

          <h3>10. TRADEMARKS.</h3>
          <p>
            The Company, its parent, subsidiaries and affiliates, own all rights
            to their logos and trademarks used in connection with the Services
            related to the Company. All other logos and trademarks appearing on
            the Services are the property of their respective owners.
          </p>

          <h3>11. GOVERNING LAW AND VENUE.</h3>
          <p>
            The content, data, video, and all other material and features on the
            Services are presented for the purpose of providing entertainment,
            news and/or information and/or promoting programs, films, music,
            games, and other products and/or services that are or may become
            available.
          </p>
          <p>
            Any and all disputes, claims and controversies arising out of or in
            connection with your access to, and/or use of the Services, and/or
            the provision of content, services, and/or technology on or through
            the Services shall be governed by and construed exclusively in
            accordance with the laws and decisions of the State of California
            applicable to contracts made, entered into and performed entirely
            therein, without giving effect to its conflict of laws provisions,
            except to the extent that law is inconsistent with or preempted by
            federal law. Any dispute that is not subject to arbitration under
            Section 13 (Dispute Resolution) of this Agreement, or any issues
            involving arbitrability or enforcement of provisions under Section
            13, shall be brought in the appropriate state or federal court
            located in Los Angeles County, California; and we both irrevocably
            consent to the exclusive jurisdiction and venue of the state or
            federal courts in Los Angeles County, California for the
            adjudication of all non-arbitral claims.
          </p>

          <h3>12. SEVERABILITY.</h3>
          <p>
            Except as specified in Section 13 (Dispute Resolution), if any
            provision of this Agreement shall be unlawful, void, or for any
            reason unenforceable, then that provision shall be deemed severable
            for this Agreement and shall not affect the validity and
            enforceability of any remaining provisions. This is the entire
            agreement between the parties relating to the matters contained
            herein.
          </p>

          <h3>13. DISPUTE RESOLUTION.</h3>
          <p>
            We endeavor to resolve customer concerns as quickly as possible.
            Please contact the Company at:{' '}
            <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>.
          </p>
          <p>
            In the event that you’re not satisfied with customer service’s
            solution, and you and the Company are unable to resolve a dispute
            through the Informal Dispute Resolution Procedures below, we each
            agree to resolve the dispute through binding arbitration or small
            claims court instead of in courts of general jurisdiction.
          </p>
          <p>
            Arbitration is more informal than a lawsuit in court. Arbitration
            uses a neutral arbitrator instead of a judge or jury, allows for
            more limited discovery than in court, and is subject to very limited
            review by courts. Unless expressly limited by this arbitration
            provision, arbitrators can award the same damages and relief that a
            court can award. Any arbitration under this Agreement will take
            place on an individual basis; class arbitrations and class actions
            are not permitted. You expressly waive your right to participate in
            any class action against the Company.
          </p>

          <h4>ARBITRATION AGREEMENT</h4>

          <p>
            <strong>Claims Subject to Arbitration.</strong> To the fullest
            extent permitted by applicable law, the Company and you agree to
            arbitrate all disputes and claims between us, except as expressly
            prohibited by law. This Arbitration Agreement is intended to be
            broadly interpreted. It includes, but is not limited to:
          </p>
          <ul>
            <li>
              claims arising out of or relating to any aspect of the
              relationship between us, whether based in contract, tort, fraud,
              misrepresentation or any other statutory or common- law legal
              theory;
            </li>
            <li>
              claims that arose before this or any prior Agreement (including,
              but not limited to, claims relating to advertising);
            </li>
            <li>
              claims for mental or emotional distress or injury not arising out
              of physical bodily injury;
            </li>
            <li>
              claims that are currently the subject of purported class action
              litigation in which you are not a member of a certified class; and
            </li>
            <li>
              claims that may arise after the termination of this Agreement.
            </li>
          </ul>
          <p>
            References to the “Company, ” “you,” “we” and “us” in this
            Arbitration Agreement include our respective predecessors in
            interest, successors, and assigns, as well as our respective past,
            present, and future parents, subsidiaries and affiliates; those
            entities and our respective agents, employees, licensees, licensors,
            and providers of content as of the time your or our claim arises;
            and all authorized or unauthorized users or beneficiaries of
            Services under this or prior Agreements between us. Notwithstanding
            the foregoing, either party may elect to have claims heard in small
            claims court seeking only individualized relief, so long as the
            action is not removed or appealed to a court of general
            jurisdiction. This Arbitration Agreement does not preclude you from
            bringing issues to the attention of federal, state, or local
            agencies. You agree that, by entering into this Agreement, you and
            we are each waiving the right to participate in a class action and
            to a trial by jury to the fullest extent permitted by applicable
            law. This Arbitration Agreement shall survive termination of this
            Agreement.
          </p>

          <p>
            <strong>
              Mandatory Pre-Arbitration Notice and Informal Dispute Resolution
              Procedures.
            </strong>{' '}
            You and we agree that good-faith, informal efforts to resolve
            disputes often can result in a prompt, cost-effective and mutually
            beneficial outcome. Therefore, a party who intends to initiate
            arbitration or file a claim in small claims court must first send to
            the other a written Notice of Dispute (“Notice”). A Notice from you
            to the Company must be emailed to:{' '}
            <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>{' '}
            (“Notice Address”).
          </p>
          <p>
            Any Notice must include (i) the claimant’s name, address, and email
            address; (ii) a description of the nature and basis of the claim or
            dispute; (iii) if you are submitting the Notice, any relevant facts
            regarding your use of the Services, including whether you have
            created an Account and whether you have a Subscription; (iv) a
            description of the nature and basis of the specific relief sought,
            including the damages sought, if any, and a detailed calculation for
            them; and (v) a personally signed statement from the claimant (and
            not their counsel) verifying the accuracy of the contents of the
            Notice. The Notice must be individualized, meaning it can concern
            only your dispute and no other person’s dispute.
          </p>
          <p>
            After receipt of a completed Notice, the parties shall engage in a
            good faith effort to resolve the dispute for a period of 60 days
            (which can be extended by agreement). You and we agree that, after
            receipt of the completed Notice, the recipient may request an
            individualized telephone or video settlement conference (which can
            be held after the 60- day period) and both parties will personally
            attend (with counsel, if represented). You and we agree that the
            parties (and counsel, if represented) shall work cooperatively to
            schedule the conference at the earliest mutually-convenient time and
            to seek to reach a resolution. If we and you do not reach an
            agreement to resolve the issues identified in the Notice within 60
            days after the completed Notice is received (or a longer time if
            agreed to by the parties), you or we may commence an arbitration
            proceeding or a small claims court proceeding (if permitted by small
            claims court rules).
          </p>
          <p>
            Compliance with this Mandatory Pre-Arbitration Notice and Informal
            Dispute Resolution Procedures Section is a condition precedent to
            initiating arbitration. Any applicable limitations period (including
            statute of limitations) and any filing fee deadlines shall be tolled
            while the parties engage in the informal dispute resolution
            procedures set forth in this Mandatory Pre-Arbitration Notice and
            Informal Dispute Resolution Procedures Section. All of the Mandatory
            Pre-Arbitration Notice and Informal Dispute Resolution Procedures
            are essential so that you and the Company have a meaningful
            opportunity to resolve disputes informally. If any aspect of these
            requirements has not been met, you or we can enjoin the filing or
            prosecution of an arbitration. In addition, unless prohibited by
            law, the arbitration administrator or arbitrator may not accept,
            administer, assess, or demand fees in connection with an arbitration
            that has been initiated without completion of the Mandatory
            Pre-Arbitration Notice and Informal Dispute Resolution Procedures.
            If the arbitration is already pending, it shall be administratively
            closed, unless prohibited by law. Nothing in this paragraph limits
            the right of a party to seek damages for non-compliance with these
            Procedures in arbitration.
          </p>

          <p>
            <strong>Arbitration Procedure.</strong> The arbitration will be
            governed by applicable rules (“AAA Rules”) of the American
            Arbitration Association (“AAA”), as modified by this Arbitration
            Agreement, and will be administered by AAA. (If AAA is unavailable
            or unwilling to do so, another arbitration provider shall be
            selected by the parties that will do so, or if the parties are
            unable to agree on an alternative administrator, by the court. The
            AAA Rules are available online at{' '}
            <a href='http://www.adr.org' target='_blank' rel='noreferrer'>
              www.adr.org
            </a>
            . You may obtain a form to initiate arbitration at:{' '}
            <a href='http://www.adr.org' target='_blank' rel='noreferrer'>
              www.adr.org
            </a>{' '}
            or by contacting AAA.
          </p>

          <p>
            You and we agree that the party initiating arbitration must submit a
            certification that they have complied with and completed the
            Mandatory Pre-Arbitration Notice and Informal Dispute Resolution
            Procedures requirements referenced in the Mandatory Pre-Arbitration
            Notice and Informal Dispute Resolution Procedures Section and that
            they are a party to the Arbitration Agreement enclosed with or
            attached to the demand for arbitration. The demand for arbitration
            and certification must be personally signed by the party initiating
            arbitration (and their counsel, if represented).
          </p>

          <p>
            All issues are for the arbitrator to decide, except as otherwise
            expressly provided herein and except as to issues relating to the
            scope and enforceability of the Arbitration Agreement or whether a
            dispute can or must be brought in arbitration (including whether a
            dispute is subject to this Arbitration Agreement or a previous
            arbitration provision between you and the Company, to the extent
            that under applicable law are for a court of competent jurisdiction
            to decide. The arbitrator may consider but shall not be bound by
            rulings in other arbitrations involving different customers.
          </p>

          <p>
            Unless we and you agree otherwise, or the applicable law and AAA
            Rules dictate otherwise, any arbitration hearings will take place in
            Los Angeles County, California and you and the Company
            representative will be required to attend in person. At the
            conclusion of the arbitration proceeding, the arbitrator shall issue
            a reasoned written decision sufficient to explain the essential
            findings and conclusions on which the award is based. The
            arbitrator’s decision is binding only between you and the Company
            and will not have any preclusive effect in another arbitration or
            proceeding that involves a different party. An arbitrator’s award
            that has been fully satisfied shall not be entered in any court.
          </p>

          <p>
            The arbitrator is authorized to impose any sanctions under the AAA
            Rules, or applicable federal or state law, against all appropriate
            represented parties and counsel.
          </p>

          <p>
            Except as expressly provided in the Arbitration Agreement, the
            arbitrator may grant any remedy, relief, or outcome that the parties
            could have received in court, in accordance with applicable law.
            Unless otherwise required by applicable law, the parties shall bear
            their own attorneys’ fees and costs in arbitration unless the
            arbitrator award includes an attorney fee award as part of an
            indemnification award, as sanctions, or finds that either the
            substance of the claim, the defense.
          </p>

          <p>
            <strong>Attorneys’ Fees.</strong> TO THE EXTENT PERMITTED BY LAW,
            YOU AND WE WAIVE ANY AND ALL RIGHTS TO CLAIM ATTORNEYS’ FEES AS A
            PREVAILING PARTY, EXCEPT AS EXPRESSLY STATED IN THE TERMS.
          </p>

          <p>
            <strong>Arbitration Fees.</strong> The payment of arbitration fees
            (the fees imposed by the arbitration administrator including filing,
            arbitrator, and hearing fees) will be governed by the applicable AAA
            Rules, unless you qualify for a fee waiver under applicable law. If
            after exhausting any potentially available fee waivers, the
            arbitrator finds that the arbitration fees will be prohibitive for
            you as compared to litigation, we will pay as much of your filing,
            arbitrator, and hearing fees in the arbitration as the arbitrator
            deems necessary to prevent the arbitration from being
            cost-prohibitive, regardless of the outcome of the arbitration,
            unless the arbitrator determines that your claims were frivolous or
            brought for an improper purpose or asserted in bad faith. You and we
            agree that arbitration should be cost-effective for all parties and
            that any party may engage with AAA to address the reduction or
            deferral of fees.
          </p>

          <p>
            <strong>Confidentiality.</strong> Upon either party’s request, the
            arbitrator will issue an order requiring that confidential
            information of either party disclosed during the arbitration
            (whether in documents or orally) may not be used or disclosed except
            in connection with the arbitration or a proceeding to enforce the
            arbitration award.
          </p>

          <p>
            <strong>Requirement of Individualized Relief.</strong> The
            arbitrator may award declaratory or injunctive relief only in favor
            of the individual party seeking relief and only to the extent
            necessary to provide relief warranted by that party’s individual
            claim.{' '}
            <strong>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AND WE
              AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR
              OUR INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN
              ANY PURPORTED CLASS, REPRESENTATIVE, OR PRIVATE ATTORNEY GENERAL
              PROCEEDING.
            </strong>
          </p>
          <p>
            Further, unless both you and we agree otherwise, the arbitrator may
            not consolidate more than one person’s claims and may not otherwise
            preside over any form of a representative, class, or private
            attorney general proceeding. If, after exhaustion of all appeals,
            any of these prohibitions on non-individualized declaratory or
            injunctive relief; class, representative, and private attorney
            general claims; and consolidation are found to be unenforceable with
            respect to a particular claim or with respect to a particular
            request for relief (such as a request for injunctive relief sought
            with respect to a particular claim), then the parties agree such a
            claim or request for relief shall be decided by a court of competent
            jurisdiction, after all other arbitrable claims and requests for
            relief are arbitrated. You agree that any arbitrations between you
            and the Company will be subject to this Section 13 and not to any
            prior arbitration agreement you had with the Company, and,
            notwithstanding any provision in this Agreement to the contrary, you
            agree that this Section 13 amends any prior arbitration agreement
            you had with the Company, including with respect to claims that
            arose before this or any prior arbitration agreement.
          </p>

          <p>
            <strong>Severability.</strong> If any portion of this Arbitration
            Agreement is found to be void, invalid, or otherwise unenforceable,
            then that portion shall be deemed to be severable and, if possible,
            superseded by a valid, enforceable provision, or portion thereof,
            that matches the intent of the original provision, or portion
            thereof, as closely as possible. The remainder of this Arbitration
            Agreement shall continue to be enforceable and valid according to
            the terms contained herein.
          </p>

          <p>
            <strong>Opt Out of Future Changes.</strong> Notwithstanding any
            provision to the contrary, if the Company makes any future change to
            this Arbitration Agreement (other than a change to the Notice
            Address), you may reject any such change by sending the Company an
            email to{' '}
            <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>{' '}
            within 30 days of the posting of the amended arbitration agreement
            that provides: (i) your full legal name, (ii) your complete mailing
            address, (iii) your phone number, (iv) if applicable, the username
            or email address associated with any potential account or
            newsletter; and (v) the approximate date of your initial use of the
            relevant Services. Such an opt-out email must be sent by you
            personally, and not by your agent, attorney, or anyone else
            purporting to act on your behalf. It must include a statement,
            personally signed by you, that you wish to reject the change to the
            Arbitration Agreement. This is not an opt out of arbitration
            altogether.
          </p>

          <h3>14. CLASS ACTION AND JURY TRIAL WAIVER</h3>
          <p>
            YOU AND THE COMPANY AGREE THAT, TO THE FULLEST EXTENT PERMITTED BY
            LAW, EACH PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN
            INDIVIDUAL CAPACITY, AND NOT PARTICIPATE AS A PLAINTIFF, CLAIMANT,
            OR CLASS MEMBER IN ANY CLASS, COLLECTIVE, CONSOLIDATED, PRIVATE
            ATTORNEY GENERAL, OR REPRESENTATIVE PROCEEDING. THIS MEANS THAT YOU
            AND THE COMPANY MAY NOT BRING A CLAIM ON BEHALF OF A CLASS OR GROUP
            AND MAY NOT BRING A CLAIM ON BEHALF OF ANY OTHER PERSON UNLESS DOING
            SO AS A PARENT, GUARDIAN, OR WARD OF A MINOR OR IN ANOTHER SIMILAR
            CAPACITY FOR AN INDIVIDUAL WHO CANNOT OTHERWISE BRING THEIR OWN
            INDIVIDUAL CLAIM. THIS ALSO MEANS THAT YOU AND THE COMPANY MAY NOT
            PARTICIPATE IN ANY CLASS, COLLECTIVE, CONSOLIDATED, PRIVATE ATTORNEY
            GENERAL, OR REPRESENTATIVE PROCEEDING BROUGHT BY ANY THIRD PARTY.
            NOTWITHSTANDING THE FOREGOING, YOU OR THE COMPANY MAY PARTICIPATE IN
            A CLASS-WIDE SETTLEMENT.
          </p>
          <p>
            <strong>
              TO THE FULLEST EXTENT PERMITTED BY LAW, YOU AND THE COMPANY WAIVE
              ANY RIGHT TO A JURY TRIAL.
            </strong>
          </p>

          <h3>15. COPYRIGHTS AND COPYRIGHT AGENT.</h3>
          <p>
            The Company respects the rights of all copyright holders and has the
            right to terminate users and account holders who infringe the rights
            of copyright holders. If you believe that your work has been copied
            in a way that constitutes copyright infringement, please provide the
            Company the following information required by the Online Copyright
            Infringement Liability Limitation Act of the Digital Millennium
            Copyright Act, 17 U.S.C. 512:
          </p>
          <ul>
            <li>
              A physical or electronic signature of a person authorized to act
              on behalf of the owner of an exclusive right that is allegedly
              infringed;
            </li>
            <li>
              Identification of the copyright work claimed to have been
              infringed, or, if multiple copyrighted works at a single online
              site are covered by a single notification, a representative list
              of such works at that site;
            </li>
            <li>
              Identification of the material that is claimed to be infringing or
              to be the subject of infringing activity and that is to be removed
              or access to which is to be disabled, and information reasonably
              sufficient to permit us to locate the material;
            </li>
            <li>
              Information reasonably sufficient to permit us to contact the
              complaining party;
            </li>
            <li>
              A statement that the complaining party has a good-faith belief
              that use of the material in the manner complained of is not
              authorized by the copyright owner, its agent, or the law; and
            </li>
            <li>
              A statement that the information in the notification is accurate,
              and under penalty of perjury, that the complaining party is
              authorized to act on behalf of the owner of an exclusive right
              that is allegedly infringed.
            </li>
          </ul>
          <p>
            For copyright inquiries under the Digital Millennium Copyright Act
            and all other inquiries, please contact us at:{' '}
            <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>.
          </p>

          <h3>16. ACCESSABILITY.</h3>
          <p>
            If you are having difficulty viewing this website and/or the format
            of any material on this website interferes with your ability to
            access information using assistive technology (such as a Braille or
            screen reader, or TTY), please contact us at:
            <a href='mailto:hello@palmspawsvet.com'>hello@palmspawsvet.com</a>.
          </p>
          <p>
            To enable us to respond in a manner most helpful to you, please
            indicate the nature of your accessibility problem, the Web address
            (URL link) of the material to which you need access, and your full
            contact information, including email address.
          </p>

          <h3>17. MISCELLANEOUS.</h3>

          <p>
            <strong>Entire Agreement.</strong> These Terms and any operating
            rules for the Services constitute the entire agreement of the
            parties with respect to the subject matter hereof and that the
            Companies did not make any other representations to you regarding
            the Services not contained herein or in the Privacy Notice or
            Cookies Policy, and that these Terms supersede all previous written
            or oral agreements between the parties with respect to the Services.
          </p>

          <p>
            <strong>No Reliance.</strong> You represent and warrant that in
            agreeing to these Terms and using the Services, you have not relied
            upon any representation, warranty, covenant, statement, promise or
            information from us or the Companies that is not expressly contained
            in these Terms.
          </p>

          <p>
            <strong>User Compliance with Local Laws.</strong> The provisions of
            these Terms are for the benefit of the Company and Companies, and
            their parent companies, subsidiaries, other affiliates and its third
            party content providers and licensors, and each shall have the right
            to assert and enforce such provisions directly or on its own behalf.
            If you access the Services, including the Services Involving User
            Content, from any location other than the United States, you accept
            full responsibility for compliance with all local laws. You are also
            subject to United States export controls and are responsible for any
            violations of United States embargoes or other federal rules and
            regulations restricting exports.
          </p>

          <p>
            <strong>No Implied Waiver.</strong> No waiver by either party of any
            breach or default hereunder shall be deemed to be a waiver of any
            preceding or subsequent breach or default. If any part of these
            Terms is found by a court of competent jurisdiction to be invalid or
            unenforceable, it will be replaced with language reflecting the
            original purpose in a valid and enforceable manner. The enforceable
            sections of these Terms will remain binding upon the parties. The
            section headings used herein are for convenience only and shall not
            be given any legal import.
          </p>

          <p>
            <strong>Legally Binding.</strong> You represent and warrant that
            these Terms are valid and legally enforceable and govern the rights
            governing the Services and your use of the Services and that by
            using the Services you agree to be legally bound by these Terms.
          </p>

          <p>
            <strong>Severability.</strong> If any portion of these Terms are
            found to be void, invalid, or otherwise unenforceable, then that
            portion shall be deemed to be severable and, if possible, superseded
            by a valid, enforceable provisions, or portion thereof, that matches
            the intent of the original provision, or portion thereof, as closely
            as possible. The remainder of these Terms shall continue to be
            enforceable and valid according to the terms contained herein.
          </p>

          <p>
            <strong>Force Majure.</strong> Neither the Company nor you shall be
            liable for damages or for delays or failures in performance
            resulting from acts or occurrences beyond their reasonable control,
            including, without limitation: fire, lightning, explosion, power
            surge or failure, water, acts of God, war, terrorism, revolution,
            civil commotion or acts of civil or military authorities or public
            enemies: any law, order, regulation, ordinance, or requirement of
            any government or legal body or any representative of any such
            government or legal body; or labor unrest, including without
            limitation, strikes, slowdowns, picketing, or boycotts; inability to
            secure raw materials, transportation facilities, fuel or energy
            shortages, or acts or omissions of other common carriers.
          </p>

          <p>
            <strong>Survival.</strong> The provisions contained herein shall
            survive termination of these Terms.
          </p>

          <h3>18. CONTACT.</h3>
          <p>
            For questions about these Terms, please contact us at:
            <br />
            Palms &amp; Paws Veterinary Center, Inc.
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
