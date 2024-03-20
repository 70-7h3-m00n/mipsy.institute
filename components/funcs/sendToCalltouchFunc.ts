import axios from 'axios'
import { routes } from '@/config/index'

interface CustomWindow extends Window {
  ct: {
    (param1: string, param2: string): any
    sessionId: string
  }
}

declare const window: CustomWindow

const sendToCalltouch = async data => {
  const sessionId = window?.ct('calltracking_params', '20yl3dqe')?.sessionId

  const ct_data = {
    fio: data.name,
    phoneNumber: data.phone,
    email: data.email,
    subject: 'Заявка с сайта',
    tags: ' ',
    comment: ' ',
    requestUrl: window.location.href,
    sessionId: sessionId || ' '
  }

  try {
    const response = await axios.post(
      `${routes.front.root}/api/sendToCalltouch`,
      ct_data
    )

    let output
    response.status === 200 && (output = 200)
    response.status === 500 && (output = 500)
    return output
  } catch (err) {
    console.log(err)
    return err
  }
}
export default sendToCalltouch
