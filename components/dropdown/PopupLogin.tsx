import React, { useState } from 'react';
import stls from '@/styles/components/dropdownMenu/PopupLogin.module.sass';
import Popup from 'reactjs-popup';
import RegistrationFlow from './RegistrationFlow';

const PopupLogin = () => {
  const [registrationStep, setRegistrationStep] = useState(0);

  const handleRegisterClick = () => {
    // Перейти к следующему шагу регистрации
    setRegistrationStep(registrationStep + 1);
  };

  return (
    <div className={stls.container}>
      <p>Войти или зарегистрироваться</p>
      <Popup trigger={<button>войти</button>} modal nested>
        <div className={stls.modal}>
          <p className={stls.p}>Добро пожаловать на страницу регистрации</p>
          {registrationStep === 0 && (
            <button onClick={handleRegisterClick}>Зарегистрироваться</button>
          )}
          {registrationStep === 1 && (
            <RegistrationFlow  />
          )}
          {/* Добавьте условия для других шагов регистрации, если необходимо */}
        </div>
      </Popup>
    </div>
  );
};

export default PopupLogin;
