/*eslint-disable*/
import React, { Component } from "react";
import DebtType from "./DebtType";
import mockOptions from "./mockData.json";
import ClearDebtType from "./ClearDebt";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

class MyContainer extends Component {
    handleChangeDebtType = event => {
      //save selected debttype to store
      console.log("handleChangeDebtType value",event.target.value);
     // this.props.setDebtType(event.target.value);

    };
  
    render() {
      return (
        <div>
          <DebtType
            options={mockOptions.DEBT_TYPE}
            handleChangeDebtType={this.handleChangeDebtType}
          />
          <ClearDebtType options={mockOptions.CLEARDEBT_TYPE} />
        </div>
      );
    }
  }
  

const mapDispatchToProps = state => ({
  //selectedDebtType:
  setDebtType: type => dispatch(change('facilityForm','debtType',type))
});

MyContainer = connect(
  undefined,
  mapDispatchToProps
)(MyContainer);

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(MyContainer);

//export default ;
