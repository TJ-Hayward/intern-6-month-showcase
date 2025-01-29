import React, { useState } from 'react';
import './vanessa.css';
import { motion } from 'framer-motion';
import ICA from '/ICA.png';
import VANESSA from '/VANESSA.png';
import THINK from '/THINK.jpg';
import FRIENDS from '/FRIENDS.jpg';
import ADA from '/ADA.jpg';
import AWS from '/AWS.png';
import badgelist from '/BADGELIST.png';

import confluence from '/confluence.png';

import electronics from '/ELECTRONICS.png';
import futures from '/futures.png';
import graphql from '/graphql.png';
import LLOYDS from '/LLOYDS.jpeg';
import Merge from '/Merge.png';
import SUPER from '/SUPER.png';
import superlearner from '/SUPERLEARNER.png';

import BRG from '/brg.jpg';
const Vanessa = () => {
  const [activeSection, setActiveSection] = useState('About Me');

  const sections = {
    'About Me': (
      <motion.div
        className='section-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className='role-container'>
          <h2>About Me</h2>
          <p>
            <ul className='about-text'>
              <li>Futures placement intern on a gap year placement</li>
              <li>iX technical consultant</li>
              <li>
                Interest include working on programming projects, learning new
                things, reading, planning, crotchet, and photography
              </li>
              <li>Aspiring software engineer</li>
              <li>
                Working as a front end developer on Premier Farnell project
              </li>
            </ul>
          </p>
          <div>
            <img src={VANESSA} alt='Vanessa' className='about-image' />
            <span className='flex-label'>First day at IBM</span>
          </div>
          <div>
            <img src={FRIENDS} alt='Vanessa' className='about-image' />
            <span className='flex-label'>Intern innovation day</span>
          </div>
        </div>
      </motion.div>
    ),
    // "Vanessa@IBM": (
    //   <motion.div
    //     className="section-content"
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 0.8 }}
    //   >
    //     <h2>Vanessa @ IBM</h2>
    //     <img src={ICA} alt="Vanessa IBM Badge" className="section-image" />
    //   </motion.div>
    // ),
    'My Role': (
      <motion.div
        className='section-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className='role-container'>
          <h2>My Role</h2>
          <p>
            During my time at IBM, I've contributed to multiple projects,
            including leading design thinking sessions, publishing Confluence
            pages, and creating demo materials for teams.
          </p>
          <div className='role-content'>
            <div className='role-column'>
              <h3>Software developer intern - Premier Farnell</h3>
              <ul className='role-list'>
                <li>
                  Work on weekly assigned tickets using react typescript and css
                  for bug fixing, technical debt tasks, UI tasks among others
                </li>
                <li>
                  Six merge requests approved and counting with code going into
                  production
                </li>
                <li>
                  Use of various development tools including Jira, Confluence,
                  GitLab, VSCode, ICA
                </li>
                <li>GenAI enablement in testing and development</li>
                <li>
                  Attend calls with the client side on bug discovery and dev
                  assignment
                </li>
                <li>
                  Hosting client website on my local device and running tests
                </li>
                <li>Working closely with the technical leads on the project</li>
              </ul>
              <img src={ICA} alt='My Role' className='section-image' />
              <span className='flex-label'>
                Newsletter publication on ICA enablement
              </span>
              <img src={Merge} alt='My Role' className='section-image' />
              <span className='flex-label'>
                Newsletter publication on ICA enablement
              </span>
              <img src={electronics} alt='My Role' className='section-image' />
              <span className='flex-label'>
                Electronics industry jumpstart course
              </span>
              <img src={confluence} alt='My Role' className='section-image' />
              <span className='flex-label'>
                publishing team documentation on confluence
              </span>
              <img src={graphql} alt='My Role' className='section-image' />
              <span className='flex-label'>
                GraphQL full stack developer course
              </span>
            </div>

            <div className='role-column'>
              <h3>Scrum Master</h3>
              <ul className='role-list'>
                <li>
                  Leading daily stand ups and ensuring team updates are given on
                  time
                </li>
                <li>
                  Ran design thining session for the software testing team
                </li>
                <li>design and publication of monthly news letter</li>
              </ul>
              <img src={badgelist} alt='My Role' className='section-image' />

              <h3>
                IBM Consulting Advantage Assitants POC Intern support on
                migration of assistants from Llama and Mistral to Granite
              </h3>
              <ul className='role-list'>
                <li>Attending daily standups for team work</li>
                <li>
                  Working as an intern support on the assistant model migration
                  by coding new prompts for the granite model on ICA
                </li>
                <li>
                  Creating models and charts to explain the output differences
                  and understanding migration status
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    ),

    Giveback: (
      <motion.div
        className='section-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Giveback</h2>
        <img src={ADA} alt='Giveback' className='section-image' />
        <p>Volunteering as a speaker at the ADA Lovelace Day 2024</p>
        <img src={THINK} alt='Giveback' className='section-image' />
        <p>Volunteering at THINK London 2024 with IBM</p>
        <img src={LLOYDS} alt='Giveback' className='section-image' />
        <p>Presenting in the Lloyds x IBM hackathon event</p>
        <img src={BRG} alt='Giveback' className='section-image' />
        <p>Participation in the EP embrace black BRG events</p>
      </motion.div>
    ),
    Experiences: (
      <motion.div
        className='section-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Experiences</h2>
        <p>
          My journey at IBM has been filled with enriching experiences, new
          learning and an opportunity to meet new people. Every experience has
          shaped me into who I am today.
        </p>
        <h3>Learning experience</h3>
        <img src={futures} alt='Giveback' className='section-image' />
        <p>
          Getting a Futures intern end of year recognition for always giving
          high quality deliverables and being helpful
        </p>
        <img src={AWS} alt='Giveback' className='section-image' />
        <p>
          Learning to deploy a full stack application on the AWS cloud as a
          beginner
        </p>
        <img src={badgelist} alt='Giveback' className='section-image' />
        <img src={SUPER} alt='Giveback' className='section-image' />

        <p>Some of the badges I earned during my time</p>
        <img src={graphql} alt='Giveback' className='section-image' />
        <p>Learning about graphQL as a beginner developer</p>
        <img src={superlearner} alt='Giveback' className='section-image' />
        <p>Getting super learner status on your learning last year</p>
      </motion.div>
    ),
  };

  return (
    <div className='page-container'>
      {/* Header */}
      <header className='header'>
        <motion.h1
          className='heading'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Vanessa's IBM Journey
        </motion.h1>
      </header>

      {/* Navigation Buttons */}
      <nav className='navigation'>
        {Object.keys(sections).map((section) => (
          <motion.button
            key={section}
            className={`nav-button ${
              activeSection === section ? 'active' : ''
            }`}
            onClick={() => setActiveSection(section)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {section}
          </motion.button>
        ))}
      </nav>

      {/* Section Content */}
      <main className='content'>{sections[activeSection]}</main>
    </div>
  );
};

export default Vanessa;
