import React from "react";

const DebtType = ({options, handleChangeDebtType}) => {
  console.log(options);

  return (
    <select onChange={handleChangeDebtType}>
      {options.map(option => {
        return <option value={option.value}>{option.label}</option>;
      })}
    </select>
  );
};

export default DebtType;
