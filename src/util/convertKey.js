const convertChampKey = (key) => {
  let res = "";

  switch (key.length) {
    case 1:
      res = "000" + key;
      break;
    case 2:
      res += "00" + key;
      break;
    case 3:
      res += "0" + key;
      break;
    default:
      return res;
  }

  return res;
};

module.exports = { convertChampKey };
