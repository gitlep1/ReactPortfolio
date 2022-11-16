import "./home.scss";
import myImg from "../../Images/myself.png";

const Home = ({ darkmode }) => {
  return (
    <section
      className={
        darkmode
          ? "mainHomeSection homeSectionDark"
          : "mainHomeSection homeSectionLight"
      }
    >
      lol
    </section>
  );
};

export default Home;
