import axios from 'axios';

const exchangeTokens = async (req, res) => {
  
  const {refresh} = req.body
  // res.status(200).json({status: 'ok'});

  // const clientId = ; // Замените на ваш реальный client_id
  const clientSecret = "nW5Bjw8iqTkbXRS5gndurGCjvtq1V3hXYuPSSbXyZegFbLxbJgHnOvvD8fLwEZJ2"; // Замените на ваш реальный client_secret

  // Подготовьте данные для POST-запроса
  const data = {
    "client_id": "34a4fcbd-ce38-442e-8f1d-878578f18f20",
    "client_secret": clientSecret,
    "grant_type": "refresh_token",
    "refresh_token": refresh,
    "redirect_uri": "https://mip.institute/api/amoCRMtokens"
  };
  
  try {
    // Выполните POST-запрос к /oauth2/access_token
    const response = await axios.post('https://crmamomipinstitute.amocrm.ru/oauth2/access_token', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Ответ с токенами
    const tokens = {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token,
    };

    // Отправьте токены в ответе
    res.status(200).json(tokens);
  } catch (error) {
    // Обработка ошибки
    console.error('Ошибка при запросе access_token:', error);
    res.status(400).json(error.response.data);
  }
};

export default exchangeTokens