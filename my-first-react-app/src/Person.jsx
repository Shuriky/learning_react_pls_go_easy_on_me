import { useState } from "react"

export default function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const name = person.name;
  const age = person.age;

  const handleIncreaseAge = () => {
    // console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    // console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  // console.log("during render: ", person);

  const handleName = (newName) => {
    setPerson({ ...person, name: newName});
  }

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <input
          type="text" 
          value={name}
          onChange={(e) => handleName(e.target.value)}
        />
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}