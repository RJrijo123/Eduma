import React from 'react';
import Hero from './Main Banner/Hero';
import AiBanner from './AIBanner/AiBanner';
import WhatToExpect from './WhatToExpect/WhatToExpect';
import CourseContent from './CourseContent/CourseContent';
import { Element } from 'react-scroll'; 
import TestimonialsSection from './Testimonials/testimonials';
import Profile from './Profile/Profile';
import HoverCard from './Cards/HoverCard';
import FAQ from './FAQItem/FAQItem';
import Enrollment from './Enrollment/Enrollment';
import CourseTargetAudience from './CourseTargetAudience/CourseTargetAudience';
import WaitlistBanner from './WaitlistBanner/WaitlistBanner';
import Enroll from './Enroll/Enroll';
import Footer from './Footer/Footer';
import BackToTop from './BackToTop/BackToTop';
import './Home.css'


function Home() {
  return (
    <div className='div'>
      <Hero />
      <AiBanner />   
      <Element name="goals-section">
        <WhatToExpect />
      </Element>
      <Element name="curriculum-section">
        <CourseContent />
      </Element>
      <Enroll/>
      <CourseTargetAudience/>
      <Element name="testimonial-section">
        <TestimonialsSection/>
      </Element>
        <Profile/>
      <Element name="instructors-section">
        <HoverCard/>
      </Element>
      <Element name="enrollment-section">
      <Enrollment/>
      </Element>
      <WaitlistBanner/>
      <Element name="FAQ-section">
        <FAQ/>
      </Element>
      <Footer/>
      <BackToTop/>
    </div>
  );
}

export default Home;
