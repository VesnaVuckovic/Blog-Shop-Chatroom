// import { OPEN_POPUP, CLOSE_POPUP } from './types';

export const increase=()=>{
    return {
        type:'increase'
    }
}

export const decrease=()=>{
    return {
        type:'decrease'
    }
}

export const duplicate=()=>{
    return {
        type:'duplicate'
    }
}

// export const openPopup = () => {
//   return {
//     type: OPEN_POPUP
//   };
// };

// export const closePopup = () => {
//   return {
//     type: CLOSE_POPUP
//   };
// };

export const setFilter = (filterType, filterValue) => ({
  type: 'SET_FILTER',
  payload: { filterType, filterValue }
});