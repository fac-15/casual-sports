const sortDate = data =>
  data.sort((a, b) => {
    const keyA = new Date(a.event_date),
      keyB = new Date(b.event_date);
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

module.exports = sortDate;
