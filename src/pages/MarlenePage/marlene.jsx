import React, { useState } from 'react';
import './marlene.css';
import my_photo from '/Screenshot 2025-01-29 at 15.06.18.png';
import boots from '/Screenshot 2025-01-17 at 02.34.50.png';
import ica from '/Screenshot 2025-01-29 at 15.40.21.png';
import user_stories from '/Screenshot 2025-01-29 at 15.42.54.png';
import acs from '/Screenshot 2025-01-29 at 15.42.21.png';
import nhs from '/Screenshot 2025-01-17 at 12.42.04.png';
import nhs_phone from '/Screenshot 2025-01-17 at 00.36.32.png';
import r_m from '/Screenshot 2025-01-29 at 16.08.36.png';
import give_back from '/Screenshot 2025-01-29 at 16.27.13.png';

const Marlene = () => {
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : 0));
  };

  return (
    <div className='marlene-container'>
      {step === 0 && (
        <>
          <h1 className='marlene-heading'>Marlene&apos;s IBM Journey So Far</h1>
          <p>
            My journey with IBM over the last 4 months has been a transformative
            experience, filled with learning, challenges, and growth. I&apos;ve
            had the opportunity to work on exciting projects and collaborate
            with amazing colleagues.
          </p>
          <div className='marlene-button-container-center'>
            <button className='marlene-button next' onClick={handleNextStep}>
              Click to follow my journey!
            </button>
          </div>
        </>
      )}

      {step > 0 && step < 5 && (
        <div className='marlene-button-container'>
          <button className='marlene-button back' onClick={handlePrevStep}>
            Go Back
          </button>
          <button className='marlene-button next' onClick={handleNextStep}>
            Next stop!
          </button>
        </div>
      )}

      {step === 1 && (
        <div className='marlene-about-me'>
          <h2>About Me Section</h2>
          <ul>
            <li>Futures Intern</li>
            <li>iX Technical Consultant</li>
            <li>Developer on the NHS App</li>
            <li>Started in Oct 2024</li>
          </ul>
          <img
            src={my_photo}
            alt=' My Pic'
            className='marlene-photo marlene-photo-med'
          />
        </div>
      )}

      {step === 2 && (
        <div className='marlene-boots'>
          <h2>Boots Proof of Concept</h2>
          <ul>
            <li>
              I developed 2 assistants using IBM Consulting Advantage, capable
              of generating user stories and acceptance criteria for Business
              Analysts.
            </li>
          </ul>
          <img
            src={boots}
            alt=' My Pic'
            className='marlene-photo marlene-photo-med'
          />
          <img
            src={ica}
            alt=' My Pic'
            className='marlene-photo marlene-photo-med'
          />
          <img
            src={user_stories}
            alt=' My Pic'
            className='marlene-photo marlene-photo-med'
          />
          <img
            src={acs}
            alt=' My Pic'
            className='marlene-photo marlene-photo-med'
          />
        </div>
      )}

      {step === 3 && (
        <div className='marlene-nhs-app'>
          <h2>NHS App</h2>
          <ul>
            <li>
              In my capacity as the Technical Business Analyst on the Run and
              Maintain team on the NHS App, I am involved in the management of
              our ticketing system.{' '}
            </li>
            <li>
              As a developer, I design and code high-quality solutions that
              align with our technical and architectural standards, ensuring the
              app remains scalable, reliable, and secure.{' '}
            </li>
          </ul>
          <img
            src={nhs}
            alt='A representation of my journey'
            className='marlene-photo marlene-photo-small'
          />
          <img
            src={nhs_phone}
            alt='A representation of my journey'
            className='marlene-photo marlene-photo-small'
          />
          <img
            src={r_m}
            alt='A representation of my journey'
            className='marlene-photo marlene-photo-small'
          />
        </div>
      )}

      {step === 4 && (
        <div className='marlene-give-back'>
          <h2>GiveBack and Events</h2>
          <ul>
            <li>
              {' '}
              Here is all the giveback and events I have been involved with!
            </li>
          </ul>
          <img
            src={give_back}
            alt='A representation of my journey'
            className='marlene-photo marlene-photo-large'
          />
        </div>
      )}

      {step === 4 && (
        <div className='marlene-button-container'>
          <button className='marlene-button back' onClick={handlePrevStep}>
            Go Back
          </button>
          <button className='marlene-button next' onClick={() => setStep(0)}>
            Back to Start!
          </button>
        </div>
      )}
    </div>
  );
};

export default Marlene;
