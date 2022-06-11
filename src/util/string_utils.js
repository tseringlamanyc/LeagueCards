const refactorName = (name) => {
  let res = name;

  if (res.includes("'")) {
    res = res.charAt(0).toUpperCase() + res.slice(1).toLowerCase();
  }

  res = res.replace(/[^a-zA-Z]/g, "");

  switch (res) {
    case "Wukong":
      res = "MonkeyKing";
      break;
    case "Kogmaw":
      res = "KogMaw";
      break;
    case "LeBlanc":
      res = "Leblanc";
      break;
    case "NunuWillump":
      res = "Nunu";
      break;
    case "Reksai":
      res = "RekSai";
      break;
    case "RenataGlasc":
      res = "Renata";
      break;

    default:
      return res;
  }

  return res;
};

module.exports = { refactorName };
