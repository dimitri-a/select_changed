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

    it('should disable the newlimit inputfield when newLimit is 0 | 312-ac3 ', () => {
        //when debtType is Clear close/Clear and convert
        const myComp = shallow(<MyContainer newLimit={0}/>);
        //find newLimit element
        const result = myComp.find('[name="newLimit"]');
        //expect the result to  be disabled
        expect(result.props().disabled ).toEqual(true)
    });    
    
    it('should default newlimit to zero when debType is Clear close or Clear and convert | 312-ac3 ', () => {
        //when debtType is Clear close/Clear and convert
        const myComp = shallow(<MyContainer/>);
        const result =myComp.instance().updateNewLimit("4",2000)
           //expect the result to  be 0
        expect(result).toEqual(0)
    });

    it('should default newlimit to currentLimit when debType is No Change, Variation, Disbursement Only | 312-ac3 ', () => {
        //when debtType is Clear close/Clear and convert
        const myComp = shallow(<MyContainer/>);
        const result =myComp.instance().updateNewLimit("3",2000)
           //expect the result to  be 2000
        expect(result).toEqual(2000)
    });


  });
