import stls from '@/styles/components/general/Breadcrumbs.module.sass'
import Link from 'next/link'
import classNames from 'classnames'

const Breadcrumbs = ({ breadcrumbs, isJournal = false }) => {
  const handleClick = (bcrumbs) => {
    console.log(bcrumbs)
    localStorage.setItem('selectedFieldSlug', bcrumbs.slug)
  }
  return (
    <div className={stls.container}>
      <ul
        className={classNames({
          [stls.linkList]: true,
          [stls.isJournal]: isJournal
        })}>
        <li>
          <Link href='/'>Главная</Link>
        </li>
        {breadcrumbs.map(el => (
          <li key={el.label}>
            <span className={stls.triangle}></span>
            <Link className={stls.links} href={el.path}>
              <a
                onClick={() => {
                  if (isJournal) {
                    handleClick(el)
                  }
                }}>
                {el.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs
