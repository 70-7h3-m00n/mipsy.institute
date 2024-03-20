const saveUtmsToCookie = (utms) => {
  if (Object.keys(utms).length > 0) {
    // Сериализация объекта utms в JSON строку
    const utmsJsonString = JSON.stringify(utms);

    // Установка куки с JSON строкой данных
    document.cookie = `utm=${encodeURIComponent(utmsJsonString)}; max-age=7776000`; // 90 дней
  }
};

export default saveUtmsToCookie;