import routes from '@/config/routes';
import axios from 'axios'

const createLead = async (req, res) => {

  const { id, name, phone, price, email, promocode, access, leadPage, ymUid, utm, blockForAmo, seminar_title, tickets, date } = req.body;

  // URL для запроса сделки по ID
  const apiUrl = `https://crmamomipinstitute.amocrm.ru/api/v4/leads/complex`
  try {

    const leadsData = [
      {
        name: 'Новая заявка на Семинар',
        pipeline_id: 7562822,
        price: price,
        custom_fields_values: [
          {
            // ID заявки
            field_id: 705911,
            values: [
              {
                value: id || null
              }
            ]
          },
          {
            // Название семинара
            field_id: 1054549,
            values: [
              {
                value: seminar_title || null
              }
            ]
          },
          {
            // Количество билетов
            field_id: 1054551,
            values: [
              {
                value: tickets || null
              }
            ]
          },
          {
            // DATE
            field_id: 1054555,
            values: [
              {
                value: date / 1000 || null
              }
            ]
          },
          {
            // Промокод
            field_id: 705109,
            values: [
              {
                value: promocode || null
              }
            ]
          },
          // {
          //   // Вопрос
          //   field_id: 704895,
          //   values: [
          //     {
          //       value: question || null
          //     }
          //   ]
          // },
          {
            // раздел сайта
            field_id: 1050833,
            values: [
              {
                value: blockForAmo || null
              }
            ]
          },
          {
          // конкретная программа из списка
            field_id: 704681,
            values: [
              {
                // enum_id: 427011
              }
            ]
          },
          {
            // источник рекламы(utm_source)
            field_id: 705917,
            values: [
              {
                value: utm &&utm?.utm_source || null
              }
            ]
          },
          {
            // тип трафика (utm_medium)
            field_id: 705919,
            values: [
              {
                value: utm &&utm?.utm_medium || null
              }
            ]
          },
          {
            // название рекламной компании (utm_campaign)
            field_id: 705921,
            values: [
              {
                value: utm &&utm?.utm_campaign || null
              }
            ]
          },
          {
            // Баннер (utm_content)
            field_id: 705925,
            values: [
              {
                value: utm &&utm?.utm_content || null
              }
            ]
          },
          {
            // ключевое слово (utm_term)
            field_id: 705927,
            values: [
              {
                value: utm && utm?.utm_term || null
              }
            ]
          },
          {
            // страница на которой оставлена заявка
            field_id: 997743,
            values: [
              {
                value: `${routes.front.root}${leadPage}` || null
              }
            ]
          },
          {
            // Calltouch click_id
            field_id: 1045313,
            values: [
              {
                value: utm && utm?.cl_uid || null
              }
            ]
          },
          {
            field_id: 705913,
            values: [
              {
                value: ymUid || null
              }
            ]
          },
          // edPartners
          // {
          //   field_id: 1052927,
          //   values: [
          //     {
          //       value: edPartners?.toString() || null
          //     }
          //   ]
          // },
          // {
          //   field_id: 1043321,
          //   values: [
          //     {
          //       value: 'camp'
          //     }
          //   ]
          // },
          // {
          //   field_id: 1043321,
          //   values: [
          //     {
          //       value: 'camp'
          //     }
          //   ]
          // },
          // {
          //   field_id: 1043325,
          //   values: [
          //     {
          //       value: 'check_utm'
          //     }
          //   ]
          // },

        ],
        _embedded: {
          tags: [
            {
              // id:null,
              id: 127251
            }
          ],
          contacts: [
            {
              name: name,
              custom_fields_values: [
                {
                  field_code: 'PHONE',
                  values: [
                    {
                      enum_code: 'MOB',
                      value: phone
                    }
                  ]
                },
                {
                  field_code: 'EMAIL',
                  values: [
                    {
                      enum_code: 'PRIV',
                      value: email
                    }
                  ]
                },
              ]
            }
          ]
        }
      }
    ]

    // Выполните GET-запрос к amoCRM API
    const response = await axios.post(apiUrl, leadsData, {
      headers: {
        Authorization: `Bearer ${access}`,
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      const leadData = response.data

      res.status(200).json({ status: 200, msg: 'Lead created' })
    } 
  } catch (error) {
    console.error('Ошибка при создании нового лида:', error )
    res.status(400).json(error.response)
  }
}

export default createLead