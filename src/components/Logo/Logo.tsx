import { Link } from 'react-router-dom';
import { RoutePath } from '../../constants';

export const Logo = () => {
  return (
    <Link to={RoutePath.home}>Viktor Khan</Link>
  );
};
