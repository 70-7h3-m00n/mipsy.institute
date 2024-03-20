import axios from 'axios'
import { routes } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'

const ipCheckFunc = async () => {
  try {
    // values.id = uuidv4()
    // values.token = value
    const res = await axios.post(`${routes.front.root}/api/ipCheck`)
    let output
    res.status === 200 && (output = 200)
    
    res.status === 403 && (output = 403)
    res.status === 500 && (output = 500)
    return output
  } catch (err) {
    // console.log('errrrr=====>',err)
    return err
  }
}

export default ipCheckFunc