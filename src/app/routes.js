import Dashboard from '../features/dashboard/DashboardContainer';
import Orders from '../features/order/OrdersContainer';
import Apparel from '../features/apparel/ApparelContainer';
import Employee from '../features/employee/EmployeeContainer';
import Logs from '../features/log/LogsContainer';

const routes = [
  {
    type: 'route',
    path: '/',
    exact: true,
    component: Dashboard
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
    type: 'route',
    path: '/order',
    exact: true,
    component: Orders
  },
  {
    type: 'route',
    path: '/log',
    exact: true,
    component: Logs
  },
  {
    type: 'redirect',
    to: '/'
  }
];

export default routes;
