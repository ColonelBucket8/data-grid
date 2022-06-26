import { useState } from "react";
import DataGrid, { SelectCellFormatter, TextEditor } from "react-data-grid";
import AgDataGrid from "../components/AgDataGrid";
import { Workbook } from "@fortune-sheet/react";
import HeaderRowComponent from "../components/HeaderRowComponent";
import ColumnIndicatorComponent from "../components/ColumnIndicatorComponent";
import Spreadsheet from "react-spreadsheet";
import "@fortune-sheet/react/dist/index.css";

import styles from "../styles/Homepage.module.css";

const spreadSheetStyle = {
  fontSize: "24px",
  "& th .Spreadsheet__header": {
    backgroundColor: "red",
  },
};

const Homepage = () => {
  const [rows, setRows] = useState<Array<RowsInterface>>([
    {
      id: 0,
      title: "Example",
    },
    {
      id: 1,
      title: "Demo",
    },
  ]);

  const columns: readonly Column<RowsInterface>[] = [
    {
      key: "id",
      name: "ID",
    },
    {
      key: "title",
      name: "Title",
      editor: TextEditor,
    },
  ];

  const rowKeyGetter = (row: RowsInterface) => {
    return row.id;
  };

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
    [
      { value: "Vanilla" },
      { value: "Chocolate" },
      { value: "Vanilla" },
      { value: "Vanilla" },
      { value: "Vanilla" },
      { value: "Vanilla" },
      { value: "Vanilla" },
    ],
    [
      { value: "Vanilla" },
      { value: "Chocolate" },
      { value: "Vanilla" },
      { value: "Vanilla" },
      { value: "Vanilla" },
      { value: "Vanilla" },
      { value: "Vanilla" },
    ],
    [
      { value: "Vanilla" },
      { value: "Chocolate" },
      { value: "Vanilla" },
      { value: "Vanilla" },
      { value: "Vanilla" },
      { value: "Vanilla" },
      { value: "Vanilla" },
    ],
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
    <div className={styles.homepageContainer}>
      <Workbook data={[{ name: "Sheet1" }]} />
      <h1 className={styles.title}>THIS IS A HOMEPAGE</h1>
      <DataGrid
        columns={columns}
        rows={rows}
        onRowsChange={setRows}
        rowKeyGetter={rowKeyGetter}
      />
      <Spreadsheet
        data={data}
        ColumnIndicatorComponent={{
          column: 8,
          label: "test",
          selected: true,
          onSelect: (test, test2) => console.log(test),
        }}
        HeaderRow={HeaderRowComponent}
        style={spreadSheetStyle}
      />
    </div>
  );
};

export default Homepage;
