import React from 'react'
import  {shallow, configure } from 'enzyme'
import FacilityDetails  from './FacilityDetails'
import Adapter from 'enzyme-adapter-react-16';
import ClearDebt from "./ClearDebt";
configure({ adapter: new Adapter() });

describe('Facilitydetails select visibility tests | 128, 129, 312', () => {
    it('should show the second select component', () => {
         //when the debtType is 1 or 2 it should  be visible
        const myComp = shallow(<FacilityDetails debtType={"1"}/>);
        //find second select in container
        const result = myComp.find(ClearDebt);
        //expect the options property to have a length of 2 : Customer/Loan proceeds
        expect(result.props().options.length ).toEqual(2)
    });

    it('should NOT show the second select component', () => {
        //when the debtType is not 1 or 2 it should not be visible
        const myComp = shallow(<FacilityDetails debtType={"3"}/>);
        //find second select in container
        const result = myComp.find(ClearDebt);
        //expect the result to be empty
        expect(result.isEmptyRender() ).toEqual(true)
    });

    it('should disable the newlimit inputfield when newLimit is 0 | 312-ac3 ', () => {
        //when debtType is Clear close/Clear and convert
        const myComp = shallow(<FacilityDetails newLimit={0}/>);
        //find newLimit element
        const result = myComp.find('[name="newLimit"]');
        //expect the result to  be disabled
        expect(result.props().disabled ).toEqual(true)
    });    
    




  });
