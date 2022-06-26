import { AgGridReact } from "ag-grid-react";
import { ColumnDefsInterface, RowData } from "../interfaces";
import "ag-grid-community/dist/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/dist/styles/ag-theme-alpine.css"; // Optional theme CSS

const AgDataGrid = () => {
  const columnDefs = [
    {
      field: "make",
    },
    {
      field: "model",
    },
    {
      field: "price",
    },
  ];

  const rowData: RowData[] = [
    {
      make: "toyota",
      model: "Focus",
      price: 4000,
    },
  ];

  return (
    <div className="ag-theme-alpha" style={{ height: 600, width: 800 }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData}></AgGridReact>
    </div>
  );
};

export default AgDataGrid;
