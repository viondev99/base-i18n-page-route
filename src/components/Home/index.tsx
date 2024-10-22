import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import classes from './home.module.scss'

const Home: FC = () => {
  const { t: tCommon } = useTranslation('common')
  const { t: tHome } = useTranslation('pages/home')

  return (
    <>
      <h1>{tCommon('GREETING')}</h1>
      <h2>{tHome('HOME')}</h2>
      <Link
        className={classes.link}
        href={'/list-post'}
        rel='noopener noreferrer'
      >
        {tHome('GOTOLISTPOST')}
      </Link>
    </>
  )
}

export default Home
