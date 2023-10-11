import { lazy } from 'react';

const SkillsPageAsync = lazy(() => import('./ui/Skills'));

export { SkillsPageAsync as SkillsPage };