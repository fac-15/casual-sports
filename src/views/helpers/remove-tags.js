const removeTags = str => {
  const cleanString = str.replace(/<\/?[^>]+(>|$)/g, "");
  if (cleanString.length > 140) {
    return cleanString.substring(0, 100) + "...";
  } return cleanString;
};

module.exports = removeTags;
