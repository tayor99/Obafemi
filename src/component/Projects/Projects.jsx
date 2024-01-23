import { Wrapper } from "./Projects.style";
// import tayor from "../../assets/tayo.jpg";
// import { FiExternalLink } from "react-icons/fi";
import SkillCard from "../SkillCard/SkillCard";
// import { projects } from "../../Data";

const Projects = ({ projectRef, skillRef }) => {
  return (
    <Wrapper>
      <div className="project__container">
        {/* <div className="project" ref={projectRef}>
          {projects.map((project) => (
            <div className="project__card">
              <img src={project.img} alt="project " />
              <div className="desciption">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div className="tools">
                  <a href={project.webLink} target="_blank" rel="noreferrer">
                    Website <FiExternalLink />
                  </a>
                  <ul>
                    <li>React</li>
                    <li>Styled components</li>
                    <li>Axios</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="skill" ref={skillRef}>
          <SkillCard
            header="PROFESSIONAL SKILLS"
            skills={[
              "Product Management",
              "Market research",
              "Agile/Scrum Methodology",
              "User Experience (UX) Design",
              "Wireframing and Prototyping",
              "Data Analysis and Interpretation",
              "Web Design and User Interface (UI) Development",
              "Competitive Analysis",
              "Scope Management",
              "Stakeholder Management",
              "Risk analysis and mitigation",
              "Requirement Gathering/Elicitation",
              "Project management and coordination",
              "Great Communicator",
            ]}
          />
          <SkillCard
            header="Task Management and Collaboration"
            skills={[
              "Azure DevOps",
              "JIRA",
              "Confluence ",
              "Ms. Project ",
              "Trello ",
              "TMicrosoft Team ",
              "WBS",
              "Linear",
            ]}
          />
          <SkillCard
            header="Design/Presentation "
            skills={[
              "Microsoft office Suite ",
              "Adobe Xd ",
              "Figma ",
              "Draw.io ",
              "Balsamiq ",
              "Corel Draw ",
              "Photoshop ",
            ]}
          />
          <SkillCard
            header="Database Management "
            skills={["Pivot table ", "Vlookups ", "Tableau ", "SQL"]}
          />
          <SkillCard
            header="Tech Stack  "
            skills={["JavaScript  ", "ReactJS "]}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
