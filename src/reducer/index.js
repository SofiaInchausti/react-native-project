const initialState = {
  qrs: [],
  filters: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_QR':
      if (state.qrs.includes(action.payload.toUpperCase())) {
        return {
          ...state,
          filter: state.qrs,
          qrs: state.qrs,
        };
      }
      return {
        ...state,
        filter: state.qrs.concat(action.payload.toUpperCase()),
        qrs: state.qrs.concat(action.payload.toUpperCase()),
      };

    case 'FILTER':
      if (action.payload) {
        const arr = [...state.qrs];
        const newData = arr.filter((item) => {
          const itemData = item
            ? item.toUpperCase()
            : ''.toUpperCase();
          const textData = action.payload.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        return {
          ...state,
          filter: newData,
        };
      }
      return {
        ...state,
        filter: state.qrs,
      };

    case 'REMOVE': {
      let aux = state.filter;
      aux = aux.filter((e) => e.toUpperCase() !== action.payload.toUpperCase());
      return {
        ...state,
        filter: aux,
        qrs: aux,

      };
    }
    default: {
     return state;
    }
  }
}
