/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create a row object with the RowElement type
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert a row and get the row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with age field
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

// Update the row and delete it
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
