import { lazy } from 'react';

const ProjectsPageAsync = lazy(() => import('./Projects'));

export { ProjectsPageAsync as ProjectsPage };