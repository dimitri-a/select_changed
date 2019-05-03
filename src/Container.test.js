import React from 'react'
import  {shallow, configure } from 'enzyme'
import {MyContainer}  from './Container'
import Adapter from 'enzyme-adapter-react-16';
import ClearDebt from "./ClearDebt";
configure({ adapter: new Adapter() });

describe('Container component', () => {
    it('should show the second select component', () => {
        const myComp = shallow(<MyContainer debtType={"1"}/>);
        //question: how can I find the second select in the browser?
        //https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html
        const result = myComp.find(ClearDebt);
        console.log('result',result.props().options.length)
        expect(result.length ).toEqual(1)
    });
  });
