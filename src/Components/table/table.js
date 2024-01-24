import React from 'react';


const formDetails = [
  {
    id: "1",
    Company: "TCS",
    Price: "$1.2",
    Change: "+2.01",
    ChangePercentile: "+0.36%",
  },
  {
    id: "2",
    Company: "Infosys",
    Price: "$2.9",
    Change: "3.65",
    ChangePercentile: "+1.26%",
  },
  {
    id: "3",
    Company: "IBM",
    Price: "$1.9",
    Change: "0.8",
    ChangePercentile: "+1.26%",
  },
  {
    id: "4",
    Company: "Cognizant",
    Price: "$2.3",
    Change: "1.8",
    ChangePercentile: "+2.6%",
  },
];

const TableItem = () => {
  return (
    <>
      <table className="th" id="table">
      <thead className="th">
        <tr className="th">
          <th className="th">Company</th>
          <th className="th">Price</th>
          <th className="th">Change</th>
          <th className="th">Change %</th>
        </tr>
        </thead>

        <tbody>
        {formDetails.map((val) => (
          <tr key={val.id} className="th">
            <td className="th">{val.Company} </td>
            <td className="th"> {val.Price}</td>
            <td className="th">{val.Change} </td>
            <td className="th"> {val.ChangePercentile} </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
};
export default TableItem;
