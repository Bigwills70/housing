function NewPerson({ person }) {
  console.log(person);
  return (
    <div>
      <h1>
        My name is {person.name} i am a software Engineer with my email located
        at my CV which is {person.email} with my username {person.username}
      </h1>
    </div>
  );
}

export default NewPerson;
