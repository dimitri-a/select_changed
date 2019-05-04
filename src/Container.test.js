import React from 'react'
import  {shallow, configure } from 'enzyme'
import Container  from './Container'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Container select visibility tests | 128, 129, 312', () => {
   
 
    it('should default newlimit to zero when debType is Clear close or Clear and convert | 312-ac3 ', () => {
        //when debtType is Clear close/Clear and convert
        const myComp = shallow(<Container/>);
        const result =myComp.instance().updateNewLimit("4",2000)
           //expect the result to  be 0
        expect(result).toEqual(0)
    });

    it('should default newlimit to currentLimit when debType is No Change, Variation, Disbursement Only | 312-ac3 ', () => {
        //when debtType is Clear close/Clear and convert
        const myComp = shallow(<Container/>);
        const result =myComp.instance().updateNewLimit("3",2000)
           //expect the result to  be 2000
        expect(result).toEqual(2000)
    });


    



  });
