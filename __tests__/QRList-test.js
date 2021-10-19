import 'react-native'
import React from 'react';
import {create,act} from 'react-test-renderer'
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import reducer from '../src/reducer/index'
import {render} from "@testing-library/react-native"
import QRList from "../screens/QRList"

import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'

const store=createStore(reducer,{status:'default'})
const tree=create(
    <Provider store={store}>
        <QRList/>
    </Provider>
)

// const mockStore = configureMockStore();

describe('QRList', () => {
    // beforeEach(() =>{
    //             component= render (<QRList />);
    //         });
    // //it('should render a startup component if startup is not complete', () => {
    //   const store = mockStore({
    //     qrs:[]
    //   }); 
    //   const {qrs} =render(
    //     <Provider store={store}>
    //       <QRList />
    //     </Provider>
    //   )
    //   expect(qrs).toEqual(undefined)
    // })
  
    it ("Renderiza correctament" , ()=>{
        expect(tree).toBeDefined()
      
    }) 
})