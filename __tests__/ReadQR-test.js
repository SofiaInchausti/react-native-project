import 'react-native'
import React from 'react';
import {create,act} from 'react-test-renderer'
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import reducer from '../src/reducer/index'
import {render} from "@testing-library/react-native"
import ReadQR from "../screens/ReadQR"

import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'

const store=createStore(reducer,{status:'default'})

let component;
describe ("<ReadQR/>",()=>{
    beforeEach(()=>{
        component=render(<Provider store={store}><ReadQR/></Provider>)
    })
    it ('It should render',()=>{
        expect(component).toBeDefined();
        
    })
    it("it should render '<BarCodeScanned/>'", () => {
        expect(component.queryByTestId('scanner')).toBeDefined()
    })
    it ('It should render a <Button/> after the first scan',()=>{
        expect(component.queryAllByTestId('button').length).toEqual(0)
    })

})

