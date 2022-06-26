export interface ColumnsInterface {
  key: string;
  name: string;
  editor?: any;
}

export interface RowsInterface {
  id: number | string;
  title: string;
}

export interface ColumnDefsInterface {
  field: string;
}

export interface RowData {
  make: string;
  model: string;
  price: number;
}
