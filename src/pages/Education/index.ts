import { lazy } from 'react';

const EducationPageAsync = lazy(() => import('./Education'));

export { EducationPageAsync as EducationPage };