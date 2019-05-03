import React from 'react'
import  {shallow, configure } from 'enzyme'
import {MyContainer}  from './Container'
import Adapter from 'enzyme-adapter-react-16';
import ClearDebt from "./ClearDebt";
configure({ adapter: new Adapter() });

describe('Container select visibility tests', () => {
    it('should show the second select component', () => {
         //when the debtType is 1 or 2 it should  be visible
        const myComp = shallow(<MyContainer debtType={"1"}/>);
        //find second select in container
        const result = myComp.find(ClearDebt);
        //expect the options property to have a length of 2 : Customer/Loan proceeds
        expect(result.props().options.length ).toEqual(2)
    });

    it('should NOT show the second select component', () => {
        //when the debtType is not 1 or 2 it should not be visible
        const myComp = shallow(<MyContainer debtType={"3"}/>);
        //find second select in container
        const result = myComp.find(ClearDebt);
        //expect the result to be empty
        expect(result.isEmptyRender() ).toEqual(true)
    });
  });
