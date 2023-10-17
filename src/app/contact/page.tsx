'use client';
import styles from './contact.module.css';
import Image from 'next/image';
import Link from 'next/link';
import navstyles from '../components/nav/nav.module.css';
import { useState } from 'react';
import FormInput from '../components/form-input/form-input';

export default function Contact() {
  const [values, setValues] = useState({
    fullname: '',
    zipcode: '',
    email: '',
    phone: '',
    leadsource: '',
    availability: '',
    message: '',
    piano: '',
    guitar: '',
    voice: '',
    drums: '',
    other: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const inputs = [
    {
      id: 1,
      name: 'fullname',
      type: 'text',
      placeholder: 'First Name/Last Name',
      errorMessage: 'Please enter your first and last name',
      label: 'First Name/Last Name*',
      required: true,
    },
    {
      id: 2,
      name: 'zipcode',
      type: 'number',
      placeholder: 'Zip Code',
      errorMessage: 'You must enter a number',
      label: 'Zip Code*',
      required: true,
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address',
      label: 'Email*',
      required: true,
    },
    {
      id: 4,
      name: 'phone',
      type: 'tel',
      placeholder: 'Phone',
      errorMessage: 'Please enter a valid phone number',
      label: 'Phone*',
      required: true,
    },
    {
      id: 5,
      name: 'leadsource',
      type: 'text',
      placeholder: 'How did you hear about us?',
      errorMessage: '',
      label: 'How did you hear about us?*',
      required: true,
    },
    {
      id: 6,
      name: 'availability',
      type: 'text',
      placeholder: 'ex. Mon 3-8pm, Fri 4-6pm',
      errorMessage: '',
      label: 'What is your availability for music lessons?',
      required: false,
    },
    {
      id: 7,
      name: 'message',
      type: 'text',
      placeholder: 'ex. Daughter is complete beginner, loves pop music',
      errorMessage: '',
      label: 'Any further details that will help us?',
      required: false,
    },
  ];

  const lessonsOptions = [
    {
      id: 8,
      name: 'piano',
      type: 'checkbox',
      label: 'Piano',
      required: false,
    },
    {
      id: 9,
      name: 'guitar',
      type: 'checkbox',
      label: 'Guitar',
      required: false,
    },
    {
      id: 10,
      name: 'voice',
      type: 'checkbox',
      label: 'Voice',
      required: false,
    },
    {
      id: 11,
      name: 'drums',
      type: 'checkbox',
      label: 'Drums',
      required: false,
    },
    {
      id: 12,
      name: 'other',
      type: 'checkbox',
      label: 'Other',
      required: false,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(values);

    setValues({
      fullname: '',
      zipcode: '',
      email: '',
      phone: '',
      leadsource: '',
      availability: '',
      message: '',
      piano: '',
      guitar: '',
      voice: '',
      drums: '',
      other: '',
    });
    e.target.reset();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.homepage}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.hero_heading}>Contact Us</h1>
          <div className={styles.pillar_flex}>
            <div className={styles.pillar_column}>
              <h2 className={styles.pillar_heading}>Option 1</h2>
              <p className={styles.pillar_paragraph}>
                Schedule a 10-minute phone consultation. Talk to one of our team
                members so we can learn more about your music interests and
                answer any questions.
              </p>
            </div>
            <div className={styles.pillar_column}>
              <h2 className={styles.pillar_heading}>Option 2 </h2>
              <p>Call us directly</p>
              <div className={navstyles.nav_cta}>
                <br />
                <a className={navstyles.phone} href='tel:408-960-1100'>
                  {' '}
                  <Image
                    width={20}
                    height={100}
                    layout='intrinsic'
                    src='/images/phone_icon.png'
                    alt='phone_icon'
                    className={styles.phone_icon}
                  />
                  <p>(408) 960-1100</p>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.pillar_flex}>
            <div className={styles.pillar_column}>
              <h2 className={styles.pillar_heading}>Option 3 </h2>
              <p>Fill out our contact form</p>
              <div className={styles.input_form}>
                {formSubmitted ? (
                  <div>
                    <br />
                    <br />
                    <br />
                    <p>
                      Form Submitted Succesfully! We will be in contact shortly.
                    </p>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                      <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                      />
                    ))}
                    <label className={styles.label}>
                      Which instruments would you like to learn?
                    </label>
                    <div className={styles.instrument_checkbox_container}>
                      {lessonsOptions.map((input) => (
                        <FormInput
                          key={input.id}
                          {...input}
                          values={lessonsOptions[input.name]}
                          onChange={onChange}
                        />
                      ))}
                    </div>

                    <button type='submit'>Submit</button>
                  </form>
                )}
              </div>
            </div>
            <div className={styles.pillar_column}>
              <div className={styles.logo}>
                <Link href='/'>
                  <Image
                    width={100}
                    height={100}
                    layout='intrinsic'
                    src='/images/Logo.jpg'
                    alt='musicians mobile logo'
                  />
                </Link>
              </div>
              <p>Office Hours: M-F 9am-6pm</p>
              <div className={navstyles.nav_cta}>
                <br />

                <a className={navstyles.phone} href='tel:408-960-1100'>
                  {' '}
                  <Image
                    width={20}
                    height={100}
                    layout='intrinsic'
                    src='/images/phone_icon.png'
                    alt='phone_icon'
                    className={styles.phone_icon}
                  />
                  <p>(408) 960-1100</p>
                </a>
              </div>
              <div className={styles.contact_info}>
                <p>carl@musiciansmobile.com</p>
                <p>1276 Lincoln Ave, suite 109</p>
                <p>San Jose, CA 95125</p>
              </div>

              <div className={styles.map}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.5629107149553!2d-121.90112832343421!3d37.30549173905257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e346eb98cff69%3A0x2e9270c56585f820!2sMusicians%20Mobile!5e0!3m2!1sen!2sus!4v1697230138264!5m2!1sen!2sus'
                  width='300'
                  height='225'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
