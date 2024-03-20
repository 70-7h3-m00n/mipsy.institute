const getParagraphInnerHtml = (str: string) => {
  const lis = str && str.match(/<p>.*<\/p>/g)
  const output = lis && lis.map(li => li.slice(3).slice(0, -4))
  return output
}

export default getParagraphInnerHtml
