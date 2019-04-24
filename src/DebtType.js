import React from "react";



const DebtType = (options, handleChangeDebtType) => {
  console.log(options);
  return (
    <select onChange={handleChangeDebtType}>
      {options.options.map(option => {
        return <option>{option.label}</option>;
      })}
    </select>
  );
};

export default DebtType;
