import { FC } from 'react'
import { useTranslation } from 'next-i18next'
import classes from './header.module.scss'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const Header: FC = () => {
  const { t } = useTranslation('layouts/header')
  return (
    <header className={classes.headerWraper}>
      <div className={classes.contentWrapper}>
        <div>{t('TITLE')}</div>
        <div className={classes.selectWrapper}>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
