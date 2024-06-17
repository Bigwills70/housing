import { myStyles } from "../styles";
import "./styles/styles.css";
const About = (prop) => {
  return (
    <>
      <h1 style={myStyles}>
        Thi is my About Component, we passed the name {prop.myname} to this
        about Component
      </h1>
      <NewAboutComponent />
    </>
  );
};

const NewAboutComponent = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "red",
    fontSize: 20,
  };
  return (
    <>
      <h2 style={myStyle}>
        This is my New About Component inside of my Normal About Component
      </h2>
      <h1>Lorem ipsum dolor sit amet.</h1>
    </>
  );
};

export const NewAboutComponentII = () => {
  return (
    <>
      <h3>
        This is my about component created in my About Component but exported to
        the Home Component
      </h3>
    </>
  );
};

export default About;
