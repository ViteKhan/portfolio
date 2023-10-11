import { lazy } from 'react';

const ExperiencePageAsync = lazy(() => import('./Experience'));

export { ExperiencePageAsync as ExperiencePage };