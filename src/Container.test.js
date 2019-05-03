import React from 'react'
import  {shallow, configure } from 'enzyme'
import {MyContainer}  from './Container'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Container component', () => {
    it('should show the second select component', () => {
        const defaultProps = {debtType:"1"}
        const myComp = shallow(<MyContainer debtType={1}/>);
        //question: how can I find the second select in the browser?
        //https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html
        const result = myComp.find('#root > div > div > select:nth-child(2)')   
        console.log('result',result.length)
        expect(result.length ).toEqual(1)
    });
  });
