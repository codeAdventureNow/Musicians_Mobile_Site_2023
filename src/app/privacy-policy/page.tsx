import styles from './privacy-policy.module.css';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className='homepage'>
      <section className='section'>
        <div className='container'>
          <h2 className='section_heading'>Privacy Policy</h2>
          <div className={styles.paragraph}>
            <p>Last updated: January 01, 2024</p>
            <br />
            <p>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
            <p>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.head_Two}>Interpretation and Definitions</h2>
            <h3 className={styles.heading_Three}>Interpretation</h3>

            <p>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
            <p>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
            <h3 className={styles.heading_Three}>Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Account </span>means a unique
                account created for You to access our Service or parts of our
                Service.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Business </span>, for the purpose
                of the CCPA (California Consumer Privacy Act), refers to the
                Company as the legal entity that collects Consumers’ personal
                information and determines the purposes and means of the
                processing of Consumers’ personal information, or on behalf of
                which such information is collected and that alone, or jointly
                with others, determines the purposes and means of the processing
                of consumers’ personal information, that does business in the
                State of California.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Company </span>(referred to as
                either “the Company”, “We”, “Us” or “Our” in this Agreement)
                refers to InfiNate Productions LLC, 1276 Lincoln Avenue, Suite
                109 San Jose, CA 95125
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Consumer</span>, for the purpose
                of the CCPA (California Consumer Privacy Act), means a natural
                person who is a California resident. A resident, as defined in
                the law, includes (1) every individual who is in the USA for
                other than a temporary or transitory purpose, and (2) every
                individual who is domiciled in the USA who is outside the USA
                for a temporary or transitory purpose.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Cookies</span> are small files
                that are placed on Your computer, mobile device or any other
                device by a website, containing the details of Your browsing
                history on that website among its many uses.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Country</span>refers to:
                California, United States
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Device</span> means any device
                that can access the Service such as a computer, a cellphone, or
                a digital tablet.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Do Not Track (DNT)</span> is a
                concept that has been promoted by US regulatory authorities, in
                particular the U.S. Federal Trade Commission (FTC), for the
                Internet industry to develop and implement a mechanism for
                allowing internet users to control the tracking of their online
                activities across websites.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Personal Data</span> is any
                information that relates to an identified or identifiable
                individual. For the purposes of the CCPA, Personal Data means
                any information that identifies, relates to, describes, or is
                capable of being associated with, or could reasonably be linked,
                directly or indirectly, with You.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Sale</span>, for the purpose of
                the CCPA (California Consumer Privacy Act), means selling,
                renting, releasing, disclosing, disseminating, making available,
                transferring, or otherwise communicating orally, in writing, or
                by electronic or other means, a Consumer’s Personal information
                to another business or a third party for monetary or other
                valuable consideration.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Service</span> refers to the
                Website.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Service Provider</span> means any
                natural or legal person who processes the data on behalf of the
                Company. It refers to third-party companies or individuals
                employed by the Company to facilitate the Service, to provide
                the Service on behalf of the Company, to perform services
                related to the Service, or to assist the Company in analyzing
                how the Service is used.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>
                  Third-party Social Media Service
                </span>{' '}
                refers to any website or any social network website through
                which a User can log in or create an account to use the Service.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Usage Data</span> refers to data
                collected automatically, either generated by the use of the
                Service or from the Service infrastructure itself (for example,
                the duration of a page visit).
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Website</span> refers to Musicians
                Mobile, accessible from{' '}
                <Link target='_blank' href='https://www.musiciansmobile.com/'>
                  https://www.musiciansmobile.com/
                </Link>
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>You</span> means the individual
                accessing or using the Service, or the company, or other legal
                entity on behalf of which such individual is accessing or using
                the Service, as applicable.
              </li>
            </ul>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.heading_two}>
              Collecting and Using Your Personal Data
            </h2>
            <h3 className={styles.heading_Three}>Types of Data Collected</h3>
            <h4 className={styles.heading_Four}>Personal Data</h4>
            <p>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>
            <ul>
              <li className={styles.list_Item}>Email address</li>
              <li className={styles.list_Item}>First name and last name</li>
              <li className={styles.list_Item}>Phone number</li>
              <li className={styles.list_Item}>
                Address, State, Province, ZIP/Postal code, City
              </li>

              <li className={styles.list_Item}>
                Bank account information in order to pay for products and/or
                services within the Service
              </li>
              <li className={styles.list_Item}>Usage Data</li>
            </ul>
            <br />
            <p>
              When You pay for a product and/or a service via bank transfer, We
              may ask You to provide information to facilitate this transaction
              and to verify Your identity. Such information may include, without
              limitation:
            </p>
            <ul>
              <li className={styles.list_Item}>Date of birth</li>
              <li className={styles.list_Item}>Passport or National ID card</li>
              <li className={styles.list_Item}>Bank card statement</li>
              <li className={styles.list_Item}>
                Other information linking You to an address
              </li>
            </ul>
          </div>
          <div className={styles.paragraph}>
            <h4 className={styles.heading_Four}>Usage Data</h4>
            <p>
              {' '}
              Usage Data is collected automatically when using the Service.
            </p>
            <p>
              Usage Data may include information such as Your Device’s Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </p>
            <p>
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </p>
            <p>
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h4 className={styles.heading_Four}>
              Information from Third-Party Social Media Services
            </h4>
            <p>
              The Company allows You to create an account and log in to use the
              Service through the following Third-party Social Media Services:
            </p>
            <ul>
              <li className={styles.list_Item}>Google</li>
              <li className={styles.list_Item}>Facebook</li>
              <li className={styles.list_Item}>Twitter</li>
            </ul>
            <p>
              If You decide to register through or otherwise grant us access to
              a Third-Party Social Media Service, We may collect Personal data
              that is already associated with Your Third-Party Social Media
              Service’s account, such as Your name, Your email address, Your
              activities or Your contact list associated with that account
            </p>
            <p>
              You may also have the option of sharing additional information
              with the Company through Your Third-Party Social Media Service’s
              account. If You choose to provide such information and Personal
              Data, during registration or otherwise, You are giving the Company
              permission to use, share, and store it in a manner consistent with
              this Privacy Policy.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h4 className={styles.heading_Four}>
              Tracking Technologies and Cookies
            </h4>
            <p>
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service.
            </p>
            <p>
              You can instruct Your browser to refuse all Cookies or to indicate
              when a Cookie is being sent. However, if You do not accept
              Cookies, You may not be able to use some parts of our Service.
              Cookies can be “Persistent” or “Session” Cookies. Persistent
              Cookies remain on your personal computer or mobile device when You
              go offline, while Session Cookies are deleted as soon as You close
              your web browser. Learn more about cookies:{' '}
              <Link
                target='_blank'
                href='https://www.termsfeed.com/blog/cookies/'
              >
                All about cookies
              </Link>
            </p>
            <p>
              We use both session and persistent Cookies for the purposes set
              out below:
            </p>
            <ul>
              <li className={styles.list_Item}>
                <span className={styles.bold}>
                  Necessary / Essential Cookies
                </span>
                Type: Session CookiesAdministered by: Us Purpose: These Cookies
                are essential to provide You with services available through the
                Website and to enable You to use some of its features. They help
                to authenticate users and prevent fraudulent use of user
                accounts. Without these Cookies, the services that You have
                asked for cannot be provided, and We only use these Cookies to
                provide You with those services.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>
                  Cookies Policy / Notice Acceptance Cookies
                </span>
                Type: Persistent CookiesAdministered by: Us Purpose: These
                Cookies identify if users have accepted the use of cookies on
                the Website.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Functionality Cookies</span>
                Type: Persistent CookiesAdministered by: Us Purpose: These
                Cookies allow us to remember choices You make when You use the
                Website, such as remembering your login details or language
                preference. The purpose of these Cookies is to provide You with
                a more personal experience and to avoid You having to re-enter
                your preferences every time You use the Website.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>
                  Tracking and Performance Cookies
                </span>
                Type: Persistent CookiesAdministered by: Third-Parties Purpose:
                These Cookies are used to track information about traffic to the
                Website and how users use the Website. The information gathered
                via these Cookies may directly or indirectly identify you as an
                individual visitor. This is because the information collected is
                typically linked to a pseudonymous identifier associated with
                the device you use to access the Website. We may also use these
                Cookies to test new pages, features or new functionality of the
                Website to see how our users react to them.
              </li>
            </ul>
            <br />
            <p>
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy or the Cookies
              section of our Privacy Policy.
            </p>
          </div>

          <div className={styles.paragraph}>
            <h3 className={styles.heading_Three}>Use of Your Personal Data</h3>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul>
              <li className={styles.list_Item}>
                {' '}
                <span className={styles.bold}>
                  To provide and maintain our Service
                </span>
                , including to monitor the usage of our Service. To manage Your
                Account: to manage Your registration as a user of the Service.
                The Personal Data You provide can give You access to different
                functionalities of the Service that are available to You as a
                registered user.
              </li>
              <li className={styles.list_Item}>
                {' '}
                <span className={styles.bold}>To manage Your Account</span>: to
                manage Your registration as a user of the Service. The Personal
                Data You provide can give You access to different
                functionalities of the Service that are available to You as a
                registered user.
              </li>
              <li className={styles.list_Item}>
                {' '}
                <span className={styles.bold}>
                  For the performance of a contract
                </span>
                : the development, compliance and undertaking of the purchase
                contract for the products, items or services You have purchased
                or of any other contract with Us through the Service.
              </li>
              <li className={styles.list_Item}>
                {' '}
                <span className={styles.bold}>To contact You</span>
                To contact You by email, telephone calls, SMS, or other
                equivalent forms of electronic communication, such as a mobile
                application’s push notifications regarding updates or
                informative communications related to the functionalities,
                products or contracted services, including the security updates,
                when necessary or reasonable for their implementation.
              </li>
              <li className={styles.list_Item}>
                {' '}
                <span className={styles.bold}>To provide You </span>with news,
                special offers and general information about other goods,
                services and events which we offer that are similar to those
                that you have already purchased or enquired about unless You
                have opted not to receive such information.
              </li>
              <li className={styles.list_Item}>
                {' '}
                <span className={styles.bold}>To manage Your requests</span>: To
                attend and manage Your requests to Us.
              </li>
            </ul>
            <p>
              We may share your personal information in the following
              situations:
            </p>
            <ul>
              <li className={styles.list_Item}>
                <span className={styles.bold}>With Service Providers</span>: We
                may share Your personal information with Service Providers to
                monitor and analyze the use of our Service, to advertise on
                third party websites to You after You visited our Service, for
                payment processing, to contact You.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>For Business transfers</span>We
                may share or transfer Your personal information in connection
                with, or during negotiations of, any merger, sale of Company
                assets, financing, or acquisition of all or a portion of our
                business to another company.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>With Affiliates</span> We may
                share Your information with Our affiliates, in which case we
                will require those affiliates to honor this Privacy Policy.
                Affiliates include Our parent company and any other
                subsidiaries, joint venture partners or other companies that We
                control or that are under common control with Us.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>With Business partners</span>We
                may share Your information with Our business partners to offer
                You certain products, services or promotions.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>With other users</span> when You
                share personal information or otherwise interact in the public
                areas with other users, such information may be viewed by all
                users and may be publicly distributed outside. If You interact
                with other users or register through a Third-Party Social Media
                Service, Your contacts on the Third-Party Social Media Service
                may see Your name, profile, pictures and description of Your
                activity. Similarly, other users will be able to view
                descriptions of Your activity, communicate with You and view
                Your profile.
              </li>
            </ul>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.heading_Three}>
              Transfer of Your Personal Data
            </h3>
            <p>
              Your information, including Personal Data, is processed at the
              Company’s operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </p>
            <p>
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </p>
            <p>
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.heading_Three}>
              Disclosure of Your Personal Data
            </h3>
            <h4 className={styles.heading_Four}>Business Transactions</h4>
            <p>
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy
            </p>
            <h4 className={styles.heading_Four}>Law Enforcement</h4>
            <p>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>
            <h4 className={styles.heading_Four}>Other legal requirements</h4>
            <p>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul>
              <li className={styles.list_Item}>
                Comply with a legal obligation
              </li>
              <li className={styles.list_Item}>
                Protect and defend the rights or property of the Company
              </li>
              <li className={styles.list_Item}>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li className={styles.list_Item}>
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li className={styles.list_Item}>
                Protect against legal liability
              </li>
            </ul>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.heading_Three}>
              Disclosure of Your Personal Data
            </h3>
            <h4 className={styles.heading_Four}>Business Transactions</h4>
            <p>
              If the Company is involved in a merger, acquisition, or asset
              sale, Your Personal Data may be transferred. We will provide
              notice before Your Personal Data is transferred and becomes
              subject to a different Privacy Policy.
            </p>
            <h4 className={styles.heading_Four}>Law Enforcement</h4>
            <p>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g., a court or
              a government agency).
            </p>
            <h4 className={styles.heading_Four}>Other legal requirements</h4>
            <p>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul>
              <li className={styles.list_Item}>
                Comply with a legal obligation
              </li>
              <li className={styles.list_Item}>
                Protect and defend the rights or property of the Company
              </li>
              <li className={styles.list_Item}>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li className={styles.list_Item}>
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li className={styles.list_Item}>
                Protect against legal liability
              </li>
            </ul>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.heading_Three}>
              Security of Your Personal Data
            </h3>
            <p>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>
          </div>

          <div className={styles.paragraph}>
            <h2 className={styles.head_Two}>
              Detailed Information on the Processing of Your Personal Data
            </h2>
            <p>
              Service Providers have access to Your Personal Data only to
              perform their tasks on Our behalf and are obligated not to
              disclose or use it for any other purpose.
            </p>
            <h3 className={styles.heading_Three}>Analytics</h3>
            <p>
              We may use third-party Service providers to monitor and analyze
              the use of our Service.
            </p>
            <ul>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Google Analytics </span> Google
                Analytics is a web analytics service offered by Google that
                tracks and reports website traffic. Google uses the data
                collected to track and monitor the use of our Service. This data
                is shared with other Google services. Google may use the
                collected data to contextualize and personalize the ads of its
                own advertising network.
                <p>
                  You can opt-out of having made your activity on the Service
                  available to Google Analytics by installing the Google
                  Analytics opt-out browser add-on. The add-on prevents the
                  Google Analytics JavaScript (ga.js, analytics.js and dc.js)
                  from sharing information with Google Analytics about visits
                  activity.
                </p>
                <p>
                  For more information on the privacy practices of Google,
                  please visit the Google Privacy & Terms web page:{' '}
                  <Link
                    target='_blank'
                    href=' https://policies.google.com/privacy'
                  >
                    https://policies.google.com/privacy
                  </Link>
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.heading_Three}>Email Marketing</h3>
            <p>
              We may use Your Personal Data to contact You with newsletters,
              marketing or promotional materials and other information that may
              be of interest to You. You may opt-out of receiving any, or all,
              of these communications from Us by following the unsubscribe link
              or instructions provided in any email We send or by contacting Us.
            </p>
            <p>
              We may use Email Marketing Service Providers to manage and send
              emails to You.
            </p>
            <ul>
              <li className={styles.list_Item}>
                <span className={styles.bold}> IContact </span>
                Their Privacy Policy can be viewed at:{' '}
                <Link target='_blank' href=' https://www.icontact.com/'>
                  https://www.icontact.com/
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.paragraph}>
            <h3 className={styles.heading_Three}>Payments</h3>
            <p>
              We may provide paid products and/or services within the Service.
              In that case, we may use third-party services for payment
              processing (e.g. payment processors).
            </p>
            <p>
              We will not store or collect Your payment card details. That
              information is provided directly to Our third-party payment
              processors whose use of Your personal information is governed by
              their Privacy Policy. These payment processors adhere to the
              standards set by PCI-DSS as managed by the PCI Security Standards
              Council, which is a joint effort of brands like Visa, Mastercard,
              American Express and Discover. PCI-DSS requirements help ensure
              the secure handling of payment information.
            </p>
            <ul>
              <li className={styles.list_Item}>
                <span className={styles.bold}>PayPal </span>Their Privacy Policy
                can be viewed at{' '}
                <Link
                  target='_blank'
                  href=' https://www.paypal.com/webapps/mpp/ua/privacy-full'
                >
                  https://www.paypal.com/webapps/mpp/ua/privacy-full
                </Link>
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Quickbooks</span>Their Privacy
                Policy can be viewed at{' '}
                <Link target='_blank' href='  https://www.intuit.com/privacy/'>
                  https://www.intuit.com/privacy/
                </Link>
              </li>
            </ul>
            <p>
              When You use Our Service to pay a product and/or service via bank
              transfer, We may ask You to provide information to facilitate this
              transaction and to verify Your identity.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.heading_Three}>Behavioral Remarketing</h3>
            <p>
              The Company uses remarketing services to advertise on third party
              websites to You after You visited our Service. We and Our
              third-party vendors use cookies to inform, optimize and serve ads
              based on Your past visits to our Service.
            </p>
            <ul>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Google Ads (AdWords)</span>Google
                Ads (AdWords) remarketing service is provided by Google Inc.
                <p>
                  You can opt-out of Google Analytics for Display Advertising
                  and customise the Google Display Network ads by visiting the
                  Google Ads Settings page:
                </p>
                <Link
                  target='_blank'
                  href=' hhttp://www.google.com/settings/ads'
                >
                  http://www.google.com/settings/ads
                </Link>
                <p>
                  Google also recommends installing the Google Analytics Opt-out
                  Browser Add-on –
                </p>
                <Link
                  target='_blank'
                  href=' https://tools.google.com/dlpage/gaoptout'
                >
                  https://tools.google.com/dlpage/gaoptout
                </Link>
                <p>
                  – for your web browser. Google Analytics Opt-out Browser
                  Add-on provides visitors with the ability to prevent their
                  data from being collected and used by Google Analytics.
                </p>
                <p>
                  For more information on the privacy practices of Google,
                  please visit the Google Privacy & Terms web page:{' '}
                </p>
                <Link
                  target='_blank'
                  href=' https://policies.google.com/privacy'
                >
                  https://policies.google.com/privacy
                </Link>
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Facebook</span>
                <p>
                  Facebook remarketing service is provided by Facebook Inc. You
                  can learn more about interest-based advertising from Facebook
                  by visiting this page:
                </p>
                <Link
                  target='_blank'
                  href=' https://www.facebook.com/help/568137493302217'
                >
                  https://www.facebook.com/help/568137493302217
                </Link>
                <p>
                  To opt-out from Facebook’s interest-based ads, follow these
                  instructions from Facebook:
                </p>
                <Link
                  target='_blank'
                  href=' https://www.facebook.com/help/568137493302217'
                >
                  https://www.facebook.com/help/568137493302217
                </Link>
                <p>
                  Facebook adheres to the Self-Regulatory Principles for Online
                  Behavioural Advertising established by the Digital Advertising
                  Alliance. You can also opt-out from Facebook and other
                  participating companies through the Digital Advertising
                  Alliance in the USA
                </p>
                <Link target='_blank' href=' http://www.aboutads.info/choices/'>
                  http://www.aboutads.info/choices/
                </Link>
                <p>the Digital Advertising Alliance of Canada in Canada</p>
                <Link target='_blank' href=' http://youradchoices.ca/ '>
                  http://youradchoices.ca/
                </Link>
                <p>
                  or the European Interactive Digital Advertising Alliance in
                  Europe
                </p>
                <Link target='_blank' href=' http://www.youronlinechoices.eu/'>
                  http://www.youronlinechoices.eu/
                </Link>
                <p>
                  or opt-out using your mobile device settings. For more
                  information on the privacy practices of Facebook, please visit
                  Facebook’s Data Policy:{' '}
                </p>
                <Link
                  target='_blank'
                  href='  https://www.facebook.com/privacy/explanation'
                >
                  https://www.facebook.com/privacy/explanation
                </Link>
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>AdRoll</span>
                <p>
                  AdRoll remarketing service is provided by Semantic Sugar, Inc
                </p>
                <p>
                  You can opt-out of AdRoll remarketing by visiting this AdRoll
                  Advertising Preferences web page:
                </p>
                <Link
                  target='_blank'
                  href='  http://info.evidon.com/pub_info/573?v=1&nt=1&nw=false'
                >
                  http://info.evidon.com/pub_info/573?v=1&nt=1&nw=false
                </Link>
                <p>
                  For more information on the privacy practices of AdRoll,
                  please visit the AdRoll Privacy Policy web page:{' '}
                </p>
                <Link
                  target='_blank'
                  href='  http://www.adroll.com/about/privacy'
                >
                  http://www.adroll.com/about/privacy
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.heading_Three}>
              Usage, Performance and Miscellaneous
            </h3>
            <p>
              We may use third-party Service Providers to provide better
              improvement of our Service.
            </p>
            <ul>
              <li className={styles.list_Item}>
                <span className={styles.bold}>Google Places</span> Google Places
                is a service that returns information about places using HTTP
                requests. It is operated by GoogleGoogle Places service may
                collect information from You and from Your Device for security
                purposes.
                <Link
                  target='_blank'
                  href=' https://www.google.com/intl/en/policies/privacy/'
                >
                  https://www.google.com/intl/en/policies/privacy/
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.head_Two}>CCPA Privacy</h2>
            <h3 className={styles.heading_Three}>Your Rights under the CCPA</h3>
            <p>
              Under this Privacy Policy, and by law if You are a resident of
              California, You have the following rights:
            </p>
            <ul>
              <li className={styles.list_Item}>
                <span className={styles.bold}>The right to notice. </span>You
                must be properly notified which categories of Personal Data are
                being collected and the purposes for which the Personal Data is
                being used.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>
                  The right to access / the right to request.{' '}
                </span>
                The CCPA permits You to request and obtain from the Company
                information regarding the disclosure of Your Personal Data that
                has been collected in the past 12 months by the Company or its
                subsidiaries to a third-party for the third party’s direct
                marketing purposes.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>
                  The right to say no to the sale of Personal Data.
                </span>{' '}
                You also have the right to ask the Company not to sell Your
                Personal Data to third parties. You can submit such a request by
                visiting our “Do Not Sell My Personal Information” section or
                web page.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>
                  The right to know about Your Personal Data.{' '}
                </span>
                You have the right to request and obtain from the Company
                information regarding the disclosure of the following:
                <ul>
                  <li>- The categories of Personal Data collected</li>
                  <li>
                    - The sources from which the Personal Data was collected
                  </li>
                  <li>
                    - The business or commercial purpose for collecting or
                    selling the Personal Data
                  </li>
                  <li>
                    - Categories of third parties with whom We share Personal
                    Data
                  </li>
                  <li>
                    - The specific pieces of Personal Data we collected about
                    You
                  </li>
                </ul>
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>
                  The right to delete Personal Data.{' '}
                </span>
                You also have the right to request the deletion of Your Personal
                Data that have been collected in the past 12 months.
              </li>
              <li className={styles.list_Item}>
                <span className={styles.bold}>
                  The right not to be discriminated against.{' '}
                </span>
                You have the right not to be discriminated against for
                exercising any of Your Consumer’s rights, including by:
                <ul>
                  <li>- Denying goods or services to You</li>
                  <li>
                    - Charging different prices or rates for goods or services,
                    including the use of discounts or other benefits or imposing
                    penalties
                  </li>
                  <li>
                    - Providing a different level or quality of goods or
                    services to You
                  </li>
                  <li>
                    - Suggesting that You will receive a different price or rate
                    for goods or services or a different level or quality of
                    goods or services.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.heading_Three}>
              Do Not Sell My Personal Information
            </h3>
            <p>
              We do not sell personal information. However, the Service
              Providers we partner with (for example, our advertising partners)
              may use technology on the Service that “sells” personal
              information as defined by the CCPA law.
            </p>
            <p>
              If you wish to opt out of the use of your personal information for
              interest-based advertising purposes and these potential sales as
              defined under CCPA law, you may do so by following the
              instructions below.
            </p>
            <p>
              Please note that any opt out is specific to the browser You use.
              You may need to opt out on every browser that you use.
            </p>
            <h4 className={styles.heading_Four}>Website</h4>
            <p>
              You can opt out of receiving ads that are personalized as served
              by our Service Providers by following our instructions presented
              on the Service:
            </p>
            <ul>
              <li className={styles.list_Item}>
                From Our “Cookie Consent” notice banner
              </li>
              <li className={styles.list_Item}>
                Or from Our “CCPA Opt-out” notice banner
              </li>
              <li className={styles.list_Item}>
                Or from Our “Do Not Sell My Personal Information” notice banner
              </li>
              <li className={styles.list_Item}>
                Or from Our “Do Not Sell My Personal Information” linkOr from
                Our “Do Not Sell My Personal Information” link
              </li>
            </ul>
            <p>
              The opt out will place a cookie on Your computer that is unique to
              the browser You use to opt out. If you change browsers or delete
              the cookies saved by your browser, you will need to opt out again.
            </p>
            <h4 className={styles.heading_Four}>Mobile Devices</h4>
            <p>
              Your mobile device may give you the ability to opt out of the use
              of information about the apps you use in order to serve you ads
              that are targeted to your interests:
            </p>
            <ul>
              <li className={styles.list_Item}>
                “Opt out of Interest-Based Ads” or “Opt out of Ads
                Personalization” on Android devices
              </li>
              <li className={styles.list_Item}>
                “Limit Ad Tracking” on iOS devices
              </li>
            </ul>
            <p>
              You can also stop the collection of location information from Your
              mobile device by changing the preferences on your mobile device.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.head_Two}>
              “Do Not Track” Policy as Required by California Online Privacy
              Protection Act (CalOPPA)
            </h2>
            <p>Our Service does not respond to Do Not Track signals.</p>
            <p>
              However, some third party websites do keep track of Your browsing
              activities. If You are visiting such websites, You can set Your
              preferences in Your web browser to inform websites that You do not
              want to be tracked. You can enable or disable DNT by visiting the
              preferences or settings page of Your web browser.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.head_Two}>Children’s Privacy</h2>
            <p>
              The Service may contain content appropriate for children under the
              age of 13. As a parent, you should know that through the Service
              children under the age of 13 may participate in activities that
              involve the collection or use of personal information. We use
              reasonable efforts to ensure that before we collect any personal
              information from a child, the child’s parent receives notice of
              and consents to our personal information practices.
            </p>
            <p>
              We also may limit how We collect, use, and store some of the
              information of Users between 13 and 18 years old. In some cases,
              this means We will be unable to provide certain functionality of
              the Service to these Users. If We need to rely on consent as a
              legal basis for processing Your information and Your country
              requires consent from a parent, We may require Your parent’s
              consent before We collect and use that information.
            </p>
            <p>
              We may ask a User to verify its date of birth before collecting
              any personal information from them. If the User is under the age
              of 13, the Service will be either blocked or redirected to a
              parental consent process
            </p>
          </div>
          <div className={styles.paragraph}>
            <h3 className={styles.heading_Three}>
              Information Collected from Children Under the Age of 13
            </h3>
            <p>
              The Company may collect and store persistent identifiers such as
              cookies or IP addresses from Children without parental consent for
              the purpose of supporting the internal operation of the Service.
            </p>
            <p>
              We may collect and store other personal information about children
              if this information is submitted by a child with prior parent
              consent or by the parent or guardian of the child.
            </p>
            <p>
              The Company may collect and store the following types of personal
              information about a child when submitted by a child with prior
              parental consent or by the parent or guardian of the child:
            </p>
            <ul>
              <li className={styles.list_Item}>First and/or last name</li>
              <li className={styles.list_Item}>Date of birth</li>
              <li className={styles.list_Item}>Gender</li>
              <li className={styles.list_Item}>Grade level</li>
              <li className={styles.list_Item}>Email address</li>
              <li className={styles.list_Item}>Telephone number</li>
              <li className={styles.list_Item}>Parent’s or guardian’s name</li>
              <li className={styles.list_Item}>
                Parent’s or guardian’s email address
              </li>
            </ul>
            <p>
              For further details on the information We might collect, You can
              refer to the “Types of Data Collected” section of this Privacy
              Policy. We follow our standard Privacy Policy for the disclosure
              of personal information collected from and about children.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.head_Two}>Parental Access</h2>
            <p>
              A parent who has already given the Company permission to collect
              and use his child personal information can, at any time:
            </p>
            <ul>
              <li className={styles.list_Item}>
                Review, correct or delete the child’s personal information
              </li>
              <li className={styles.list_Item}>
                Discontinue further collection or use of the child’s personal
                information
              </li>
            </ul>
            <p>
              To make such a request, You can write to Us using the contact
              information provided in this Privacy Policy.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.head_Two}>
              Your California Privacy Rights (California’s Shine the Light law)
            </h2>
            <p>
              Under California Civil Code Section 1798 (California’s Shine the
              Light law), California residents with an established business
              relationship with us can request information once a year about
              sharing their Personal Data with third parties for the third
              parties’ direct marketing purposes. If you’d like to request more
              information under the California Shine the Light law, and if you
              are a California resident, You can contact Us using the contact
              information provided below.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.head_Two}>
              California Privacy Rights for Minor Users (California Business and
              Professions Code Section 22581)
            </h2>
            <p>
              California Business and Professions Code section 22581 allow
              California residents under the age of 18 who are registered users
              of online sites, services or applications to request and obtain
              removal of content or information they have publicly posted.
            </p>
            <p>
              To request removal of such data, and if you are a California
              resident, You can contact Us using the contact information
              provided below, and include the email address associated with Your
              account.
            </p>
            <p>
              Be aware that Your request does not guarantee complete or
              comprehensive removal of content or information posted online and
              that the law may not permit or require removal in certain
              circumstances.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.head_Two}>Links to Other Websites</h2>
            <p>
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party’s site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.head_Two}>Changes to this Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              “Last updated” date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.head_Two}>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul>
              <li className={`${styles.list_Item} ${styles.paddingBottom}`}>
                By email: natem@musiciansmobile.com
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
