import { AppRoutes } from 'types';

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.EDUCATION]: '/education',
  [AppRoutes.EXPERIENCE]: '/experience',
  [AppRoutes.FEEDBACK]: '/feedback',
  [AppRoutes.PROJECTS]: '/projects',
  [AppRoutes.SKILLS]: '/skills',
};