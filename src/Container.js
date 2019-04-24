import React, { Component } from 'react';
import DebtType from './DebtType';
import mockOptions from './mockData.json'

class Container extends Component {
    render() {
        return (
            <div>
                <DebtType options={mockOptions}/>
            </div>
        );
    }
}

export default Container;