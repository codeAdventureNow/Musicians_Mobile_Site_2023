import styles from './terms-conditions.module.css';

export default function Teachers() {
  return (
    <div className='homepage'>
      <section className='section'>
        <div className='container'>
          <h2 className='section_heading'>Terms of Use</h2>
          <div className={styles.paragraph}>
            <p>
              Thank you for using this website, and for coming to this page to
              read the terms of use agreement. If you continue to use this
              website, you agree to be bound by both this agreement and our
              privacy policy.
            </p>
            <p>
              This agreement is between the user of this website (“you”), and
              InfiNate Productions LLC doing business as Musicians Mobile
              (“Musicians Mobile”). When this agreement says “the parties” it
              means both you and Musicians Mobile, the parties to this
              agreement.
            </p>
            <p>
              This agreement, along with our privacy policy, constitutes the
              entire agreement between between you and Musicians Mobile,
              regarding your use of this website.
            </p>
            <p>
              This agreement is updated periodically and can be changed at any
              time. The last update was on 1/5/14. The parties are bound by the
              latest version of the agreement.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.heading_Two}>Content</h2>
            <p>
              The content of this website is for your general education and
              information. This website is not providing medical, legal,
              financial, or professional advice.
            </p>
            <p>
              Musicians Mobile does not provide any warranty or guarantee that
              the information contained on this site is accurate or complete.
              The information on this site may contain errors. Musicians Mobile
              disclaims any liability from such errors, to the extent allowed by
              the law.
            </p>
            <p>
              Your use of the content on this site is at your own risk.
              Musicians Mobile does not guarantee any results from using this
              content. It is your responsibility to do your own research and
              obtain any professional, medical, legal, financial, or other help
              that you may need for your situation.
            </p>
            <p>
              This site contains materials which are owned or licensed by
              Musicians Mobile, such as text, photography, videos, graphics, and
              the design and layout of the site. These materials are protected
              by copyright law and trademark law, as noticed throughout the
              site. You do not have a license to use the content for any other
              purpose.
            </p>
            <p>
              This site may link to other websites. Links are not an endorsement
              of the other website, unless specifically stated. Musicians Mobile
              has no responsibility for content on the linked website. This site
              may contain reviews, recommendations, testimonials, or
              endorsements of other businesses, individuals, events, materials
              (such as books), products, services, or websites. Musicians Mobile
              will clearly disclose if it receives an affiliate percentage, free
              product, free service, discount, or any other compensation for a
              review.
            </p>
            <p>
              The content of this site may change at any time, without notice.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.heading_Two}>Blog Post Comments</h2>
            <p>
              You may be able to contribute content to this site in the form of
              comments on blog posts.
            </p>
            <p>
              The comments feature is intended to facilitate an educational and
              informative conversation about the topics on this site. Such
              conversations are not a substitute for professional, medical,
              legal, financial, or other advice and do not make you a client or
              customer of Musicians Mobile. If you contribute comments on this
              site, you agree to the following rules:
            </p>
            <ul>
              <li className={styles.list_Item}>
                You will not use the comments to post spam, including promotions
                or advertisements for other products and services.
              </li>
              <li className={styles.list_Item}>
                You will not use the comments to abuse, defame, harass,
                threaten, or post objectionable or illegal content, including
                hate speech and pornography.
              </li>
              <li className={styles.list_Item}>
                You will only post content that you own or have a license to
                post, and you will not post content that infringes on a
                copyright or trademark.
              </li>
              <li className={styles.list_Item}>
                Musicians Mobile may moderate, edit, or delete comments at any
                time, at Musicians Mobile’s sole discretion.
              </li>
              <li className={styles.list_Item}>
                Musicians Mobile may ban comment authors at any time, at
                Musicians Mobile’s sole discretion.
              </li>
            </ul>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.heading_Two}>
              Reporting Copyright Infringement
            </h2>
            <p>
              This website complies with the terms of the Digital Millennium
              Copyright Act. To report a claim of copyright infringement, please
              send a claim to our official agent at natem@musiciansmobile.com,
              containing the following information:
            </p>
            <ul>
              <li className={styles.list_Item}>
                Your contact information (name, mailing address, phone number).
              </li>
              <li className={styles.list_Item}>
                A description of the copyrighted work that you believe was
                infringed.
              </li>
              <li className={styles.list_Item}>
                A description of the content on this site that you believe is
                infringing your copyright. If possible, please include a web
                address/link.
              </li>
              <li className={styles.list_Item}>
                A declaration that: you have a good faith belief that the use of
                the copyrighted materials described was not authorized by the
                copyright owner, agent, or the law; that the information in your
                notice is accurate, and that you declare, under penalty of
                perjury, that you are the owner or the allegedly infringed
                copyright or you are authorized to act on behalf of the
                copyright owner.
              </li>
              <li className={styles.list_Item}>
                Your digital or physical signature.
              </li>
            </ul>
          </div>
          <div className={styles.paragraph}>
            <h2 className={styles.heading_Two}>Important Legal Information</h2>
            <p>
              Access to this website via an automated service, or for a
              competitive purpose, is prohibited. Each incident of unauthorized
              access of this site is subject to liquidated damages.
            </p>
            <p className={styles.bold}>
              The content of this site is provided “as is,” at your own risk,
              without express or implied warranty or condition of any kind.
              Musicians Mobile also disclaims any warranties of merchantability,
              fitness for a particular purpose or non-infringement.
            </p>
            <p className={styles.bold}>
              To the extent allowed by law, under this agreement Musicians
              Mobile will not be liable for indirect, special, incidental,
              punitive, exemplary or consequential damages, regardless of legal
              theory, whether or not it has been warned of such damages, and
              even if all other remedies would fail.
            </p>
            <p className={styles.bold}>
              The laws of the state of California will govern all matters
              arising out of this agreement and the use of this website. All
              claims arising out of or relating to this agreement or the use of
              this website will be litigated exclusively in the county of Santa
              Clara, the state of California. The parties consent to venue and
              personal jurisdiction in the county of Santa Clara, the state of
              California.
            </p>
            <p>
              Any questions about the agreement or this website can be directed
              to:
            </p>
            <p className={styles.paddingBottom}>
              natem@musiciansmobile.com and/or (408) 960-1100
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
