import 'react-native'
import React from 'react';
import {render} from "@testing-library/react-native"
import QRList from "../screens/QRList"

import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'



const mockStore = configureMockStore();

describe('QRList', () => {
    beforeEach(() =>{
                component= render (<QRList />);
            });
    it('should render a startup component if startup is not complete', () => {
      const store = mockStore({
        qrs:[]
      });
      const {qrs} =render(
        <Provider store={store}>
          <QRList />
        </Provider>
      )
      expect(qrs).toEqual(undefined)
    })
  
    // it ("Renderiza correctament" , ()=>{
    //     expect(component).toBeDefined()
      
    // }) 
})