import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { Button, ThemeButton } from 'shared/ui/Button'

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
      <Button
          className={classNames('', {}, [className])}
          theme={ThemeButton.CLEAR}
          onClick={toggle}
        >
          {t('Язык')}
      </Button>
  )
}
