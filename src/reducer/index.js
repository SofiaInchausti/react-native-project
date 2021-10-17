var initialState = {
    qrs: [],
    
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_QR':
            console.log('red', action.payload)
            return {
                ...state,
                qrs: state.qrs.concat(action.payload),
            }
        }
    }