import "./Landing.scss";
import myImg from "../../Images/myself.png";
import { Button } from "react-bootstrap";

const Landing = ({ landing, isLanding, darkmode }) => {
  return isLanding ? (
    <section
      className={
        darkmode
          ? `landingSectionShow landingSectionDark`
          : `landingSectionShow landingSectionLight`
      }
    >
      <h1>
        Antonio <br /> Shivers
      </h1>
      <img src={myImg} alt="Antonio's face" id="myImg" />

      <div id="myBlurb">
        <p>
          I am a software engineer who aspires to become a video game engineer.
        </p>
        <Button
          variant="secondary"
          onClick={() => {
            landing();
          }}
        >
          Find Out More About Me
        </Button>
      </div>
    </section>
  ) : (
    <section
      className={
        darkmode
          ? `landingSectionHide landingSectionDark`
          : `landingSectionHide landingSectionLight`
      }
    >
      <h1>
        Antonio <br /> Shivers
      </h1>
      <img src={myImg} alt="Antonio's face" id="myImg" />

      <div id="myBlurb">
        <p>
          I am a software engineer who aspires to become a video game engineer.
        </p>
        <Button variant="secondary">Find Out More About Me</Button>
      </div>
    </section>
  );
};

export default Landing;
