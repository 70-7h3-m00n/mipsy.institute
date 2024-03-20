import stls from '@/styles/components/program/ProgramModule.module.sass'
import { useState } from 'react'
import classNames from 'classnames'
import { IconCircleCheck, IconMinus, IconPlus } from '@/components/icons'
import parse from 'html-react-parser'

const ProgramModule = ({ title, topics }) => {
  const [isOpen, setOpen] = useState(false)
  const blockedWords = ['Описание 1', 'Содержание 1', undefined, ''];
  const hasNoDescriptionTopic = topics?.some(topic => blockedWords.includes(topic));
  const canBeOpened = !hasNoDescriptionTopic && topics?.length > 0; 
  const description = topics?.[0]
  topics = topics?.slice(1)
  return (
    <li
      className={classNames({ [stls.container]: true, [stls.isOpen]: isOpen })}>
      <div className={stls.title} onClick={() => setOpen(!isOpen)}>
        <div className={stls.icon}>{canBeOpened ? (isOpen ? <IconMinus /> : <IconPlus />) : <IconPlus />}</div>

        <p className={classNames({ [stls.pTitle]: true })}>{title}</p>
      </div>
      <div className={stls.topic}>
        
        {canBeOpened && (
          <>
          <p className={stls.description}>{description}</p>
          <ul className={stls.list}>
          {topics &&
            topics.map((topic, idx) => (
              <li key={topic + idx} className={stls.item}>
                <p className={stls.p}>{parse(topic)}</p>
              </li>
            ))}
        </ul>
        </>
        )}
      </div>
    </li>
  )
}

export default ProgramModule
