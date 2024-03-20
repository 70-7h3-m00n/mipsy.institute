import axios from 'axios';

const tokens = async (req, res) => {
  // Параметры запроса

  const clientSecret = "nW5Bjw8iqTkbXRS5gndurGCjvtq1V3hXYuPSSbXyZegFbLxbJgHnOvvD8fLwEZJ2"; // Замените на ваш реальный client_secret
  const code = 'def502004aaae19de17cb1d1c28210dfc7ce4c23b4edde207fe1e21aa467ade6ff33a4e3b4d72cabe46a3ccd5766ff626f9bbad5d1f801c01e644b90ee963c2a0209b6c9f3f8df4266623891814c49534eb82bba711ee2c1ad4b336ce0d4df4af38de9ff521c42ac9237df5da67eeacf348aec015335978ffa717028d426f25a56045f14c4cb04a67a5a1c2ca1e28926ab0db6ed053c040eccf7f78b8c7f30ff7148f13d996db6086bcbcf09a5f3367b8a98e93330d6971ddf61198e2c1a6ee7913a50480dfc8771bee2f228fbdb8be608a587cd5f199912f7a9ebd21ecc6c08c467452afaaab0389bee325ab447599df1b72a9352a9bd2573634391d17fc871642be21bb01a11a93bbcf27554a5ebaf527d3a74b62ac32182576996798aefd05efed2257e7e92753f48ebeaa10aebd55b49ba5fe17c15dd85c46bacde4766a098e3d8af4b2e7a8097f95e3c467e118ee1c45eedf6f931fc81e9a79e0226f2286af2b4bf7ac5bb1e3077f7c44863fa5f28a7fb057935f83bf20201d7d294409a235f8fb102c7c705bea9cc6a0c68357d5bad321f807861097785dbdb4927817e303554f95b5728757f7e55fbca6336a63514a702b9d502279b2d6402bfa860fd1f99120c0492bd4041e53bba628238db33be41a03591ad63723f047a1127505f62772351df5cf3f5f51079bec36464eef5a9657408c5a1a2'

  // Подготовьте данные для POST-запроса
  const data = {
    "client_id": "34a4fcbd-ce38-442e-8f1d-878578f18f20",
    "client_secret": clientSecret,
    "grant_type": "authorization_code",
    "code": code,
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
    res.status(200).json(response.data);
  } catch (error) {
    // Обработка ошибки
    console.error('Ошибка при запросе access_token:', error);
    res.status(400).json(error.response.data);
  }
};

export default tokens
