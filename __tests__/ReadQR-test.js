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
const tree=create(
    <Provider store={store}>
        <ReadQR/>
    </Provider>
)

// const mockStore = configureMockStore();

describe('ReadQR', () => {
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

// describe('ReadQR', () => {
//     let wrapper;
//   beforeEach(() => {
//     wrapper = mount(<Form />);
//   });
//   afterEach(() => {
//     jest.clearAllMocks();
//   });
// describe('ReadQR', () => {
// //   it('should render a startup component if startup is not complete', () => {
// //     const store = mockStore({
// //       qrs:[]
// //     });
//     const {qrs} =render(
//       <Provider store={store}>
//         <ReadQR />
//       </Provider>
//     )
//     expect(qrs).toEqual(undefined)
//   })
// })
// })
// const ReduxProvider = ({ children, reduxStore }) => (
//   <Provider store={reduxStore}>{children}</Provider>
// )

// describe ("<ReadQR />", ()=>{
//     beforeEach(() =>{
//         component= render (<ReadQR />);
//     });
//     it ("Renderiza correctament" , ()=>{
//         expect(component).toBeDefined()
        
//     }) 
// })


// it ('function and state test  care', ()=>{
//     const {getAllByText, getByPlaceholderText}=render (<ReduxProvider><ReadQR/></ReduxProvider>)
//     expect (getAllByText ("Empty List").length.toBe(1))
//     getByPlaceholderText('Type here...')
   
// })
// })