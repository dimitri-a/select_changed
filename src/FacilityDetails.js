/*eslint-disable*/
import React, { Component } from "react";
import DebtType from "./DebtType";
import mockOptions from "./mockData.json";
import ClearDebtType from "./ClearDebt";
import { reduxForm, formValueSelector, Field } from "redux-form";

export default class FacilityDetails extends Component {
  updateNewLimit = (selectedVal, currentLimit) => {
    if (selectedVal === "4" || selectedVal === "5") {
      return 0;
    }
    if (selectedVal === "0" || selectedVal === "3" || selectedVal === "7") {
      return currentLimit;
    }

    if (selectedVal === "1" || selectedVal === "2" || selectedVal === "6") {
      return "";
    }
  };
  render() {
    const { debtType, newLimit, handleChangeDebtType } = this.props;
    return (
      <div>
        <DebtType
          options={mockOptions.DEBT_TYPE}
          handleChangeDebtType={handleChangeDebtType}
        />
        {debtType}
        {(debtType === "1" || debtType === "2") && (
          <ClearDebtType options={mockOptions.CLEARDEBT_TYPE} />
        )}

        <Field name="currentLimit" component="input" type="number" />
        <Field
          name="newLimit"
          component="input"
          disabled={newLimit === 0}
          type="number"
        />
      </div>
    );
  }
}
