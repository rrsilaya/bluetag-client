import Apparel from '../features/apparel/ApparelContainer';
import Employee from '../features/employee/EmployeeContainer';

const routes = [
  {
    type: 'route',
    path: '/',
    exact: true
  },
  {
    type: 'route',
    path: '/apparel',
    exact: true,
    component: Apparel
  },
  {
    type: 'route',
    path: '/employee',
    exact: true,
    component: Employee
  },
  {
    type: 'redirect',
    to: '/'
  }
];

export default routes;
