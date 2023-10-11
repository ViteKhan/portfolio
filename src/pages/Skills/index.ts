import { lazy } from 'react';

const SkillsPageAsync = lazy(() => import('./Skills'));

export { SkillsPageAsync as SkillsPage };