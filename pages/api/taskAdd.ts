import axios from 'axios';
import moment from 'moment';

const taskAdd = async (req, res) => {
  const {leadId, name, phone,email, responsible_user_id, access}=req.body 
  try {

    const checkContactUrl = 'https://crmamomipinstitute.amocrm.ru/api/v4/tasks'
    // Опции для GET-запроса, включая заголовок с access_token
    const options = {
      headers: {
        'Authorization': `Bearer ${access}`,
      },
    };
    const dateForManager = moment().unix() + 1800

    const addTask= [
      {
        entity_id: leadId,
        responsible_user_id: responsible_user_id,
        entity_type: "leads",
        text: 'Клиент оставил заявку с формы на сайте',
        complete_till: dateForManager
      }
    ]

    // Выполните GET-запрос к amoCRM API
    const response = await axios.post(checkContactUrl, addTask, {
      headers: {
        Authorization: `Bearer ${access}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      const leadData = response.data;
      res.status(200).json({ status: 200, msg: 'Таск added in addNode' })
    } else {
      res.status(response.status).json({ error: response });
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
};

export default taskAdd
