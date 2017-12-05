import Apparel from '../features/apparel/Apparel';

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
