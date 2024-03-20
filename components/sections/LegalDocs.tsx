import stls from '@/styles/components/sections/LegalDocs.module.sass'
import { TypeDataDocs } from '@/types/index'
import Wrapper from '@/components/layout/Wrapper'
import { IconDoc } from '@/components/icons'

type TypeLegalDocsProps = {
  title: string
  listLeft: TypeDataDocs
  listRight: TypeDataDocs
}

const LegalDocs = ({ title, listLeft, listRight }: TypeLegalDocsProps) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>{title}</h2>
        <div className={stls.content}>
          <ul className={stls.listLeft}>
            {listLeft.map((item, idx) => (
              <li key={item.val + idx} className={stls.itemLeft}>
                <a
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={stls.link}>
                  <div className={stls.icon}>
                    <IconDoc />
                  </div>
                  <span className={stls.text}>{item.val}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className={stls.listRight}>
            {listRight.map((item, idx) => (
              <li key={item.val + idx} className={stls.itemRight}>
                <a
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={stls.link}>
                  <div className={stls.icon}>
                    <IconDoc />
                  </div>
                  <span className={stls.text}>{item.val}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default LegalDocs
