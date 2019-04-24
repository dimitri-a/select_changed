import React from "react";

const ClearDebt = ( options) => {
console.log(options)
  return (
    <select>
      {options.options.map(option => {
        return <option>{option.label}</option>;
      })}
    </select>
  );
};

export default ClearDebt;
