import { lazy } from 'react';

const FeedbackPageAsync = lazy(() => import('./ui/Feedback'));

export { FeedbackPageAsync as FeedbackPage };