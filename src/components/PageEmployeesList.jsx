import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadEmployees } from '../redux/thunk'
//import { employeesLoaded } from '../redux/actions'

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  componentDidMount() {
    if (this.props.user === undefined) {
      alert("You are not logged in");
      this.props.history.push("/");
      return;
    }
    if (this.props.isLoaded) {
      return;
    }
    this.props.loadEmployees();
  }

  render() {
    const { employees, isLoading } = this.props;

    if (isLoading) {
      return <p>Loading ...</p>
    }

    return (
      <div>
        {this.props.user !== undefined && <h4 style={{ float: "right" }}>User: {this.props.user.full_name}</h4>}
        <h1>Employees List:</h1>
        {this.props.user !== undefined ? (employees && employees.map((employee => <EmployeeLine key={employee._id} employee={employee} />))) : <p>Forbidden</p>}
        <Link to="/new">
          <button>Create employee</button>
        </Link>
        {/* <Link to="/">
          <button>XD</button> 
        </Link> */}
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    employees: state.employees,
    isLoaded: state.isLoaded,
    isLoading: state.isLoading,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  //employeesLoaded: employees => dispatch(employeesLoaded(employees)),
  loadEmployees: () => dispatch(loadEmployees())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageEmployeesList))