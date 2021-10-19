import reducer from '../src/reducer/index';
import {
  addQR,
  filterSearch,
  removeItem
} from '../src/actions/index';

describe('Reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      qrs: [],
      filter: []
    }
  })

  it('It should return the initial state', () => {
    const actual = reducer(initialState, {})
    const stay= initialState
    expect(actual).toEqual(stay)
  })


  it('It should add a QR when action type is "ADD_QR"', () => {
    const payload = 'text'
    expect(reducer(initialState, addQR(payload))).toEqual({
      qrs: ['TEXT'],
      filter: ['TEXT']
    })
  })
  it('It should not duplicate QRs when action type is "ADD_QR"', () => {
    const payload = 'text'
    let state = {
      qrs: ['TEXT'],
      filter: ["TEXT"]
    }
    expect(reducer(state, addQR(payload))).toEqual({
      qrs: ['TEXT'],
      filter: ['TEXT']
    })
  })

  it('It should remove a selected QR when the action type is "REMOVE"', () => {
    const payload = 'QR'
    const someState = {
      qrs: ['QR'],
      filter: ['QR']
    }
    let stay = {
      qrs: ['QR'],
      filter: []
    }
    expect(reducer(someState, removeItem(payload))).toEqual(stay)
  })
  it('It should filter a QR when the action type is "FILTER"', () => {
    const payload = 't'
    const someState = {
      qrs: ['FIRST QR', 'SECOND QR', 'THIRD QR'],
      filter: ['FIRST QR', 'SECOND QR', 'THIRD QR']
    }
    let stay = {
      qrs: ['FIRST QR', 'SECOND QR', 'THIRD QR'],
      filter: ['FIRST QR', 'THIRD QR']
    }
    expect(reducer(someState, filterSearch(payload))).toEqual(stay)
  })
  it('It should filter with words in camel case', () => {
    const payload = 'ConD'
    const someState = {
      qrs: ['FIRST QR', 'SECOND QR', 'THIRD QR'],
      filter: ['FIRST QR', 'SECOND QR', 'THIRD QR']
    }
    let stay = {
      qrs: ['FIRST QR', 'SECOND QR', 'THIRD QR'],
      filter: ['SECOND QR']
    }
    expect(reducer(someState, filterSearch(payload))).toEqual(stay)
  })

})