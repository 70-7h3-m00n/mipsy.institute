const removeDuplicates = (arr: string[]) => [
  ...new Set(arr.map(item => item.trim()))
]

export default removeDuplicates
