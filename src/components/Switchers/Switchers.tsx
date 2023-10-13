import { LangSwitcher } from '../LangSwitcher';
import { Row } from '../Row';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const Switchers = () => {
  return (
    <Row>
      <ThemeSwitcher/>
      <LangSwitcher/>
    </Row>
  );
};
