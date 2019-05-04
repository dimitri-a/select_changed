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

    it('should default newlimit to zero 312-ac3 ', () => {
        //when debtType is Clear close/Clear and convert
        const myComp = shallow(<MyContainer newLimit={0}/>);
        //find newLimit element
        const result = myComp.find('[name="newLimit"]');
        //expect the result to  be disabled
        expect(result.props().disabled ).toEqual(true)
    });    
    
    xit('should default newlimit to zero 312-ac3 ', () => {
        //when debtType is Clear close/Clear and convert
        const myComp = shallow(<MyContainer newLimit={0}/>);
        //find newLimit element
        const result = myComp.find('[name="newLimit"]');
        //expect the result to  be disabled
        console.log(result.props())
        expect(result.props().value ).toEqual(true)
    });


  });
