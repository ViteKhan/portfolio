import { AppRoutes } from 'types';
import { ReactComponent as RussianIcon } from 'assets/icons/russia.svg';
import { ReactComponent as UKIcon } from 'assets/icons/uk.svg';
import { PiStepsDuotone } from 'react-icons/pi';
import { VscFeedback } from 'react-icons/vsc';
import { IoLogoReact } from 'react-icons/io5';
import { LiaGraduationCapSolid } from 'react-icons/lia';
import { GiSkills } from 'react-icons/gi';

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.EDUCATION]: '/education',
  [AppRoutes.EXPERIENCE]: '/experience',
  [AppRoutes.FEEDBACK]: '/feedback',
  [AppRoutes.PROJECTS]: '/projects',
  [AppRoutes.SKILLS]: '/skills',
};

export const LANGUAGES = [
  { id: 'en', name: 'English', icon: <UKIcon/> },
  { id: 'ru', name: 'Russian', icon: <RussianIcon/> },
];

export const NAV_LINKS = [
  { to: RoutePath.skills, title: 'Skills', icon: <GiSkills/> },
  { to: RoutePath.experience, title: 'Experience', icon: <PiStepsDuotone/> },
  { to: RoutePath.education, title: 'Education', icon: <LiaGraduationCapSolid/> },
  { to: RoutePath.projects, title: 'Projects', icon: <IoLogoReact/> },
  { to: RoutePath.feedback, title: 'Feedback', icon: <VscFeedback/> },
];