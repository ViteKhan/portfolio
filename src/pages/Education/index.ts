import { lazy } from 'react';

const EducationPageAsync = lazy(() => import('./ui/Education'));

export { EducationPageAsync as EducationPage };