const getNextWednesday = (currentDate) => {
  const date = new Date(currentDate);
  const dayOfWeek = date.getDay();
  const daysUntilWednesday = (3 - dayOfWeek + 7) % 7;
  if(daysUntilWednesday === 0 ) {
    date.setDate(date.getDate());
  } else {
    date.setDate(date.getDate() + daysUntilWednesday);
  }
  return  new Date(date).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long'
  })
};

export default getNextWednesday
