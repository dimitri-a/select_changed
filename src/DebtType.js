import React from "react";

const DebtType = ( options) => {
console.log(options)
  return (
    <select>
      {options.options.map(option => {
        return <option>{option.label}</option>;
      })}
    </select>
  );
};

export default DebtType;
