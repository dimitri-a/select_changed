import React from "react";

const DebtType = ( options) => {
console.log(options)
  return (
    <select>
      {options.options.DEBT_TYPE.map(option => {
        return <option>{option.label}</option>;
      })}
    </select>
  );
};

export default DebtType;
