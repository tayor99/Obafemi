import { Wrapper } from "./Profile.style";
import { GrMail } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import profile__img from "../../assets/obafemi.jpg";

const Profile = ({ projectRef, skillRef }) => {
  return (
    <Wrapper>
      <div className="profile">
        <h1>Hello, I am Obafemi Oyinlola.</h1>
        <p>
          Versatile and highly skilled professional with a unique combination of
          expertise in product management and frontend development. Possessing
          over 4 years of experience in the tech industry, demonstrated ability
          to successfully create and manage innovative products while also
          designing and developing visually appealing and user-friendly web
          interfaces. A strategic thinker with strong analytical skills and a
          knack for problem-solving. Exceptional communication and collaboration
          abilities, fostering effective cross-functional relationships between
          development, design, and marketing teams. Seeking to leverage my
          diverse skill set to contribute to the success of a forward-thinking
          organization
        </p>
        <ul>
          <li
            onClick={() => {
              projectRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <p>01</p>
            <div className="rule">
              <hr />
            </div>
            <p>PROJECTS</p>
          </li>
          <li
            onClick={() => {
              skillRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <p>02</p>
            <div className="rule">
              <hr />
            </div>

            <p>SKILLS</p>
          </li>
        </ul>
        <div className="mail">
          <GrMail />
          <a href="mailto:oyinlolaobafemi1@gmail.com">
            oyinlolaobafemi1@gmail.com
          </a>
        </div>
      </div>
      <div className="links">
        <div className="profile__img">
          <div className="img__container">
            <img src={profile__img} alt="tayor" />
          </div>
        </div>
        <a
          href="/Oyinlola_Obafemi_Product_Manager_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume <FiExternalLink />
        </a>
        <a href="tel:+2348144467956" target="_blank" rel="noreferrer">
          +2348144467956 <FiExternalLink />
        </a>
        <a
          href="linkedin.com/in/obafemi-oyinlola/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <FiExternalLink />
        </a>
      </div>
    </Wrapper>
  );
};

export default Profile;
