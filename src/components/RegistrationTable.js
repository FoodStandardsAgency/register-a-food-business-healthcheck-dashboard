import React from "react";
import Table from '@govuk-react/table';
import "./RegistrationTable.css";

const RegistrationTable = ({ councils = [] }) => {
  const tableRows = [];
  councils.forEach(council => {
    tableRows.push((
      <Table.Row key={council.name}>
        <Table.CellHeader>{council.name}</Table.CellHeader>
        <Table.Cell>{council.count}</Table.Cell>
      </Table.Row>
    ))
  });
  const registrationTable = (
    <React.Fragment>
      {tableRows}
    </React.Fragment>
  );
  return (
    <div className="flex-container">
      <div className="flex-box"></div>
      <div className="flex-box">
        <h2> Registration stats </h2>
        <Table caption="Number of registrations per council" body={registrationTable} />
      </div> 
      <div className="flex-box"></div> 
    </div>
  );
};

export default RegistrationTable;