/*eslint-disable*/
import React, { Component } from "react";
import DebtType from "./DebtType";
import mockOptions from "./mockData.json";
import ClearDebtType from "./ClearDebt";
import { reduxForm,formValueSelector } from "redux-form";
import { connect } from "react-redux";

class MyContainer extends Component {
  handleChangeDebtType = event => {
    //save selected debttype to store
    console.log("handleChangeDebtType value", event.target.value);
    //this.props.setDebtType(event.target.value);
    this.props.change("debtType", event.target.value);
  };

  render() {
    const {debtType} = this.props;

    console.log('debtType',debtType)
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
      </div>
    );
  }
}

const selector = formValueSelector('facilitiesForm');
const mapStateToProps = state => ({
  debtType: selector(state, "debtType")
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
