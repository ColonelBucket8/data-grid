import React from "react";

const HeaderRowComponent = () => {

  const data = [
    [
      { value: "Vanilla" },
      { value: "Chocolate" },
      { value: "Vanilla" },
      { value: "Vanilla" },
      { value: "Vanilla" },
      { value: "Vanilla" },
      { value: "Vanilla" },
    ],
  ];
  return (
    <React.Fragment>
      {data[0].map(item => (
        <th style={{backgroundColor: "red"}}>TEST</th>
      ))}
      <th>Test</th>
      <th>Test</th>
      <th>Test</th>
      <th>Test</th>
      <th>Test</th>
      <th>Test</th>
    </React.Fragment>
  );
};

export default HeaderRowComponent;
