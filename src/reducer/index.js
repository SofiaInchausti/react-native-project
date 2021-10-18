var initialState = {
    qrs: [],
    filters: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_QR':
            return {
                ...state,
                filter: state.qrs.concat(action.payload),
                    qrs: state.qrs.concat(action.payload)
            }
            case 'FILTER':
                if (action.payload) {
                    var arr = [...state.qrs]
                    const newData = arr.filter(function (item) {
                        const itemData = item ?
                            item.toUpperCase() :
                            ''.toUpperCase();
                        const textData = action.payload.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                    });
                    return {
                        ...state,
                        filter: newData
                    }
                } else {
                    return {
                        ...state,
                        filter: state.qrs

                    }
                }
    }
}