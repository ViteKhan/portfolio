import { lazy } from 'react';

const HomePageAsync = lazy(() => import('./ui/Home'));

export { HomePageAsync as HomePage };