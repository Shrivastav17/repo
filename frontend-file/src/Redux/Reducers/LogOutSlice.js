// src/redux/reducer.js

const initialState = {
    storage: {
      value: null,
    },
    user: {
      name: null,
      isAuthenticated: false,
    },
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        console.log(action.payload);
        return {
          ...state,
          storage: {
            value: action.payload.token,
          },
          user: {
            name: action.payload.name,
            isAuthenticated: true,
            
          },
        
        };
      case 'LOGOUT':
        return {
          ...state,
          storage: {
            value: null,
          },
          user: {
            name: null,
            isAuthenticated: false,
          },
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;