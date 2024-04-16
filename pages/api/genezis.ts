import routes from '@/config/routes'
import axios from 'axios'

const createLead = async (req, res) => {
  const {
    id,
    name,
    phone,
    price,
    email,
    question,
    promocode,
    leadPage,
    ymUid,
    utm,
    blockForAmo,
    edPartners,
    roistat_visit
  } = req.body

  // URL для запроса сделки по ID
  const apiUrl = `https://webhook.gnzs.ru/ext/site-int/amo/29931190?gnzs_token=4f9cbc7c-e70f-45d7-af22-4c324597caf9`
  try {
    const leadsData = {
      form: [
        { key: 'phone', value: phone },
        { key: 'name', value: name },
        { key: 'email', value: email },
        { key: 'promocode', value: promocode || '' },
        { key: 'id', value: id || '' },
        { key: 'price', value: price || '' },
        { key: 'question', value: question || '' },
        { key: 'leadPage', value: `${routes.front.root}${leadPage}` || '' },
        { key: 'site block', value: blockForAmo || '' },
        { key: 'utm_source', value: utm?.utm_source || '' },
        { key: 'utm_medium', value: utm?.utm_medium || '' },
        { key: 'utm_content', value: utm?.utm_content || '' },
        { key: 'utm_term', value: utm?.utm_term || '' },
        { key: 'utm_campaign', value: utm?.utm_campaign || '' },
        { key: 'roistat', value: roistat_visit || '' },
        { key: '_ym_uid', value: ymUid || '' }
      ],
      host: 'mipsy.institute', // домен вашего сайта (ОБЯЗАТЕЛЬНО)
      token: '4f9cbc7c-e70f-45d7-af22-4c324597caf9'
    }

    // Выполните GET-запрос к amoCRM API
    const response = await axios.post(apiUrl, leadsData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      const leadData = response.data
      console.log(leadData)
      res.status(200).json({ status: 200, msg: 'Lead created' })
    }
  } catch (error) {
    console.error('Ошибка при создании нового лида:', error.response.data)
    res.status(200).json(error.response)
  }
}

export default createLead
