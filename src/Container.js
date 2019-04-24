import React, { Component } from "react";
import DebtType from "./DebtType";
import mockOptions from "./mockData.json";
import ClearDebtType from "./ClearDebt";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

class MyContainer extends Component {
  handleChangeDebtType= () => {
    //save selected debttype to store
    console.log("handleChangeDebtType");
  }

  render() {
    return (
      <div>
        <DebtType
          options={mockOptions.DEBT_TYPE}
          handleChangeDebtType={this.handledChangeDebtType}
        />
        <ClearDebtType options={mockOptions.CLEARDEBT_TYPE} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //selectedDebtType:
});

MyContainer = connect(
  mapStateToProps,
  undefined
)(MyContainer);

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(MyContainer);

//export default ;
