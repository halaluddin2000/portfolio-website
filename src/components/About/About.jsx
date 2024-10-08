import "./About.css";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src="https://i.ibb.co.com/RcrPLDq/logo-img.png" alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img
            className="w-full"
            src="https://i.ibb.co.com/g3s5LYt/about-picture.png"
            alt=""
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>TypeScript</p> <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p> <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
