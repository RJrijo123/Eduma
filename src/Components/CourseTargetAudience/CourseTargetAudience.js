import React from "react";
import "./CourseTargetAudience.css";
import { FaLightbulb, FaBrain, FaBriefcase, FaCode } from "react-icons/fa";

const CourseTargetAudience = () => {
  const audienceData = [
    {
      icon: <FaLightbulb />,
      title: "Newcomer",
      description:
        "No prior AI or technical knowledge required. Ideal for individuals who want to add AI skills to their resume and stay ahead of the curve in their field.",
    },
    {
      icon: <FaBrain />,
      title: "Tech-savvy",
      description:
        "The course will delve deeper into the concepts, offering a more challenging and rewarding learning experience. The course will provide practical skills and resources to experiment with AI tools and applications.",
    },
    {
      icon: <FaBriefcase />,
      title: "Businessman",
      description:
        "Focus on how AI can be applied to improve business processes, marketing, and decision-making. How AI can transform your organization and gain a competitive edge in the future.",
    },
    {
      icon: <FaCode />,
      title: "Developer",
      description:
        "A great starting point to explore different AI specializations and gain a solid foundation, looking to harness the power of AI for your projects.",
    },
  ];

  return (
    <div className="course-target-container">
      <h2 className="course-title">This course is for you</h2>
      <div className="course-cards">
        {audienceData.map((audience, index) => (
          <div className="course-card" key={index}>
            <div className="icon">{audience.icon}</div>
            <h3>{audience.title}</h3>
            <p>{audience.description}</p>
          </div>
        ))}
      </div>
      <button className="enrol-button">Enroll Now</button>
    </div>
  );
};

export default CourseTargetAudience;
