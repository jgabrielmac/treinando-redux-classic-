import { CLICK_UPDATE_VALUE } from '../Actions/actionTypes';

const initialState = {
    newValue: ''
  };
  
  export const clickReducer = (state = initialState, action) => {

    switch (action.type) {
      case CLICK_UPDATE_VALUE:
        return {
          ...state,
          newValue: action.newValue
        };
      case 'CLICK_DELETE_VALUE':
        return {
          newValue: ''
        };
      default:
        return state;
    }
  };