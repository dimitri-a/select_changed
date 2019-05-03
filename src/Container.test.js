import React from 'react'
import  {shallow, configure } from 'enzyme'
import {MyContainer}  from './Container'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Test Button component', () => {
    it('should show second select component', () => {
        const defaultProps = {debtType:"1"}
        const myComp = shallow(<MyContainer {...defaultProps}/>);
        const result = myComp.find('ClearDebtType')        
        console.log('result',result)
        // expect(result.length).toEqual(0)
    });
  });
