const getListItemsInnerHtml = (str: string) => {
  // get array of uls from a string
  const ulsArr = str && str.match(/<ul>([\s\S]*?)<\/ul>/g)
  // get inner html of each li inside each ul as array of arrays
  const output =
    ulsArr &&
    ulsArr.map(ul =>
      ul
        .split(/<li>([\s\S]*?)<\/li>/g)
        .filter(item => !item.match(/(<\/?ul>)|(\n)/))
    )
  return output
}

export default getListItemsInnerHtml
