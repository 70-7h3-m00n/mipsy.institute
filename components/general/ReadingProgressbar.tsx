import { useEffect, useState } from 'react'
import stls from '@/styles/components/general/ReadingProgressbar.module.sass'

const ReadingProgressbar = () => {
  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100
    setScrollTop(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={stls.progressWrapper}>
      <div
        className={stls.progressBar}
        style={{ width: `${scrollTop}%` }}></div>
    </div>
  )
}

export default ReadingProgressbar;
