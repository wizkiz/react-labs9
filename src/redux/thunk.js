import {
  employeesLoaded,
  employeesLoading,
  employeesLoadingErorr,
  addEmployee,
  userLoginSuccess,
  userLoginError
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

export const userLogin = (username) => {
  return (dispatch) => {
    return (
      fetch('http://localhost:3004/users')
        .then((data) => data.json())
        .then(
          (users) => {
            const user = users.find(us => us.username === username);
            if (user !== undefined) {
              dispatch(userLoginSuccess(user));
            } else {
              dispatch(userLoginError());
            }
          }
        )
    )
  }
}