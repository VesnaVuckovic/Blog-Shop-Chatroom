const initialState = {
    count: 0,
    filters: {
        type: null,
        color: null,
        size: null
      },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'decrease':
            return {
                ...state,
                count: state.count - 1
            }
        case 'increase':
            return {
                ...state,
                count: state.count + 1
            }
            case  'duplicate':{
                return {
                    ...state,
                    count: state.count*2
                }
            }
            case 'SET_FILTER':
                return {
                  ...state,
                  filters: {
                    ...state.filters,
                    [action.payload.filterType]: action.payload.filterValue
                  }
                };              
        default:
        return state;
    }
}

export default reducer; 