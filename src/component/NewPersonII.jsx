import React from "react";

function NewPersonII({ human }) {
  return (
    <div>
      {" "}
      <h1>
        My name is {human.name} i am a software Engineer with my email located
        at my CV which is {human.email} with my username {human.username}
      </h1>
    </div>
  );
}

export default NewPersonII;
