import Apparel from '../features/apparel/ApparelContainer';

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
    type: 'redirect',
    to: '/'
  }
];

export default routes;
