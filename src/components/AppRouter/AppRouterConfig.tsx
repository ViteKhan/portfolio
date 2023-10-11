import { RouteProps } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { EducationPage } from 'pages/Education';
import { ExperiencePage } from 'pages/Experience';
import { FeedbackPage } from 'pages/Feedback';
import { ProjectsPage } from 'pages/Projects';
import { SkillsPage } from 'pages/Skills';
import { RoutePath } from '../../constants';

export const routerConfig: RouteProps[] = [
  {
    path: RoutePath.home,
    element: <HomePage/>,
  },
  {
    path: RoutePath.education,
    element: <EducationPage/>,
  },
  {
    path: RoutePath.experience,
    element: <ExperiencePage/>,
  },
  {
    path: RoutePath.feedback,
    element: <FeedbackPage/>,
  },
  {
    path: RoutePath.projects,
    element: <ProjectsPage/>,
  },
  {
    path: RoutePath.skills,
    element: <SkillsPage/>,
  },
];