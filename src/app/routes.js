import Dashboard from '../features/dashboard/DashboardContainer';
import Orders from '../features/order/OrdersContainer';
import Apparel from '../features/apparel/ApparelContainer';

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
    path: '/dashboard',
    exact: true,
    component: Dashboard
  },
  {
    type: 'route',
    path: '/order',
    exact: true,
    component: Orders
  },
  {
    type: 'redirect',
    to: '/'
  }
];

export default routes;
