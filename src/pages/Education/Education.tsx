import { useTranslation } from 'react-i18next';

const EducationPage = () => {
  const { t } = useTranslation('education');
  return (
    <div>
      {t('Education')}
    </div>
  );
};

export default EducationPage;