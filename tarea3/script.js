const arraysToMap = (keys, values) => {
  const m = new Map();
  const len = Math.min(keys.length, values.length);
  for (let i = 0; i < len; i++) m.set(keys[i], values[i]);
  return m;
};
