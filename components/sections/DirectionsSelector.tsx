import stls from '@/styles/components/sections/DirectionsSelector.module.sass';
import { Fragment, useState } from 'react';
import routes from '@/config/routes';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import ProgramList from './ChooseProgram/ProgramList';

const DirectionsSelector = ({ currentType = null, setCurrentType }) => {
  const list = [
    {
      id: 1,
      label: 'Дополнительное образование',
      href: routes.front.programs,
      programType: 'null',
    },
    {
      id: 2,
      label: 'Профессиональная переподготовка',
      href: routes.front.professions,
      programType: 'profession',
    },
    {
      id: 3,
      label: 'Повышение квалификации',
      href: routes.front.courses,
      programType: 'course',
    },
  ];

  const isMobileLayout = useMediaQuery({ query: '(max-width: 768px)' });

  // Состояние для активного элемента
  const [activeItem, setActiveItem] = useState(2);

  return (
    <div className={stls.container}>
      {list.map(({ id, label, href, programType }, idx) => (
        <Fragment key={id}>
          <div
            className={classNames({
              [stls.studyField]: true,
              [stls.active]: currentType === programType,
            })}
            onMouseEnter={
              !isMobileLayout ? () => setCurrentType(programType) : undefined
            }
            onClick={() => {
              if (activeItem === id) {
                // Если элемент уже активен, снимаем активность
                setActiveItem(null);
                setCurrentType(null);
              } else {
                // Иначе, активируем элемент
                setActiveItem(id);
                setCurrentType(programType);
              }
            }}>
            <p className={stls.mainFields}>{label}</p>
          </div>
          {/* Показываем надпись под активным элементом */}
          {activeItem === id && (
            <div className={stls.mobileAccordeon}>
              <ProgramList currentType={currentType} ofType={currentType === 'course' ? 'course' : currentType === 'profession' ? 'profession' : null} />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default DirectionsSelector;
