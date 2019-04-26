/*eslint-disable*/
import React, { Component } from "react";
import DebtType from "./DebtType";
import mockOptions from "./mockData.json";
import ClearDebtType from "./ClearDebt";
import { reduxForm, formValueSelector, Field } from "redux-form";
import { connect } from "react-redux";

class MyContainer extends Component {
  handleChangeDebtType = event => {
    //save selected debttype to store
    console.log("handleChangeDebtType value", event.target.value);
    //this.props.setDebtType(event.target.value);
    this.props.change("debtType", event.target.value);
    if (event.target.value ==='1' || event.target.value ==="2"
    )
    {
    this.props.change("newLimit",0)
    }
  };

  render() {
    const { debtType ,newLimit} = this.props;

    console.log("debtType", debtType);

    console.log("newLimit",newLimit)


    return (
      <div>
        <DebtType
          options={mockOptions.DEBT_TYPE}
          handleChangeDebtType={this.handleChangeDebtType}
        />

        {(debtType === "1" || debtType === "2") && (
          <ClearDebtType options={mockOptions.CLEARDEBT_TYPE} />
        )}

        <Field name="newLimit" component="input" disabled={newLimit ===0} type="number" />

      </div>
    );
  }
}

const selector = formValueSelector("facilitiesForm");
const mapStateToProps = state => ({
  debtType: selector(state, "debtType"),
  newLimit: selector(state,"newLimit")
});

// const mapDispatchToProps = state => dispatch => ({
//   //selectedDebtType:
//   setDebtType: type => dispatch(change('facilityForm','debtType',type))
// });

MyContainer = connect(
  mapStateToProps,
  undefined
)(MyContainer);

export default reduxForm({
  form: "facilitiesForm" // a unique identifier for this form
})(MyContainer);

//export default ;
