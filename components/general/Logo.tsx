import stls from '@/styles/components/general/Logo.module.sass'
import Link from 'next/link'
import classNames from 'classnames'
import { routes } from '@/config/index'
import { IconLogo } from '@/components/icons'

const Logo = ({ atHeader = false, withTitle = true, atFooter=false }) => {
  return (
    <div className={stls.container}>
      <Link href={routes.front.home}>
        <a
          className={classNames({
            [stls.logo]: true,
            [stls.atHeader]: atHeader,
            [stls.atFooter]: atFooter
          })}>
          <IconLogo withTitle={withTitle} atFooter={atFooter} />
          {withTitle && (
            <p className={stls.title}>
              Московский <br />
              Институт <br />
              Психологии
            </p>
          )}
        </a>
      </Link>
    </div>
  )
}

export default Logo
