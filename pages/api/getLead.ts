import axios from 'axios';

const tokens = async (req, res) => {
  
  try {
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFmMjllZmM4MjY4ZGUxMjE3MTk3YThkN2I4YTA3YWM3NTVjOGFhZTNmOWI0YWIxYjNmNWRhZDJiNzk2NzljYjc4ODMyNDBlODU5ZWYwZGQzIn0.eyJhdWQiOiIzNGE0ZmNiZC1jZTM4LTQ0MmUtOGYxZC04Nzg1NzhmMThmMjAiLCJqdGkiOiIxZjI5ZWZjODI2OGRlMTIxNzE5N2E4ZDdiOGEwN2FjNzU1YzhhYWUzZjliNGFiMWIzZjVkYWQyYjc5Njc5Y2I3ODgzMjQwZTg1OWVmMGRkMyIsImlhdCI6MTcwMjE3NjQzNywibmJmIjoxNzAyMTc2NDM3LCJleHAiOjE3MDIyNjI4MzcsInN1YiI6Ijc4MDM3NDUiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk5MzExOTAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.o-bnHAxfT7gV1My74I988L_69QBVIkU3zZzwi48cXl8wXzoouOn6tm6BeinIQhC_7SaKdyjUwGnKsOGLyHAG5NP3giF73KqXinupsKaSz0Nh3glH8qUYwb8AceHZXVrBqPDQFC8SDQ2OH5r3tHHy6yxbhnyDZSeHtOzZpUOitEdPRdON52OYA0QSh2mRVnVFlpxeLWzh88oHL4eeHZ0YgSrTtgsz7H92ayUvi9j_4EqiTs2gm7vbUxwFBgs9lZMTyGu4uSgn344bhazat5yjtWf8N1WH4-YECC2tR1-8PmUsAj3neVSAGvkw7y4vs0WdqS6ULeSxDkx9WjUrT3WNrA';

    const checkContactUrl = 'https://crmamomipinstitute.amocrm.ru/api/v4/leads/21253373'
    // https://crmamomipinstitute.amocrm.ru/api/v4/leads/custom_fields/704681- список программа доступных
    // Опции для GET-запроса, включая заголовок с access_token

    // Выполните GET-запрос к amoCRM API
    const response = await axios.get(checkContactUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      const leadData = response.data;
      res.status(200).json(leadData);
    } else if (response.status === 204) {
      res.status(200).json( response.data )
    } else {
      res.status(response.status).json({ error: response });
    }
  } catch (error) {
    console.log('Ошибка при выполнении запроса:', error.response.status);
    if (error.response.status === 401) {
      res.status(200).json( error.response.data )
    }
  }
};

export default tokens
