import { Button, ThemeButton } from 'shared/ui/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Для тестирования ErrorBoundary
export const BugButton = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  const throwError = () => { setError(true) }
  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])
  return (
      <Button
          theme={ThemeButton.CLEAR}
          onClick={throwError}
      >
          {t('throw error')}
      </Button>
  )
}
