import { useState } from "react";
import DataGrid from "react-data-grid";
import { SelectCellFormatter } from "react-data-grid";
import {
  ColumnsInterface,
  RowsInterface,
  RowKeyGetterInterface,
} from "../interfaces";
import styles from "../styles/Homepage.module.css";

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

  const columns: Array<ColumnsInterface> = [
    {
      key: "id",
      name: "ID",
    },
    {
      key: "title",
      name: "Title",
    },
  ];

  const rowKeyGetter = (row: RowKeyGetterInterface) => {
    return row.id;
  };

  const handleChange = (value:boolean, isShiftClick:boolean): void => {};

  return (
    <div className={styles.homepageContainer}>
      <h1 className={styles.title}>THIS IS A HOMEPAGE</h1>
      <DataGrid
        columns={columns}
        rows={rows}
        onRowsChange={setRows}
        rowKeyGetter={rowKeyGetter}
      />
      {/* <SelectCellFormatter */}
      {/*   value={true} */}
      {/*   isCellSelected={true} */}
      {/*   onChange={(value, isShiftClick) => handleChange(value, isShiftClick)} */}
      {/* /> */}
    </div>
  );
};

export default Homepage;
