import { useEffect, useState, FC } from 'react'
import axios from 'axios'

type TUseCheckIfResourseExists = {
  src: string
}

const useCheckIfResourseExists = ({ src }: TUseCheckIfResourseExists) => {
  const [isImage, setIsImage] = useState(false)

  useEffect(() => {
    const getImage = async () => {
      try {
        const res = await axios.head(src)
        if (res.status === 200) setIsImage(true)
      } catch (err) {
        console.error(`Error at useCheckIfResourseExists: ${err}`)
      }
    }
    getImage()
  }, [isImage, setIsImage, src])

  return isImage
}

export default useCheckIfResourseExists
