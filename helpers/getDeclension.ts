const getDeclension = (number) => {
  if (number % 10 === 1 && number % 100 !== 11) {
    return `Тематический модуль`;
  } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
    return `Тематических модуля`;
  } else {
    return `Тематических модулей`;
  }
};

export default getDeclension;