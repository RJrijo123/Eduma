import React from 'react';
import './CourseContent.css';

const CourseContent = () => {
  const courses = [
    { title: 'Introduction to AI and Machine Learning', description: 'Uncover the intricacies of AI, machine learning (ML), and deep learning...', lectures: '6 lectures and 1 quiz' },
    { title: 'Network effects and learning effects', description: 'Uncover the intricacies of AI, machine learning (ML), and deep learning...', lectures: '6 lectures and 1 quiz' },
    { title: 'The AI factory', description: 'Uncover the intricacies of AI, machine learning (ML), and deep learning...', lectures: '6 lectures and 1 quiz' },
    { title: 'The AI-first company', description: 'Uncover the intricacies of AI, machine learning (ML), and deep learning...', lectures: '6 lectures and 1 quiz' },
    { title: 'Ethics of AI and data', description: 'Uncover the intricacies of AI, machine learning (ML), and deep learning...', lectures: '6 lectures and 1 quiz' },
    { title: 'Driving organizational transformation', description: 'Uncover the intricacies of AI, machine learning (ML), and deep learning...', lectures: '6 lectures and 1 quiz' },
  ];

  return (
    <div className="course-content-container">
      <h1>What you'll learn on this course</h1>
      <div className="course-info">
        <div className="info-item">
          <span>Duration</span>
          <p>6 weeks</p>
        </div>
        <div className="info-item">
          <span>Course Format</span>
          <p>Video, Quiz, Article</p>
        </div>
        <div className="info-item">
          <span>Level</span>
          <p>All Levels</p>
        </div>
        <div className="info-item">
          <span>Study Method</span>
          <p>Online</p>
        </div>
      </div>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <div className="course-number">{index + 1}</div>
            <div className="course-details">
              <h2>{course.title}</h2>
              <p className="course-lectures">{course.lectures}</p>
              <p className="course-description">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
