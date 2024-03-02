const initialState = {

    count: 0
}

const cartReducer = (state = initialState, action) => {


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
        default:
            return state;
    }


}

export default cartReducer;