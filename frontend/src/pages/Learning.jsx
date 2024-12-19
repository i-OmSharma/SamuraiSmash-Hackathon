import SubjectCard from "../components/cards/SubjectCard";
import RocketLaunch from "../components/cards/RocketLaunch";
import { subjects } from "../data/subjects";
import "../App.css"; // This imports the global styles

const Learning = () => {
  return (
    <div className="learning-container">
      {/* Title */}
      <h1 className="title">Learning Journey 🚀</h1>

      <div className="content-grid">
        {/* Left Column: Subject Cards */}
        <div className="subjects-container">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>

        {/* Rocket Launch Animation */}
        <div className="rocket-container">
          <RocketLaunch />
        </div>
      </div>
    </div>
  );
};

export default Learning;
