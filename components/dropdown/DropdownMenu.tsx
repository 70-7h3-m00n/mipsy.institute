import React, { useState } from 'react';
import classNames from 'classnames';
import styles from '@/styles/components/dropdownMenu/DropdownMenu.module.sass';

type DropdownMenuProps = {
  icon: React.ReactNode;
  menuItems: string[];
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ icon, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const dropdownMenuClass = classNames(styles.dropdownMenu, {
    [styles.open]: isOpen,
  });

  const arrowClass = classNames(styles.arrow, {
    [styles.open]: isOpen,
  });

  return (
    <div
      className={dropdownMenuClass}
      onMouseEnter={handleMenuToggle}
      onMouseLeave={handleMenuToggle}
    >
      <div className={styles.iconDrop}>{icon}</div>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <p className={styles.text}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;