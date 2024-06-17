function Props() {
  const name = "Arial";
  const gender = "Female";
  return (
    <>
      <div>{name} </div>
      <PropII myName={name} />
      <PropIII gender={gender} />
    </>
  );
}

const PropII = (p) => {
  console.log(p);
  return (
    <>
      <h1>The name is also {p.myName}</h1>
    </>
  );
};

const PropIII = ({ gender }) => {
  return (
    <>
      <h1>her gender is {gender}</h1>
    </>
  );
};

export default Props;
