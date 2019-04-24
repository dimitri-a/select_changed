import React, { Component } from 'react';
import DebtType from './DebtType';
import mockOptions from './mockData.json'
import ClearDebtType from './ClearDebt'
class Container extends Component {
    render() {
        return (
            <div>
                <DebtType options={mockOptions.DEBT_TYPE}/>
                <ClearDebtType options={mockOptions.CLEARDEBT_TYPE}/>
            </div>
        );
    }
}

export default Container;