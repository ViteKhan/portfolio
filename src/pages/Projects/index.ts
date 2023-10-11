import { lazy } from 'react';

const ProjectsPageAsync = lazy(() => import('./ui/Projects'));

export { ProjectsPageAsync as ProjectsPage };