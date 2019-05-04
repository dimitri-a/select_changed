/*eslint-disable*/
import React, { Component } from "react";
import DebtType from "./DebtType";
import mockOptions from "./mockData.json";
import ClearDebtType from "./ClearDebt";
import { reduxForm, formValueSelector, Field } from "redux-form";

export default class FacilityDetails extends Component {
  render() {
    const {
      debtType,
      newLimit,
      handleChangeDebtType,
      CLEARDEBT_TYPE
    } = this.props;
    return (
      <div>
        <DebtType
          options={mockOptions.DEBT_TYPE}
          handleChangeDebtType={handleChangeDebtType}
        />
        {(debtType === "1" || debtType === "2") && (
          <ClearDebtType options={CLEARDEBT_TYPE} />
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
