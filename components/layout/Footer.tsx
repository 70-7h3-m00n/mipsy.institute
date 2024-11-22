import stls from '@/styles/components/layout/Footer.module.sass'
import classNames from 'classnames'
import { useContext, useEffect, useState } from 'react'
import { company, routes } from '@/config/index'
import { ContextStaticProps } from '@/context/index'
import Link from 'next/link'
import Wrapper from '@/components/layout/Wrapper'
import {
  BtnVk,
  BtnWhatsapp,
  BtnTelegram,
  BtnYt,
  BtnOk
} from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'
import FooterBottom from '@/components/general/FooterBottom'
import { GeneralAddress } from '@/components/general'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'
import getUtmSourceFromCookie from '../funcs/getUtmSourceFromCookie'
import Logo from '../general/Logo'
import BtnDzen from '../btns/BtnDzen'
import SearchProgram from '../general/SearchProgram'
import PopupFooterReviews from '../popups/PopupFooterReviews'


const Footer = () => {
  const { studyFields } = useContext(ContextStaticProps)
  console.log(studyFields)

  const staticLinks = [
    {
      val: 'Курсы',
      href: routes.front.courses
    },
    {
      val: 'Профессии',
      href: routes.front.professions
    },
    // {
    //   val: 'Вебинары',
    //   href: routes.front.webinars
    // },
    // {
    //   val: 'Преподаватели',
    //   href: routes.front.teachers
    // },
    // {
    //   val: 'Отзывы',
    //   href: routes.front.reviews
    // },
    {
      val: 'Главная',
      href: routes.front.home
    },
    // {
    //   val: 'Об институте',
    //   href: routes.front.about
    // },
    // {
    //   val: 'Сведения об образовательной организации',
    //   href: routes.front.legal
    // },
    {
      val: 'Контакты',
      href: routes.front.contact
    },
    // {
    //   val: 'Оплата',
    //   href: routes.front.payment
    // }
  ]

  const fieldsLinks = []

  studyFields.forEach(field => {
    fieldsLinks.push({ val: field.label, href: `/programs/${field.slug}` })
  })

  const [isEdpartners, setIsEdpartners] = useState(false)
  const router = useRouter()
  const partCookie = getCookie('utm')
  useEffect(() => {
    setTimeout(() => {
      const utmSource = getUtmSourceFromCookie()
      setIsEdpartners(utmSource === 'edpartners')
    }, 300)
  }, [isEdpartners, partCookie])


  
  return (
    <footer className={stls.container}>
      <Wrapper>

      
        <div className={stls.left}>
        
          <div className={stls.top}>
            <ul
              className={classNames({
                [stls.links]: true,
                [stls.staticLinks]: true
              })}>
              {staticLinks.map(link => (
                <li
                  key={link.val + link.href}
                  className={classNames({
                    [stls.linkItem]: true,
                    [stls.staticLinkItem]: true
                  })}>
                  <Link href={link.href}>
                    <a
                      className={classNames({
                        [stls.link]: true,
                        [stls.staticLink]: true
                      })}>
                      {link.val}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul
              className={classNames({
                [stls.links]: true,
                [stls.fieldsLinks]: true
              })}>
              {fieldsLinks.map(link => (
                <li
                  key={link.val + link.href}
                  className={classNames({
                    [stls.linkItem]: true,
                    [stls.fieldsLinkItem]: true
                  })}>
                  <Link href={link.href}>
                    <a
                      className={classNames({
                        [stls.link]: true,
                        [stls.fieldsLink]: true
                      })}>
                      {link.val}
                    </a>
                  </Link>
                </li>
              ))}
              <li className={stls.logo}>
                <Logo atFooter/>
              </li>
            </ul>
            {/* {!isEdpartners ? ( */}
              <div className={stls.contact}>
                {/* <p>Приемная комиссия:</p>
                <div className={stls.numbers}>
                  <a
                    href={company.phoneNumbers.default.href}
                    className={stls.number}>
                    {company.phoneNumbers.default.val}
                  </a>
                  <a
                    href={company.phoneNumbers.defaultAlt.href}
                    className={stls.number}>
                    {company.phoneNumbers.defaultAlt.val}
                  </a>
                  <p>{company.phoneNumbers.studyDivision.contactType}:</p>
                  <a
                    href={company.phoneNumbers.studyDivision.href}
                    className={stls.number}>
                    {company.phoneNumbers.studyDivision.val}
                  </a>
                </div> */}
                <div className={stls.leaveApp}>
                <PopupTrigger btn='alpha' cta='submitApplication' />
              </div>
                <div className={stls.email}>
                  <p>Электронный адрес:</p>
                  <p className={stls.eadress}>almaty@mip.institute</p>
                </div>
                {/* <GeneralAddress classNames={[stls.address]} /> */}

                {/* <div className={stls.sm}>
                  <BtnVk dark mlzero />
                  <BtnWhatsapp dark />
                  <BtnTelegram dark />
                  <BtnYt dark />
                  <BtnOk dark />
                  <BtnDzen/>
                </div>
                <PopupFooterReviews />

                <div className={stls.btn}>
                  <PopupTrigger btn='beta' cta='askQuestion' />
                </div> */}
              </div>
            {/* // ) : (
            //   <PopupFooterReviews />
            // )} */}
            {/* <div className={stls.leaveApp}>
                <PopupTrigger btn='alpha' cta='submitApplication' />
              </div> */}
            <div className={stls.newRight}>
              {/* <div className={stls.leaveApp}>
                <PopupTrigger btn='alpha' cta='submitApplication' />
              </div> */}
              {/* <a href='https://lms.mip.institute/' className={stls.enterToPortal}>Вход</a>
              <SearchProgram /> */}
              {/* <p className={stls.primary}>
                Государственный контроль (надзор) в сфере образования:
                <span>
                  Департамент образования и науки города Москвы Федеральная
                  служба по надзору в сфере образования и науки
                </span>
              </p> */}
              
              {/* <p className={stls.primary}>
                Научная автономная некоммерческая организация «Московский институт
                психологии» (НАНО «МИП»)
                ИНН 9725041321 ОГРН 1207700479260 Лицензия департамента
                образования города Москвы на осуществление образовательной
                деятельности №041363 от 14.04.21.
              </p> */}
              {/* <a className={stls.linkToLicense} href={routes.external.license} target='_blank'  rel="noreferrer nofollow noindex" >
                Лицензия на образовательную деятельность №041363 от 14.04.2021 г.
              </a> */}
              <a  className={stls.linkToLicense} href={routes.front.policiesPrivacy} target='_blank'  rel="noreferrer nofollow noindex" >
                Политика конфиденциальности
              </a>
              <a className={stls.linkToLicense} href={routes.front.moneyRefund} target='_blank'  rel="noreferrer nofollow noindex" >
                Возврат денежных средств
              </a>
            </div>
          </div>
          {/* <div className={stls.bottom}>
            <FooterBottom />
          </div> */}
        </div>
      </Wrapper>
      {/* <div className={stls.footerBottom}>
        <FooterBottom />
      </div> */}
    </footer>
  )
}

export default Footer
