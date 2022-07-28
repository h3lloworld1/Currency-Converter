import React from "react";

import classes from "./HistoryTable.module.css";

const HistoryTable = (props) => {
  const { data } = props;

  return (
    <div className={classes.table_container}>
      <h1>Convert History</h1>
      <table>
        <thead>
          <tr>
            <th>Converted From</th>
            <th>Converted To</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((convertedData, i) => (
            <tr key={i}>
              <td>{convertedData.from}</td>
              <td>{convertedData.to}</td>
              <td>{convertedData.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
