import React from 'react';

export default function Fruits({ fruits }) {
  console.log("-------->" + JSON.stringify(fruits));

  return (
    <div>
      <h3>Fruits List:</h3>
      <ul>
        {fruits?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}