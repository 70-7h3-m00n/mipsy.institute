import axios from 'axios';

export default async function handler(req, res) {

  const { fio, phoneNumber, email, requestUrl, sessionId } = req.body;
  const ct_site_id = '59867';

  const ct_data = new URLSearchParams();
  ct_data.append('fio', fio);
  ct_data.append('phoneNumber', phoneNumber);
  ct_data.append('email', email);
  ct_data.append('subject', 'Заявка с сайта');
  ct_data.append('requestUrl', requestUrl);
  ct_data.append('sessionId', sessionId || ' ');


  try {
    const response = await axios.post(
      `https://api.calltouch.ru/calls-service/RestAPI/requests/${ct_site_id}/register/`,
      ct_data,
    );
      res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
}