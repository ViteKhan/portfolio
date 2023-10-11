import { Link } from 'react-router-dom';
import { RoutePath } from '../../constants';

export const Navbar = () => {
  return (
    <div>
      <Link to={RoutePath.home}>Home</Link>
      <Link to={RoutePath.skills}>Skills</Link>
      <Link to={RoutePath.experience}>Experience</Link>
      <Link to={RoutePath.education}>Education</Link>
      <Link to={RoutePath.projects}>Projects</Link>
      <Link to={RoutePath.feedback}>Feedback</Link>
    </div>
  );
};