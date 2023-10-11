import { lazy } from 'react';

const FeedbackPageAsync = lazy(() => import('./Feedback'));

export { FeedbackPageAsync as FeedbackPage };