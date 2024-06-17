function Events() {
  const takeAshot = () => {
    alert("He took and scored the goal");
  };
  const takeAshotWithTheParenthesis = () => {
    alert("He took the shot but missed the goal");
  };
  const addNumbers = (a, b) => {
    alert(a + b);
  };

  const whatIsMyName = () => {
    alert("Osas");
  };
  return (
    <div>
      <button onClick={takeAshot}>ShootWithoutTheParenthesis</button>
      <button onClick={() => takeAshotWithTheParenthesis()}>
        ShootWithTheParenthesis
      </button>
      <button onClick={() => addNumbers(2, 4)}>Calculate</button>
      <button onMouseOver={whatIsMyName}>Call my Name</button>
    </div>
  );
}

export default Events;
