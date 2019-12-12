import { EMPLOYEES_LOADED } from './constants';
import { EMPLOYEE_ADDED } from './constants';

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