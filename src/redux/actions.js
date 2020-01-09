import {
  EMPLOYEES_LOADED,
  EMPLOYEES_LOADING,
  EMPLOYEES_LOADING_ERROR,
  EMPLOYEE_ADDED,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS
} from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}

export const addEmployee = (employee) => {
  return {
    type: EMPLOYEE_ADDED,
    payload: {
      employee
    }
  }
}

export const employeesLoading = () => {
  return {
    type: EMPLOYEES_LOADING,
    payload: {}
  }
}

export const employeesLoadingErorr = (error) => {
  return {
    type: EMPLOYEES_LOADING_ERROR,
    payload: {
      error
    }
  }
}

export const userLoginSuccess = (user) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      user
    }
  }
}

export const userLoginError = () => {
  return {
    type: USER_LOGIN_ERROR,
    payload: {}
  }
}