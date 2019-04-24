import React from "react";


const handleChangeDebtType = () =>
{
    //save selected debttype to store
    console.log('handleChangeDebtType');
} 
const DebtType = ( options) => {
console.log(options)
  return (
    <select onChange={handleChangeDebtType}>
      {options.options.map(option => {
        return <option>{option.label}</option>;
      })}
    </select>
  );
};

export default DebtType;
