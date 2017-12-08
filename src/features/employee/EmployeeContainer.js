import { connect } from 'react-redux';
import Employee from './Employee';

import { getEmployees } from '../entities/employee';

const mapStateToProps = state => {
  const { employees, page, pages } = state.employee;

  return {
    employees,
    page,
    pages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetEmployees: page => {
      dispatch(getEmployees(page));
    }
  };
};

const EmployeeContainer = connect(mapStateToProps, mapDispatchToProps)(
  Employee
);
export default EmployeeContainer;
