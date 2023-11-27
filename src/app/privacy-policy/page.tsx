import styles from './privacy-policy.module.css';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className='homepage'>
      <section className='section'>
        <div className='container'>
          <h2 className='section_heading'>Privacy Policy</h2>
          <div className={styles.paragraph}>
            <p>Last updated: October 08, 2020</p>
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
        </div>
      </section>
    </div>
  );
}
