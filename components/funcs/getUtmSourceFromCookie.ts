const getUtmSourceFromCookie = () => {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  for (const cookie of cookies) {
    if (cookie.startsWith('utm=')) {
      const utmCookie = cookie.split('=')[1];
      const utmData = JSON.parse(decodeURIComponent(utmCookie));
      return utmData.utm_source || null;
    }
  }
  return null;
};

export default getUtmSourceFromCookie