const removeTags = str => {
  if (str === undefined) {
    return;
  } else if (str.length > 140) {
  const cleanString = str.replace(/<\/?[^>]+(>|$)/g, "");
    return cleanString.substring(0, 90) + "...";
    }
};

module.exports = removeTags;
