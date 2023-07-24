import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/provider/ErrorBoundary'

const MainPage = () => {
  const { t } = useTranslation()
  return (
      <div>
          <div>{t('Главная')}</div>
          <BugButton/>
      </div>
  )
}
export default MainPage
