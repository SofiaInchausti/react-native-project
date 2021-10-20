import 'react-native'
import React from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import reducer from '../src/reducer/index'
import {render} from "@testing-library/react-native"
import QRList from "../src/components/screens/QRList"

const store=createStore(reducer,{status:'default'})

let component;

describe ("<QRList/>",()=>{
    beforeEach(()=>{
        component=render(<Provider store={store}><QRList/></Provider>)
    })
    it ('It should render',()=>{
        expect(component).toBeDefined();
        
    })
    it("it should render a text when QR list is empty", () => {
        expect(component.queryByTestId('default-text')).toBeDefined()
    })
    it ('It should render a <FlatList /> when QR data exist',()=>{
        expect(component.queryAllByTestId('list').length).toEqual(0)
    })
    it ('It should render an input search when QR data exist',()=>{
        expect(component.queryAllByTestId('qrs-container').length).toEqual(0)
    })

})



