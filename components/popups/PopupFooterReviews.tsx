import stls from '@/styles/components/popups/PopupFooterReviews.module.sass';
import FooterReviews from './FooterReviews';
import routes from '@/config/routes';
import Ya from '../imgs/footerReviews/Ya';
import Tutortop from '../imgs/footerReviews/Tutortop';
import Otzovic from '../imgs/footerReviews/Otzovic';
import TwoGis from '../imgs/footerReviews/TwoGis';
import Ucheba from '../imgs/footerReviews/Ucheba';
import Popup from 'reactjs-popup';
import IconRating from '../icons/IconRating';
import { useEffect, useState, useRef } from 'react';
import IconEddu from '../icons/IconEddu';

const PopupFooterReviews = () => {
  const contentStyle = {
    background: '#ffffff',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingTop: '9px',
    paddingBottom: '9px',
  };
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className={stls.container}>
      <Popup
        trigger={(open) => (
          <div className={stls.rating} onClick={() => setPopupOpen(open)}>
            <IconRating />
          </div>
        )}
        onOpen={() => setPopupOpen(true)}
        onClose={() => setPopupOpen(false)}
        position="right center"
        {...{ contentStyle }}
        className={stls.reviews}
      >
        <FooterReviews href={routes.external.yandex}>
          <Ya />
        </FooterReviews>
        <FooterReviews href={routes.external.turtop}>
          <Tutortop />
        </FooterReviews>
        <FooterReviews href={routes.external.otzovic}>
          <Otzovic />
        </FooterReviews>
        <FooterReviews href={routes.external.twoGis}>
          <TwoGis />
        </FooterReviews>
        <FooterReviews href={routes.external.ucheba}>
          <Ucheba />
        </FooterReviews>
        <FooterReviews href={routes.external.eddu}>
          <IconEddu />
        </FooterReviews>
      </Popup>
    </div>
  );
};

export default PopupFooterReviews;
