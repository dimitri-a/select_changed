import React, { Component } from "react";
import DebtType from "./DebtType";
import mockOptions from "./mockData.json";
import ClearDebtType from "./ClearDebt";
import { reduxForm, formValueSelector, Field } from "redux-form";
import { connect } from "react-redux";

 export class MyContainer extends Component {

  handleChangeDebtType = event => {
    console.log("handleChangeDebtType value", event.target.value);
    this.props.change("debtType", event.target.value);

    const newValue = this.updateNewLimit(event.target.value,this.props.currentLimit)

    this.props.change("newLimit", newValue);
  };

  updateNewLimit = (selectedVal,currentLimit) =>{
    if (selectedVal=== "4" || selectedVal=== "5") {
      return 0;
    }
    if (
      selectedVal=== "0" ||
      selectedVal=== "3" ||
      selectedVal=== "7"
    ) {
      return currentLimit;
    }

    if (
      selectedVal=== "1" ||
      selectedVal=== "2" ||
      selectedVal=== "6"
    ) {
      return "";
    }
  }


  render() {
  const { debtType, newLimit } = this.props;

    return (
      <div>
        <DebtType
          options={mockOptions.DEBT_TYPE}
          handleChangeDebtType={this.handleChangeDebtType}
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

const selector = formValueSelector("facilitiesForm");
const mapStateToProps = state => ({
  debtType: selector(state, "debtType"),
  currentLimit: selector(state, "currentLimit"),
  newLimit: selector(state, "newLimit")
});

const ConnectedContainer = connect(
  mapStateToProps,
  undefined
)(MyContainer);

export default reduxForm({
  form: "facilitiesForm" // a unique identifier for this form
})(ConnectedContainer);
