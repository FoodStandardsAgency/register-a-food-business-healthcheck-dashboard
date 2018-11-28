import React from "react";
// import "./StatusTable.css";

export const StatusTable = ({ data }) => {
  const listItems = [];
  for (let key in data) {
    let styles = {};
    if (data[key] === "false") {
      styles = { color: "red" };
    } else if (key.includes("Failed") && data[key] !== "0") {
      styles = { color: "red" };
    } else {
      styles = { color: "green" };
    }
    listItems.push(
      <tr key={key} style={styles}>
        <td>{key}</td>
        <td>{data[key]}</td>
      </tr>
    );
  }
  return (
    <table>
      <tbody>{listItems}</tbody>
    </table>
  );
};
