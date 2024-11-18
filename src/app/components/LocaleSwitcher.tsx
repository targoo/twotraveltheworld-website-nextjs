import { useLocale, useTranslations } from 'next-intl';

import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {['en', 'fr'].map(current => (
        <option key={current} value={current}>
          {t('locale', { locale: current })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
