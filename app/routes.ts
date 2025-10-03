import { layout, route, type RouteConfig } from '@react-router/dev/routes';

const routes: RouteConfig = [
  layout('routes/layout.tsx', [
    route('/:locale?', 'routes/page.tsx'),
    route('/:locale?/about', 'routes/about/page.tsx'),
  ]),
];

export default routes;
