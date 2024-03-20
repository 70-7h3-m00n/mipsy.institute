import routes from '@/config/routes';
import axios from 'axios';

const tokens = async (req, res) => {
  const {id, name, phone, price, email, question, promocode, access, leadPage, ymUid, utm, blockForAmo, leadId, edPartners}=req.body 

  try {

    const checkContactUrl = `https://crmamomipinstitute.amocrm.ru/api/v4/leads/${leadId}/notes`
    // Опции для GET-запроса, включая заголовок с access_token
    const options = {
      headers: {
        'Authorization': `Bearer ${access}`,
      },
    };
    const addNote= [
      {
        note_type: 'common',
        params: {
          "text": `Новые данные:
          телефон: ${phone|| null}
          имя: ${name|| null}
          ${email ? `email: ${email}` : 'Email не оставил'}
          Страница с которой пришла заявка: ${routes.front.root}${leadPage}
          Раздел сайта: ${blockForAmo|| null}
          id заявки: ${id || null}
          Yandex Metrics ID: ${ymUid|| null}
          Отправка в edPartners: ${edPartners }
          ${promocode ? `Промокод: ${promocode}` : ''}
          ${question ? `Обращение: ${question}` : ''}
          ${utm ? `utm_medium: ${utm.utm_medium}` : ''}
          ${utm ? `utm_source: ${utm.utm_source}` : ''}
          ${utm ? `utm_campaign: ${utm.utm_campaign}` : ''}
          ${utm ? `utm_content: ${utm.utm_content}` : ''}
          `
        }
      }
    ]

    // Выполните GET-запрос к amoCRM API
    const response = await axios.post(checkContactUrl, addNote, {
      headers: {
        Authorization: `Bearer ${access}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      const leadData = response.data;
      res.status(200).json({ status: 200, msg: 'Note added in addNode' })
    } else {

      res.status(response.status).json({ error: response });
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
};

export default tokens