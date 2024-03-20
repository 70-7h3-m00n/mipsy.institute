import React from 'react'
import stls from '@/styles/components/dropdownMenu/WeakVision.module.sass';
import classNames from 'classnames';
import IconSadFace from '../icons/IconSadFace';

interface Icon1Props {
  className?: string;
  selected?: boolean;
}

const WeakVision: React.FC<Icon1Props> = ({ className, selected = false }) => {
  const infoClasses = classNames(stls.container, {[stls.selected]: selected }, className);
  return (
    <div className={infoClasses}>
      <div className={stls.wrapper}>
        <p>Версия для слабовидящих</p>
        <span>Страница находится в процессе разработки.</span>
        <div className={stls.icon}>
          <IconSadFace />
        </div>
      </div>
      
      
    </div>
  )
}

export default WeakVision