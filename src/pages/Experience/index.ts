import { lazy } from 'react';

const ExperiencePageAsync = lazy(() => import('./ui/Experience'));

export { ExperiencePageAsync as ExperiencePage };