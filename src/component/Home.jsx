import About, { NewAboutComponentII } from "./About";

const Home = () => {
  const name = "Alvin";

  return (
    <div>
      <h1
        style={{
          backgroundColor: "rebeccapurple",
          color: "white",
          width: "100%",
        }}
      >
        This is my Home Component, my name is {name}{" "}
      </h1>
      <NewAboutComponentII />
      <About myname={name} />
    </div>
  );
};

export default Home;
