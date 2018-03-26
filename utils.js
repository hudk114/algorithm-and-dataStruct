const deepClone = function deepClone(obj) {
  if (typeof obj != 'object') return obj;
  var o = Array.isArray(obj) ? [] : {};
  for (var i in obj) {
    o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
  }
  return o;
};

module.exports = {
  deepClone
};
