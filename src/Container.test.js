import React from 'react'
import  {shallow, configure } from 'enzyme'
import {MyContainer}  from './Container'
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('Test Button component', () => {
    it('Test click event', () => {
        const defaultProps = {debtType:"1"}
        const myComp = shallow(<MyContainer {...defaultProps}/>);
        //myComp.find('DebtType').simulate('click');

        const result = myComp.find('ClearDebtType')        
        console.log('result',result)

        // expect(result.length).toEqual(0)
    });
  });

// describe('Container', () => {
//   const defaultProps = {debtType:"1"}
//   const wrapper = shallow(<Container {...defaultProps} />)

//   it('cleardebttype should show', () => {

//     wrapper.find('DebtType').simulate('click');

//     const result = wrapper.find('ClearDebtType')

//     expect(result.length).toEqual(0)


//   })
// })
