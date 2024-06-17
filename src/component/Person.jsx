import NewPerson from "./NewPerson";
import NewPersonII from "./NewPersonII";

function Person() {
  const Human = { name: "Elvin", email: "sas@mail.com", username: "Osasco" };
  return (
    <div>
      <NewPerson person={Human} />
      <NewPersonII human={Human} />
    </div>
  );
}

export default Person;
