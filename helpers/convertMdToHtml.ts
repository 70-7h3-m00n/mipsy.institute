import marked from 'marked'

const convertMdToHtml = ({ arr = [], params = null }) => {
  let output = null
  if (arr?.length === 0) {
    params?.forEach(param => {
      output = marked(param)
    })
  } else {
    output = arr?.map(item => {
      params?.forEach(param => {
        item[param] && (item[param] = marked(item[param]))
      })
      return item
    })
  }
  return output
}

export default convertMdToHtml
