// import { useState } from 'react';
// import './App.css';

// const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

// function App() {
//   const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
//   const [changes, setChanges] = useState(0);

//   const onButtonClick = (color) => () => {
//     setBackgroundColor(color);
//     setChanges(changes + 1);
//   };

//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor,
//       }}
//     >
//       <h1>{changes}</h1>

//       {COLORS.map((color) => (
//         <button
//           type="button"
//           key={color}
//           onClick={onButtonClick(color)}
//           className={backgroundColor === color ? 'selected' : ''}
//         >
//           {color}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import './App.css';
function Person() {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Snow',
    age: 100,
  });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleFirstNameChange = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  return (
    <>
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button> <br />
      <Input
        label="First Name"
        value={person.firstName}
        onChange={handleFirstNameChange}
      />{' '}
      <br />
      <Input
        label="Last Name"
        value={person.lastName}
        onChange={handleLastNameChange}
      />
    </>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label>
      {label} <input value={value} onChange={onChange} />
    </label>
  );
}

export default Person;
