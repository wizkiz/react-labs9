import {
  EMPLOYEES_LOADED,
  EMPLOYEES_LOADING,
  EMPLOYEES_LOADING_ERROR,
  EMPLOYEE_ADDED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR
} from './constants';

export const initialState = {
  employees: [],
  error: null,
  isLoading: true,
  errorLogin: null,
  user: null
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      // return Object.assign({}, state, { employees }, { isLoaded }); 
      return {
        ...state,
        employees,
        isLoaded: true,
        isLoading: false
      }
    }
    case EMPLOYEES_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case EMPLOYEES_LOADING_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        error,
        isLoading: false
      }
    }
    case EMPLOYEE_ADDED: {
      const { employee } = action.payload;
      return {
        ...state,
        employees: [...state.employees, employee]
      }
    }
    case USER_LOGIN_SUCCESS: {
      const { user } = action.payload;
      return {
        ...state,
        errorLogin: null,
        user
      }
    }
    case USER_LOGIN_ERROR: {
      return {
        ...state,
        errorLogin: "Invalid user"
      }
    }
    default:
      return state
  }
}

export default appReducer;