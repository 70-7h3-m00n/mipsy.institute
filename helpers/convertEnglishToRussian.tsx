const convertEnglishToRussian = (text) => {
  const keyboardLayout = {
    q: 'й',
    w: 'ц',
    e: 'у',
    r: 'к',
    t: 'е',
    y: 'н',
    u: 'г',
    i: 'ш',
    o: 'щ',
    p: 'з',
    '[': 'х',
    ']': 'ъ',
    a: 'ф',
    s: 'ы',
    d: 'в',
    f: 'а',
    g: 'п',
    h: 'р',
    j: 'о',
    k: 'л',
    l: 'д',
    ';': 'ж',
    "'": 'э',
    z: 'я',
    x: 'ч',
    c: 'с',
    v: 'м',
    b: 'и',
    n: 'т',
    m: 'ь',
    ',': 'б',
    '.': 'ю',
    '/': '.',
    Q: 'Й',
    W: 'Ц',
    E: 'У',
    R: 'К',
    T: 'Е',
    Y: 'Н',
    U: 'Г',
    I: 'Ш',
    O: 'Щ',
    P: 'З',
    '{': 'Х',
    '}': 'Ъ',
    A: 'Ф',
    S: 'Ы',
    D: 'В',
    F: 'А',
    G: 'П',
    H: 'Р',
    J: 'О',
    K: 'Л',
    L: 'Д',
    ':': 'Ж',
    '"': 'Э',
    Z: 'Я',
    X: 'Ч',
    C: 'С',
    V: 'М',
    B: 'И',
    N: 'Т',
    M: 'Ь',
    '<': 'Б',
    '>': 'Ю',
    '?': ','
  };

  let convertedText = '';
  let currentSequence = '';

  for (let i = 0; i < text.length; i++) {
    const currentChar = text[i];
    const convertedChar = keyboardLayout[currentChar] || currentChar;

    if (convertedChar === currentChar) {
      // If the character is not converted, add the current sequence to the result
      convertedText += currentSequence + convertedChar;
      currentSequence = '';
    } else {
      // If the character is converted, add it to the current sequence
      currentSequence += convertedChar;
    }
  }

  return convertedText + currentSequence;
};

export default convertEnglishToRussian