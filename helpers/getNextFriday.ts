const getNextFriday = (currentDate) => {
  const date = new Date(currentDate);
  const dayOfWeek = date.getDay();
  const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
  
  if(daysUntilFriday === 0 ) {
    date.setDate(date.getDate());
  } else {
    date.setDate(date.getDate() + daysUntilFriday);
  }
  return new Date(date).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long'
  })
};

export default getNextFriday