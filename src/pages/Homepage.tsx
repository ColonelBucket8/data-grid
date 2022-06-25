import { useState } from "react";
import DataGrid from "react-data-grid";
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

  return (
    <div className={styles.homepageContainer}>
      <h1 className={styles.title}>THIS IS A HOMEPAGE</h1>
      <DataGrid
        columns={columns}
        rows={rows}
        onRowsChange={setRows}
        rowKeyGetter={rowKeyGetter}
      />
    </div>
  );
};

export default Homepage;
