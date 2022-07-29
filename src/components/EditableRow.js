import React from "react";

import classes from "./EditableRow.module.css";

const EditableRow = ({ editedData, handleEditFormChange, onSave }) => {
  return (
    <tr>
      <td>
        <input
          className={classes.editableRow_input1}
          type="text"
          name="from"
          required="required"
          placeholder="Enter valute"
          value={editedData.from}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className={classes.editableRow_input2}
          type="text"
          name="to"
          required="required"
          placeholder="Enter valute"
          value={editedData.to}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className={classes.editableRow_input3}
          type="text"
          name="amount"
          required="required"
          placeholder="Amount"
          value={editedData.amount}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className={classes.editableRow_input4}
          name="convertedAmount"
          required="required"
          placeholder="Enter amount"
          value={editedData.convertedAmount}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button className={classes.save_button} onClick={onSave}>
          Save
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
