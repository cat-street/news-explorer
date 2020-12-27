const getKeywords = (data) => {
  const keywordsObj = data.reduce((res, el) => {
    if (!(el.keyword in res)) {
      res[el.keyword] = 1;
    } else {
      res[el.keyword] += 1;
    }
    return res;
  }, {});
  const keywords = Object.entries(keywordsObj).sort((a, b) => b[1] - a[1]);
  return keywords.slice(0, 3).reduce((red, el, i) => {
    if (keywords.length > 3 && i === 2) {
      red.push(`${keywords.length - 2} другим`);
    } else {
      red.push(el[0]);
    }
    return red;
  }, []);
};

export default getKeywords;
