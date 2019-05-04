import React, { Component } from "react";
import DebtType from "./DebtType";
import mockOptions from "./mockData.json";
import ClearDebtType from "./ClearDebt";
import { reduxForm, formValueSelector, Field } from "redux-form";
import { connect } from "react-redux";
import FacilityDetails from "./FacilityDetails";

 export class MyContainer extends Component {

  handleChangeDebtType = event => {
    console.log("handleChangeDebtType value", event.target.value);
    this.props.change("debtType", event.target.value);

    const newValue = this.updateNewLimit(event.target.value,this.props.currentLimit)

    this.props.change("newLimit", newValue);
  };

  


  render() {
  const { debtType, newLimit } = this.props;

    return (
      <div>
        <FacilityDetails
        debtType={debtType}
        newLimit={newLimit}
        mockOptions={mockOptions}
        handleChangeDebtType={this.handleChangeDebtType}
      
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
