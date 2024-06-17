function NewHome() {
  return (
    <>
      <h1>This is my New Home Component</h1>
      <HomeII />
    </>
  );
}

const HomeII = () => {
  const name = "Alvin";
  return (
    <>
      <h4>my name is {name}</h4>
    </>
  );
};

export const NewHomeIII = () => {
  return (
    <>
      <h1>Thank GOD its working</h1>
    </>
  );
};

export default NewHome;
