import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import EditableRow from "./EditableRow";

import classes from "./HistoryTable.module.css";

const HistoryTable = (props) => {
  const [editState, setEditState] = useState(null);

  const [editedData, setEditedData] = useState({
    from: "",
    to: "",
    amount: Number,
    convertedAmount: Number,
  });

  const { data } = props;

  // რედაქსიდან მიღებულ მონაცემებს გავუკეთებთ დესტრუქტურიზაციას და data - ს მაგივრად გავმეპავ reduxData - ს
  const reduxData = useSelector((state) => state.data.someData);

  const handleEditClick = (event, i) => {
    event.preventDefault();
    setEditState(i);
    const formValues = {
      from: reduxData.from,
      to: reduxData.to,
      amount: reduxData.amount,
      convertedAmount: reduxData.convertedAmount,
    };

    setEditedData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fromField = event.target.getAttribute("from");
    const fieldValue = event.target.value;

    const newFormData = { ...editedData };
    newFormData[fromField] = fieldValue;

    setEditedData(newFormData);
  };

  const onSave = () => {
    setEditState(null);
  };

  return (
    <div className={classes.table_container}>
      <h1>Convert History</h1>
      <table>
        <thead>
          <tr>
            <th>Converted From</th>
            <th>Converted To</th>
            <th>Amount</th>
            <th>Converted Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((convertedData, i) => (
            <Fragment key={i}>
              {editState === i ? (
                <EditableRow
                  editedData={editedData}
                  handleEditFormChange={handleEditFormChange}
                  onSave={onSave}
                />
              ) : (
                <tr>
                  <td>{convertedData.from}</td>
                  <td>{convertedData.to}</td>
                  <td>{convertedData.amount}</td>
                  <td>
                    {Math.round(convertedData.convertedAmount * 100) / 100}
                  </td>
                  <td className={classes.actions}>
                    <button
                      className={classes.edit_button}
                      onClick={(event) => handleEditClick(event, i)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
