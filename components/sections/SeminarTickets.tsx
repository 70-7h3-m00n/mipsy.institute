import stls from '@/styles/components/sections/Seminars.module.sass'
import Link from 'next/link'
import routes from '@/config/routes'
import SeminarCard from '../cards/SlugCard'
import { useContext } from 'react'
import { ContextStaticProps } from '@/context/index'


const SeminarTickets = () => {
  const { seminar } = useContext(ContextStaticProps)
  return (
    <>
    <div className={stls.seminarsContainer}>
    <p>осталось билетов: {seminar?.tickets_quantity}</p>
    </div>
    </>
  )
}

export default SeminarTickets