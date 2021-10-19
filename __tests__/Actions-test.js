import {addQR,filterSearch,removeItem} from "../src/actions/index"

it('It should return an action with the properties type "ADD_QR" and a payload, its value is received by argument', () => {
    expect(addQR('text')).toEqual({
        type:'ADD_QR',payload:'text'
    })
  })
it('It should return an action with the properties type "FILTER" and a payload, its value is received by argument', () => {
    expect(filterSearch('text')).toEqual({
        type:'FILTER',payload:'text'
    })
  })
  it('It should return an action with the properties type "REMOVE" and a payload, its value is received by argument', () => {
    expect(removeItem('text')).toEqual({
        type:'REMOVE',payload:'text'
    })
  })


