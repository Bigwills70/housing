function Conditional() {
  const truthy = true;
  const gender = "boy";
  return (
    <>
      <div>{gender == "boy" ? "I am a Boy" : "She is a girl"}</div>
      <h2>{!truthy && "The statement is very Correct"}</h2>
      <h3>{truthy && "This is The Correct Statement"}</h3>
      {truthy ? <SubConditionalI /> : <SubConditionalII />}
      {truthy && <SubConditionalII />}
    </>
  );
}

const SubConditionalI = () => {
  return (
    <>
      <h2>This is a SubCondditional Component 1</h2>
    </>
  );
};

const SubConditionalII = () => {
  return (
    <>
      <h2>This is a SubCondditional Component 2</h2>
    </>
  );
};
export default Conditional;
