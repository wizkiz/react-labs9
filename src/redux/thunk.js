import {
  employeesLoaded,
  employeesLoading,
  employeesLoadingErorr,
  addEmployee
} from './actions'

export const loadEmployees = () => {
  return (dispatch) => {
    dispatch(employeesLoading());
    return (
      fetch('http://localhost:3004/employees')
        .then((data) => data.json())
        // Without Redux
        // .then((employees) => this.setState({ employees, isLoading: false }));
        // With Redux
        .then(
          (employees) => {
            dispatch(employeesLoaded(employees))
          },
          (error) => {
            dispatch(employeesLoadingErorr(error))
          }
        ))
  }
}