import React from "react";

const ColumnIndicatorComponent = () => {

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
        <th style={{backgroundColor: "blac"}}>TEST</th>
      ))}
    </React.Fragment>
  );
};

export default ColumnIndicatorComponent;
